/**
 * Brand mark: isometric parcel + orbit + plane
 * Chosen from logistics icon options (package with global flight path).
 */
export function BrandLogoIcon({ size = 22 }: { size?: number }) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} fill="none" aria-hidden="true">
      {/* Orbit swoosh */}
      <path
        d="M47.5 21.5c2.4 3.6 3.5 7.8 2.8 12-1.5 9.6-10.2 16.4-20 16-9.6-.4-17.4-7.8-18.2-17.4C11.2 21.4 19 12.8 29.4 11.6c4.6-.6 9.2.6 12.8 3.2"
        stroke="currentColor"
        strokeWidth="4.8"
        strokeLinecap="round"
      />

      {/* Package */}
      <path d="M21.5 27 32 21.2 42.5 27 32 32.8 21.5 27Z" fill="currentColor" />
      <path d="M21.5 27 32 32.8V46L21.5 40.2V27Z" fill="currentColor" opacity="0.88" />
      <path d="M32 32.8 42.5 27V40.2L32 46V32.8Z" fill="currentColor" opacity="0.62" />
      <path d="M32 21.2V32.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.25" />

      {/* Plane */}
      <path
        fill="currentColor"
        d="M45.2 13.2c.4-.3.9-.2 1.2.2l1.6 2.4c.2.3.2.7 0 1l-2.6 2.2 1.4 3.2c.2.4 0 .8-.4 1-.2.1-.5 0-.7-.1l-2.8-1.6-2.4 1.4c-.4.2-.9.1-1.1-.3l-.8-1.2c-.2-.4-.1-.8.3-1.1l2.2-1.4-.8-2.8c-.1-.3 0-.6.2-.8l.9-.9c.3-.3.7-.3 1 0l2.6 1.2 1.8-1.6Z"
      />
    </svg>
  );
}
