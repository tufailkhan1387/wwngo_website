import { useState, type FormEvent, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/ui/Reveal';
import { useLanguage } from '../context/LanguageContext';
import '../styles/home.css';
import '../styles/contact.css';
import '../styles/delete-account.css';

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

type FormState = {
  name: string;
  email: string;
  phone: string;
  reason: string;
  confirm: boolean;
};

const initialForm: FormState = {
  name: '',
  email: '',
  phone: '',
  reason: '',
  confirm: false,
};

function getApiBase() {
  const site = import.meta.env.VITE_SITE_API_URL as string | undefined;
  if (site) return site.replace(/\/$/, '');
  const url = import.meta.env.VITE_API_URL as string | undefined;
  if (!url) return '';
  return url.replace(/\/api\/v1\/?$/, '').replace(/\/$/, '');
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M10.3 4.3a1 1 0 0 1 1.4 0l5 5a1 1 0 0 1 0 1.4l-5 5a1 1 0 0 1-1.4-1.4L13.6 11H4a1 1 0 1 1 0-2h9.6l-3.3-3.3a1 1 0 0 1 0-1.4Z" />
    </svg>
  );
}

export function DeleteAccount() {
  const { t, lang } = useLanguage();
  const d = t.deleteAccount;
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const titleAccent = lang === 'fr' ? 'compte' : 'account';

  const validate = () => {
    const next: Partial<Record<keyof FormState, string>> = {};
    const minChars = (n: number) => t.common.minChars.replace('{n}', String(n));
    if (!form.name.trim()) next.name = t.common.required;
    else if (form.name.trim().length < 2) next.name = minChars(2);
    if (!form.email.trim()) next.email = t.common.required;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = t.common.required;
    if (!form.confirm) next.confirm = t.common.required;
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('idle');
    if (!validate()) return;

    setStatus('loading');
    try {
      const res = await fetch(`${getApiBase()}/api/delete-account`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          reason: form.reason.trim(),
          confirm: form.confirm,
        }),
      });
      if (!res.ok) throw new Error('Request failed');
      setForm(initialForm);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="contact-page delete-account-page">
      <section className="home-panel home-panel--dark contact-hero" aria-label={d.title}>
        <div className="contact-hero__bg" aria-hidden="true" />
        <div className="contact-hero__inner">
          <Reveal>
            <nav className="contact-hero__crumbs" aria-label="Breadcrumb">
              <Link to="/">{t.nav.home}</Link>
              <span aria-hidden="true">/</span>
              <span>{t.footer.deleteAccount}</span>
            </nav>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="contact-hero__title">{accentRing(d.title, titleAccent)}</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="contact-hero__lead">{d.lead}</p>
          </Reveal>
        </div>
      </section>

      <section className="home-panel home-panel--white delete-account-info" aria-labelledby="delete-steps-title">
        <div className="delete-account-info__inner">
          <Reveal>
            <h2 id="delete-steps-title" className="delete-account-info__title">
              {d.stepsTitle}
            </h2>
          </Reveal>
          <ol className="delete-account-steps">
            {d.steps.map((step, index) => (
              <Reveal key={step.title} delay={0.04 * (index + 1)} as="li" className="delete-account-step">
                <span className="delete-account-step__num" aria-hidden="true">
                  {index + 1}
                </span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={0.16} className="delete-account-data">
            <h2 className="delete-account-info__title">{d.dataTitle}</h2>
            <p>{d.dataDeletedIntro}</p>
            <ul>
              {d.dataDeleted.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>{d.dataRetainedIntro}</p>
            <ul>
              {d.dataRetained.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="delete-account-data__note">{d.processingNote}</p>
          </Reveal>
        </div>
      </section>

      <section className="home-panel home-panel--lilac contact-body" aria-labelledby="delete-form-title">
        <div className="contact-body__grid delete-account-form-grid">
          <Reveal className="contact-form-wrap">
            <h2 id="delete-form-title" className="contact-form__title">
              {d.formTitle}
            </h2>
            <p className="contact-form__lead">{d.formLead}</p>

            <form className="contact-form" onSubmit={onSubmit} noValidate>
              <div className="contact-form__row">
                <label htmlFor="delete-name">
                  {d.nameLabel} <span aria-hidden="true">*</span>
                </label>
                <input
                  id="delete-name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder={t.common.placeholderName}
                  autoComplete="name"
                />
                {errors.name ? <span className="contact-form__error">{errors.name}</span> : null}
              </div>

              <div className="contact-form__row">
                <label htmlFor="delete-email">
                  {d.emailLabel} <span aria-hidden="true">*</span>
                </label>
                <input
                  id="delete-email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder={t.common.placeholderEmail}
                  autoComplete="email"
                />
                <span className="delete-account-hint">{d.emailHint}</span>
                {errors.email ? <span className="contact-form__error">{errors.email}</span> : null}
              </div>

              <div className="contact-form__row contact-form__row--full">
                <label htmlFor="delete-phone">
                  {d.phoneLabel} <span className="delete-account-optional">({d.phoneOptional})</span>
                </label>
                <input
                  id="delete-phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  autoComplete="tel"
                />
              </div>

              <div className="contact-form__row contact-form__row--full">
                <label htmlFor="delete-reason">{d.reasonLabel}</label>
                <textarea
                  id="delete-reason"
                  rows={4}
                  value={form.reason}
                  onChange={(e) => setForm({ ...form, reason: e.target.value })}
                  placeholder={d.reasonPlaceholder}
                />
              </div>

              <div className="contact-form__row contact-form__row--full">
                <label className="delete-account-confirm" htmlFor="delete-confirm">
                  <input
                    id="delete-confirm"
                    type="checkbox"
                    checked={form.confirm}
                    onChange={(e) => setForm({ ...form, confirm: e.target.checked })}
                  />
                  <span>{d.confirmLabel}</span>
                </label>
                {errors.confirm ? <span className="contact-form__error">{errors.confirm}</span> : null}
              </div>

              {status === 'success' ? (
                <div className="contact-form__success contact-form__row--full">{d.success}</div>
              ) : null}
              {status === 'error' ? (
                <div className="contact-form__error contact-form__row--full">{d.error}</div>
              ) : null}

              <div className="contact-form__row--full">
                <button className="contact-form__submit" type="submit" disabled={status === 'loading'}>
                  {status === 'loading' ? '…' : d.submit}
                  <span className="contact-form__submit-icon">
                    <ArrowIcon />
                  </span>
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
