import { useLanguage } from '../../context/LanguageContext';

type Props = {
  className?: string;
  variant?: 'default' | 'cta' | 'footer';
};

function PlayIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#34A853" d="M3.6 2.2c-.4.2-.6.6-.6 1.1v17.4c0 .5.2.9.6 1.1l10.3-9.8L3.6 2.2Z" />
      <path fill="#FBBC04" d="M16.7 15.4 13.2 12 3.6 21.8c.2.1.4.2.6.2.3 0 .6-.1.9-.3l11.6-6.3Z" />
      <path fill="#EA4335" d="M20.5 10.7 16.7 8.6 13.2 12l3.5 3.4 3.8-2.1c.8-.5.8-1.2 0-1.6Z" />
      <path fill="#4285F4" d="M3.6 2.2 13.2 12l3.5-3.4L5.1 2.3C4.8 2.1 4.5 2 4.2 2c-.2 0-.4.1-.6.2Z" />
    </svg>
  );
}

function AppleIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.4 12.6c0-2.1 1.7-3.1 1.8-3.2-1-1.4-2.5-1.6-3.1-1.6-1.3-.1-2.5.8-3.2.8-.7 0-1.7-.7-2.8-.7-1.4 0-2.8.9-3.5 2.2-1.5 2.6-.4 6.5 1.1 8.6.7 1 1.6 2.2 2.7 2.1 1.1-.1 1.5-.7 2.8-.7s1.7.7 2.8.7c1.2 0 1.9-1 2.6-2 .8-1.2 1.1-2.3 1.2-2.4-.1 0-2.1-.8-2.1-3.8ZM14.5 6.4c.6-.7 1-1.7.9-2.7-0.9.1-1.9.6-2.5 1.3-.6.6-1.1 1.6-1 2.6 1 .1 1.9-.5 2.6-1.2Z" />
    </svg>
  );
}

export function StoreBadges({ className = '', variant = 'default' }: Props) {
  const { lang, t } = useLanguage();
  const playUrl = import.meta.env.VITE_PLAY_STORE_URL as string | undefined;
  const appStoreUrl = import.meta.env.VITE_APP_STORE_URL as string | undefined;

  const playBadge = lang === 'fr' ? '/badges/google-play-fr.png' : '/badges/google-play-en.png';
  const appleBadge = lang === 'fr' ? '/badges/app-store-fr.svg' : '/badges/app-store-en.svg';

  if (variant === 'footer') {
    const playLabel = lang === 'fr' ? ['Disponible sur', 'Google Play'] : ['Get it on', 'Google Play'];
    const appleLabel = lang === 'fr' ? ['Télécharger dans', "l'App Store"] : ['Download on the', 'App Store'];

    const play = (
      <span className="store-footer-btn">
        <PlayIcon size={22} />
        <span className="store-footer-btn__copy">
          <span className="store-footer-btn__eyebrow">{playLabel[0]}</span>
          <span className="store-footer-btn__name">{playLabel[1]}</span>
        </span>
      </span>
    );
    const apple = (
      <span className="store-footer-btn">
        <AppleIcon size={26} />
        <span className="store-footer-btn__copy">
          <span className="store-footer-btn__eyebrow">{appleLabel[0]}</span>
          <span className="store-footer-btn__name">{appleLabel[1]}</span>
        </span>
      </span>
    );
    return (
      <div className={`store-footer ${className}`}>
        {playUrl ? (
          <a href={playUrl} target="_blank" rel="noopener noreferrer" aria-label={t.common.getOnGooglePlay}>
            {play}
          </a>
        ) : (
          <span title={t.common.storeLinkPlaceholder}>{play}</span>
        )}
        {appStoreUrl ? (
          <a href={appStoreUrl} target="_blank" rel="noopener noreferrer" aria-label={t.common.downloadOnAppStore}>
            {apple}
          </a>
        ) : (
          <span title={t.common.storeLinkPlaceholder}>{apple}</span>
        )}
      </div>
    );
  }

  if (variant === 'cta') {
    const playLabel = lang === 'fr' ? ['Disponible sur', 'Google Play'] : ['Get it on', 'Google Play'];
    const appleLabel = lang === 'fr' ? ['Télécharger dans', "l'App Store"] : ['Download on the', 'App Store'];

    const playInner = (
      <>
        <PlayIcon size={24} />
        <span className="store-cta__copy">
          <span className="store-cta__eyebrow">{playLabel[0]}</span>
          <span className="store-cta__name">{playLabel[1]}</span>
        </span>
      </>
    );

    const appleInner = (
      <>
        <AppleIcon size={24} />
        <span className="store-cta__copy">
          <span className="store-cta__eyebrow">{appleLabel[0]}</span>
          <span className="store-cta__name">{appleLabel[1]}</span>
        </span>
      </>
    );

    return (
      <div className={`store-cta ${className}`}>
        {playUrl ? (
          <a className="store-cta__btn store-cta__btn--dark" href={playUrl} target="_blank" rel="noopener noreferrer" aria-label={t.common.getOnGooglePlay}>
            {playInner}
          </a>
        ) : (
          <span className="store-cta__btn store-cta__btn--dark" title={t.common.storeLinkPlaceholder}>
            {playInner}
          </span>
        )}
        {appStoreUrl ? (
          <a className="store-cta__btn store-cta__btn--light" href={appStoreUrl} target="_blank" rel="noopener noreferrer" aria-label={t.common.downloadOnAppStore}>
            {appleInner}
          </a>
        ) : (
          <span className="store-cta__btn store-cta__btn--light" title={t.common.storeLinkPlaceholder}>
            {appleInner}
          </span>
        )}
      </div>
    );
  }

  return (
    <div className={`store-badges ${className}`}>
      {playUrl ? (
        <a href={playUrl} target="_blank" rel="noopener noreferrer" aria-label={t.common.getOnGooglePlay}>
          <img className="play" src={playBadge} alt={t.common.getOnGooglePlay} />
        </a>
      ) : (
        <span className="store-placeholder" title={t.common.storeLinkPlaceholder}>
          {t.common.getOnGooglePlay}
        </span>
      )}
      {appStoreUrl ? (
        <a href={appStoreUrl} target="_blank" rel="noopener noreferrer" aria-label={t.common.downloadOnAppStore}>
          <img src={appleBadge} alt={t.common.downloadOnAppStore} />
        </a>
      ) : (
        <span className="store-placeholder" title={t.common.storeLinkPlaceholder}>
          {t.common.downloadOnAppStore}
        </span>
      )}
    </div>
  );
}
