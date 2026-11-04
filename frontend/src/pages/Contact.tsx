import { useState, type FormEvent, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/ui/Reveal';
import { useLanguage } from '../context/LanguageContext';
import '../styles/home.css';
import '../styles/contact.css';

function LimeRing({ children }: { children: ReactNode }) {
  return (
    <span className="home-highlight-ring">
      {children}
      <svg
        className="home-highlight-ring__svg"
        viewBox="0 0 200 60"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M14 34C10 14 70 5 118 6c46 1 78 9 76 26-2 17-62 24-112 22C40 52 6 46 8 30 10 18 40 10 70 8"
          fill="none"
          stroke="#D3F36B"
          strokeWidth="2.6"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </span>
  );
}

function accentRing(text: string, accent: string) {
  const idx = text.lastIndexOf(accent);
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <LimeRing>
        <span className="contact-hero__accent">{accent}</span>
      </LimeRing>
      {text.slice(idx + accent.length)}
    </>
  );
}

function accentSerif(text: string, accent: string) {
  const idx = text.lastIndexOf(accent);
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <em className="serif-accent">{accent}</em>
      {text.slice(idx + accent.length)}
    </>
  );
}

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
  inquiryType: string;
};

const initialForm: FormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
  inquiryType: 'general',
};

function getApiBase() {
  const url = import.meta.env.VITE_API_URL as string | undefined;
  return (url ?? 'http://localhost:5000').replace(/\/$/, '');
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M10.3 4.3a1 1 0 0 1 1.4 0l5 5a1 1 0 0 1 0 1.4l-5 5a1 1 0 0 1-1.4-1.4L13.6 11H4a1 1 0 1 1 0-2h9.6l-3.3-3.3a1 1 0 0 1 0-1.4Z" />
    </svg>
  );
}

