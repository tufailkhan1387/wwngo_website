type Props = {
  eyebrow?: string;
  title: string;
  lead: string;
  children?: React.ReactNode;
  compact?: boolean;
};

export function PageHero({ eyebrow, title, lead, children, compact }: Props) {
  return (
    <section className={`page-hero ${compact ? 'page-hero--compact' : ''}`}>
      <div className="container page-hero__inner fade-up">
        {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
        <h1>{title}</h1>
        <p className="page-hero__lead">{lead}</p>
        {children}
      </div>
    </section>
  );
}
