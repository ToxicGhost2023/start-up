import type { ReactNode } from "react";

type AuthShellProps = {
  badge: string;
  title: string;
  description: string;
  footer: ReactNode;
  children: ReactNode;
  backgroundImage?: string;
};

export function AuthShell({
  badge,
  title,
  description,
  footer,
  children,
  backgroundImage
}: AuthShellProps) {
  return (
    <main className="relative min-h-dvh overflow-hidden bg-(--color-background) text-(--color-foreground)">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,15,15,0.52),rgba(15,15,15,0.22))]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(192,132,87,0.22),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(111,78,55,0.22),transparent_30%)]" />

      <div className="relative mx-auto flex min-h-dvh w-full max-w-7xl items-center px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid w-full gap-6 lg:grid-cols-2 lg:gap-8">
          <section className="order-1 flex items-stretch lg:order-2">
            <div className="relative w-full overflow-hidden rounded-4xl border border-white/16 bg-white/10 p-5 shadow-[0_20px_60px_rgba(15,15,15,0.22),inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-2xl sm:p-6 lg:p-8">
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.10),rgba(255,255,255,0.04))]" />
              <div className="absolute inset-x-0 top-0 h-px bg-white/20" />
              <div className="relative flex h-full min-h-80 items-center justify-center sm:min-h-95">
                <div className="w-full max-w-md rounded-[30px] border border-white/14 bg-white/12 p-4 shadow-[8px_8px_28px_rgba(17,17,17,0.16),-8px_-8px_24px_rgba(255,255,255,0.06),inset_0_1px_0_rgba(255,255,255,0.14)] backdrop-blur-xl sm:p-5">
                  <div className="rounded-[26px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.10),rgba(255,255,255,0.05))] p-4 shadow-[inset_6px_6px_14px_rgba(17,17,17,0.08),inset_-6px_-6px_14px_rgba(255,255,255,0.05)] sm:p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-semibold text-white">
                          Brand Surface
                        </div>
                        <div className="mt-1 text-xs text-white/64">
                          Glassmorphism + Neumorphism
                        </div>
                      </div>
                      <span className="rounded-full border border-white/14 bg-white/10 px-3 py-1 text-[11px] font-medium text-white/88 backdrop-blur-md">
                        Secure
                      </span>
                    </div>

                    <div className="mt-5 grid gap-3">
                      <div className="h-3 w-4/5 rounded-full bg-white/18" />
                      <div className="h-3 w-2/3 rounded-full bg-white/12" />
                      <div className="mt-3 h-28 rounded-[20px] border border-white/10 bg-[linear-gradient(135deg,rgba(192,132,87,0.28),rgba(255,255,255,0.08))] shadow-[inset_0_1px_0_rgba(255,255,255,0.16)]" />
                    </div>

                    <div className="mt-4 grid grid-cols-3 gap-3">
                      <div className="rounded-[18px] border border-white/10 bg-white/10 p-3 shadow-[6px_6px_16px_rgba(17,17,17,0.12),-6px_-6px_16px_rgba(255,255,255,0.04)] backdrop-blur-md">
                        <div className="h-2 w-8 rounded-full bg-white/24" />
                        <div className="mt-2 h-2 w-12 rounded-full bg-white/14" />
                      </div>
                      <div className="rounded-[18px] border border-white/10 bg-white/10 p-3 shadow-[6px_6px_16px_rgba(17,17,17,0.12),-6px_-6px_16px_rgba(255,255,255,0.04)] backdrop-blur-md">
                        <div className="h-2 w-8 rounded-full bg-white/24" />
                        <div className="mt-2 h-2 w-12 rounded-full bg-white/14" />
                      </div>
                      <div className="rounded-[18px] border border-white/10 bg-white/10 p-3 shadow-[6px_6px_16px_rgba(17,17,17,0.12),-6px_-6px_16px_rgba(255,255,255,0.04)] backdrop-blur-md">
                        <div className="h-2 w-8 rounded-full bg-white/24" />
                        <div className="mt-2 h-2 w-12 rounded-full bg-white/14" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="order-2 flex items-center lg:order-1">
            <div className="w-full rounded-4xl border border-white/16 bg-white/10 p-5 shadow-[0_20px_60px_rgba(15,15,15,0.22),inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-2xl sm:p-6 lg:p-8">
              <div className="mb-8">
                <span className="inline-flex rounded-full border border-white/14 bg-white/10 px-4 py-2 text-xs font-medium text-white/90 backdrop-blur-md">
                  {badge}
                </span>
                <h1 className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl">
                  {title}
                </h1>
                <p className="mt-3 max-w-md text-sm leading-7 text-white/72">
                  {description}
                </p>
              </div>

              {children}

              <div className="mt-6 text-center text-sm text-white/70">{footer}</div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