export function Contact() {
  const { t, lang } = useLanguage();
  const c = t.contact;
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const titleAccent = lang === 'fr' ? 'nous' : 'us';
  const formAccent = lang === 'fr' ? 'message' : 'message';

  const validate = () => {
    const next: Partial<Record<keyof FormState, string>> = {};
    // Minimum lengths match backend/src/routes/contact.js
    const minChars = (n: number) => t.common.minChars.replace('{n}', String(n));
    if (!form.name.trim()) next.name = t.common.required;
    else if (form.name.trim().length < 2) next.name = minChars(2);
    if (!form.email.trim()) next.email = t.common.required;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = t.common.required;
    if (!form.subject.trim()) next.subject = t.common.required;
    else if (form.subject.trim().length < 3) next.subject = minChars(3);
    if (!form.message.trim()) next.message = t.common.required;
    else if (form.message.trim().length < 10) next.message = minChars(10);
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('idle');
    if (!validate()) return;

    setStatus('loading');
    try {
      const res = await fetch(`${getApiBase()}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          subject: form.subject.trim(),
          message: form.message.trim(),
          inquiryType: form.inquiryType,
        }),
      });
      if (!res.ok) throw new Error('Request failed');
      setForm(initialForm);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const reachItems = [
    {
      key: 'support',
      label: t.footer.supportEmail,
      value: t.footer.supportEmailPlaceholder,
      icon: (
        <>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </>
      ),
    },
    {
      key: 'business',
      label: t.footer.businessEmail,
      value: t.footer.businessEmailPlaceholder,
      icon: (
        <>
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18" />
        </>
      ),
    },
    {
      key: 'phone',
      label: c.phoneLabel,
      value: c.phonePlaceholder,
      icon: (
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
      ),
    },
    {
      key: 'office',
      label: t.footer.address,
      value: t.footer.addressPlaceholder,
      icon: (
        <>
          <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" />
          <circle cx="12" cy="9.5" r="2.5" />
        </>
      ),
    },
  ];

  return (
    <div className="contact-page">
      <section className="home-panel home-panel--dark contact-hero" aria-label="Contact hero">
        <div className="contact-hero__bg" aria-hidden="true" />
        <div className="contact-hero__inner">
          <Reveal>
            <nav className="contact-hero__crumbs" aria-label="Breadcrumb">
              <Link to="/">{t.nav.home}</Link>
              <span aria-hidden="true">/</span>
              <span>{t.nav.contact}</span>
            </nav>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="contact-hero__title">{accentRing(c.title, titleAccent)}</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="contact-hero__lead">{c.lead}</p>
          </Reveal>
        </div>
      </section>

      <section className="home-panel home-panel--white contact-body" aria-labelledby="form-title">
        <div className="contact-body__grid">
          <Reveal className="contact-form-wrap">
            <h2 id="form-title" className="contact-form__title">
              {accentSerif(c.formTitle, formAccent)}
            </h2>
            <p className="contact-form__lead">{c.formLead}</p>

            <form className="contact-form" onSubmit={onSubmit} noValidate>
              <div className="contact-form__row">
                <label htmlFor="contact-name">
                  {t.common.name} <span aria-hidden="true">*</span>
                </label>
                <input
                  id="contact-name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder={t.common.placeholderName}
                  autoComplete="name"
                />
                {errors.name ? <span className="contact-form__error">{errors.name}</span> : null}
              </div>

              <div className="contact-form__row">
                <label htmlFor="contact-email">
                  {t.common.email} <span aria-hidden="true">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder={t.common.placeholderEmail}
                  autoComplete="email"
                />
                {errors.email ? <span className="contact-form__error">{errors.email}</span> : null}
              </div>

              <div className="contact-form__row">
                <label htmlFor="contact-type">{t.common.inquiryType}</label>
                <div className="contact-form__select">
                  <select
                    id="contact-type"
                    value={form.inquiryType}
                    onChange={(e) => setForm({ ...form, inquiryType: e.target.value })}
                  >
                    <option value="general">{t.common.inquiryGeneral}</option>
                    <option value="sender">{t.common.inquirySender}</option>
                    <option value="traveler">{t.common.inquiryTraveler}</option>
                    <option value="receiver">{t.common.inquiryReceiver}</option>
                    <option value="partnership">{t.common.inquiryPartnership}</option>
                  </select>
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M5.3 7.3a1 1 0 0 1 1.4 0L10 10.6l3.3-3.3a1 1 0 1 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 0-1.4Z" />
                  </svg>
                </div>
              </div>

              <div className="contact-form__row">
                <label htmlFor="contact-subject">
                  {t.common.subject} <span aria-hidden="true">*</span>
                </label>
                <input
                  id="contact-subject"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder={t.common.placeholderSubject}
                />
                {errors.subject ? <span className="contact-form__error">{errors.subject}</span> : null}
              </div>

              <div className="contact-form__row contact-form__row--full">
                <label htmlFor="contact-message">
                  {t.common.message} <span aria-hidden="true">*</span>
                </label>
                <textarea
                  id="contact-message"
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder={t.common.placeholderMessage}
                />
                {errors.message ? <span className="contact-form__error">{errors.message}</span> : null}
              </div>

              {status === 'success' ? <div className="contact-form__success contact-form__row--full">{t.common.successContact}</div> : null}
              {status === 'error' ? <div className="contact-form__error contact-form__row--full">{t.common.errorContact}</div> : null}

              <div className="contact-form__row--full">
                <button className="contact-form__submit" type="submit" disabled={status === 'loading'}>
                  {status === 'loading' ? '…' : t.common.sendMessage}
                  <span className="contact-form__submit-icon">
                    <ArrowIcon />
                  </span>
                </button>
              </div>
            </form>
          </Reveal>

          <div className="contact-aside-wrap">
            <Reveal delay={0.06}>
              <aside className="contact-aside">
                <div className="contact-aside__bg" aria-hidden="true" />
                <h2 className="contact-aside__title">{c.officeTitle}</h2>
                <ul className="contact-aside__list">
                  {reachItems.map((item) => (
                    <li key={item.key}>
                      <span className="contact-aside__icon" aria-hidden="true">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                          {item.icon}
                        </svg>
                      </span>
                      <div>
                        <p className="contact-aside__label">{item.label}</p>
                        <p className="contact-aside__value">{item.value}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </aside>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
