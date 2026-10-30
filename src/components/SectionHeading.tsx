export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-10">
      {eyebrow && (
        <p className="mb-2 font-mono text-xs uppercase tracking-widest text-muted">
          {eyebrow}
        </p>
      )}
      <h1 className="font-serif text-3xl tracking-tight text-foreground sm:text-4xl">
        {title}
      </h1>
      {description && (
        <p className="mt-3 max-w-xl text-muted">{description}</p>
      )}
    </div>
  );
}
