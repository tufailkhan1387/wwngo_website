import { env } from '../config/env.js';
import { AppError } from '../utils/errors.js';

const PLACES_AUTOCOMPLETE =
  'https://places.googleapis.com/v1/places:autocomplete';
const PLACES_DETAILS_BASE = 'https://places.googleapis.com/v1/places';

const AUTOCOMPLETE_FIELD_MASK =
  'suggestions.placePrediction.placeId,suggestions.placePrediction.text,suggestions.placePrediction.structuredFormat';
const DETAILS_FIELD_MASK =
  'id,displayName,formattedAddress,location,addressComponents';

function assertConfigured() {
  if (!env.googleMapsApiKey) {
    throw new AppError(
      'Google Maps is not configured. Set GOOGLE_MAPS_API_KEY on the server.',
      503,
      'MAPS_NOT_CONFIGURED'
    );
  }
}

function textValue(value) {
  if (value && typeof value === 'object' && typeof value.text === 'string') {
    return value.text.trim();
  }
  if (typeof value === 'string') return value.trim();
  return '';
}

function googleErrorMessage(data, fallback) {
  return data?.error?.message || fallback;
}

/**
 * @param {string} query
 * @param {'cities'|'places'|'airports'} mode
 */
export async function autocomplete(query, mode = 'places') {
  assertConfigured();
  const trimmed = String(query || '').trim();
  if (trimmed.length < 2) return { predictions: [] };

  const body = { input: trimmed };
  if (mode === 'cities') {
    body.includedPrimaryTypes = ['locality', 'administrative_area_level_1'];
  } else if (mode === 'airports') {
    body.includedPrimaryTypes = ['airport'];
  }

  const response = await fetch(PLACES_AUTOCOMPLETE, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Goog-Api-Key': env.googleMapsApiKey,
      'X-Goog-FieldMask': AUTOCOMPLETE_FIELD_MASK,
    },
    body: JSON.stringify(body),
  });
  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new AppError(
      googleErrorMessage(
        data,
        `Places autocomplete failed (${response.status})`
      ),
      502,
      'PLACES_API_ERROR'
    );
  }

  const predictions = (data.suggestions || [])
    .map((item) => {
      const pred = item?.placePrediction || {};
      const structured = pred.structuredFormat || {};
      const mainText = textValue(structured.mainText);
      const secondaryText = textValue(structured.secondaryText);
      const fullText = textValue(pred.text);
      const name = mainText || fullText || '';
      const address =
        fullText ||
        [mainText, secondaryText].filter(Boolean).join(', ');
      return {
        name,
        address,
        placeId: pred.placeId || null,
      };
    })
    .filter((p) => p.name || p.address);

  return { predictions };
}

/**
 * Resolve place details (country ISO + coordinates) for a place_id.
 */
export async function placeDetails(placeId) {
  assertConfigured();
  const id = String(placeId || '').trim();
  if (!id) {
    throw new AppError('placeId is required', 400, 'VALIDATION_ERROR');
  }

  const resourceId = id.startsWith('places/') ? id.slice('places/'.length) : id;
  const url = `${PLACES_DETAILS_BASE}/${encodeURIComponent(resourceId)}`;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'X-Goog-Api-Key': env.googleMapsApiKey,
      'X-Goog-FieldMask': DETAILS_FIELD_MASK,
    },
  });
  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new AppError(
      googleErrorMessage(data, `Places details failed (${response.status})`),
      502,
      'PLACES_API_ERROR'
    );
  }

  const components = data.addressComponents || [];
  const country = components.find((c) => (c.types || []).includes('country'));
  const locality =
    components.find((c) => (c.types || []).includes('locality')) ||
    components.find((c) =>
      (c.types || []).includes('administrative_area_level_1')
    );

  return {
    name: locality?.longText || data.displayName?.text || '',
    address: data.formattedAddress || data.displayName?.text || '',
    placeId: data.id || id,
    countryCode: country?.shortText || null,
    latitude: data.location?.latitude ?? null,
    longitude: data.location?.longitude ?? null,
  };
}
