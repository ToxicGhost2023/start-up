import type { ReactNode } from "react";
import clsx from "clsx";

type LandingPanelProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description: string;
  align?: "right" | "center";
  children: ReactNode;
  accent?: ReactNode;
  className?: string;
  contentClassName?: string;
};

export function LandingPanel({
  id,
  eyebrow,
  title,
  description,
  align = "right",
  children,
  accent,
  className,
  contentClassName,
}: LandingPanelProps) {
  const isCentered = align === "center";

  return (
    <section
      id={id}
      className={clsx("landing-panel relative isolate", className)}
    >
      <div className="landing-panel__bg">
        <div className="landing-panel__depth absolute inset-0">
          <div className="absolute left-[8%] top-[10%] h-32 w-32 rounded-full bg-[color-mix(in_srgb,var(--color-primary)_18%,transparent)] blur-3xl md:h-56 md:w-56" />
          <div className="absolute bottom-[12%] right-[8%] h-36 w-36 rounded-full bg-[color-mix(in_srgb,var(--color-secondary)_22%,transparent)] blur-3xl md:h-64 md:w-64" />
          <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/6 blur-3xl md:h-72 md:w-72" />
        </div>
      </div>

      <div className="landing-panel__inner">
        <div className="landing-panel__frame world-surface">
          {accent ? (
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-4xl">
              {accent}
            </div>
          ) : null}

          <div
            className={clsx(
              "landing-panel__content relative z-10",
              isCentered
                ? "items-center text-center"
                : "items-stretch text-right",
              contentClassName,
            )}
          >
            <div
              className={clsx("w-full max-w-3xl", isCentered ? "mx-auto" : "")}
            >
              {eyebrow ? (
                <span className="mb-4 inline-flex rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs font-medium text-(--color-muted-foreground) sm:text-sm">
                  {eyebrow}
                </span>
              ) : null}

              <h2 className="text-3xl leading-[1.15] font-black tracking-tight text-(--color-foreground) sm:text-4xl lg:text-5xl">
                {title}
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-(--color-muted-foreground) sm:text-base sm:leading-8">
                {description}
              </p>
            </div>

            <div className="w-full flex-1">{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
