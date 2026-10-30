import { cx } from "@/lib/utils";

export function Tag({
  label,
  active,
  onClick,
}: {
  label: string;
  active?: boolean;
  onClick?: () => void;
}) {
  const isInteractive = typeof onClick === "function";
  const Comp = isInteractive ? "button" : "span";

  return (
    <Comp
      onClick={onClick}
      className={cx(
        "inline-flex items-center rounded-full border px-2.5 py-1 font-mono text-xs transition-colors",
        active
          ? "border-accent bg-accent text-background"
          : "border-border text-muted",
        isInteractive && "cursor-pointer hover:border-accent"
      )}
    >
      {label}
    </Comp>
  );
}
