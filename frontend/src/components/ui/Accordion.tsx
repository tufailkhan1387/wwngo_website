import { useState } from 'react';

export type FaqItem = {
  q: string;
  a: string;
};

type Props = {
  items: FaqItem[];
  /** Open first item by default (FAQ reference). */
  defaultOpen?: number | null;
};

function PlusIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M10 4a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4H5a1 1 0 1 1 0-2h4V5a1 1 0 0 1 1-1Z" />
    </svg>
  );
}

export function Accordion({ items, defaultOpen = 0 }: Props) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <div className="faq-acc">
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <div className={`faq-acc__item${isOpen ? ' is-open' : ''}`} key={`${item.q}-${index}`}>
            <button
              type="button"
              className="faq-acc__trigger"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : index)}
            >
              <span className="faq-acc__q">{item.q}</span>
              <span className={`faq-acc__icon${isOpen ? ' is-open' : ''}`} aria-hidden="true">
                <PlusIcon />
              </span>
            </button>
            <div className={`faq-acc__panel${isOpen ? ' is-open' : ''}`}>
              <p>{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
