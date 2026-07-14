import type { PropsWithChildren, ReactNode } from "react";

type LandingPanelProps = PropsWithChildren<{
  className?: string;
  bg?: ReactNode;
  depth?: ReactNode;
}>;

export function LandingPanel({
  children,
  className,
  bg,
  depth,
}: LandingPanelProps) {
  return (
    <section className={`landing-panel ${className ?? ""}`}>
      {bg ? <div className="landing-panel__bg">{bg}</div> : null}
      {depth ? <div className="landing-panel__depth">{depth}</div> : null}

      <div className="landing-panel__inner">
        <div className="landing-panel__content">{children}</div>
      </div>
    </section>
  );
}
