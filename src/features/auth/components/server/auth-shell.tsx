import Image from "next/image";
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
  backgroundImage,
}: AuthShellProps) {
  return (
    <main className="relative min-h-dvh overflow-hidden  text-[#1f1720]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      />

      <div className="absolute inset-0 bg-linear-to-br from-[rgba(111,78,55,0.12)] via-[rgba(214,185,140,0.08)] to-[rgba(192,132,87,0.15)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(214,185,140,0.2),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(111,78,55,0.15),transparent_40%)]" />

      <div className="relative mx-auto flex min-h-dvh w-full max-w-6xl items-center justify-center px-4 py-6">
        <div className="relative w-full max-w-5xl overflow-hidden rounded-[40px] shadow-[0_40px_80px_rgba(111,78,55,0.15)] backdrop-blur-2xl border border-white/40">

          <div className="grid min-h-150 lg:grid-cols-[1.1fr_0.9fr]">

            <div className="relative hidden lg:flex flex-col items-center justify-center p-8 bg-linear-to-br from-white/80 via-[rgba(255,250,244,0.6)] to-[rgba(246,244,238,0.8)]">
              <div className="relative z-10 w-full max-w-md flex items-center justify-center">
                <Image
                  src="/assets/auth/signup.png"
                  alt="register"
                  width={600}
                  height={600}
                  className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(111,78,55,0.15)]"
                  priority
                />
              </div>
            </div>

            <div className="relative flex items-center p-6 lg:p-10 bg-[#1f1720]/95 backdrop-blur-sm rounded-t-[40px] lg:rounded-l-none lg:rounded-r-[40px] border-t lg:border-t-0 lg:border-l border-white/10">
              <div className="absolute inset-0 bg-linear-to-br from-[rgba(111,78,55,0.1)] to-transparent" />

              <div className="relative z-10 w-full max-w-sm mx-auto">
                <div className="mb-8">
                  <div className="inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-1.5 text-xs font-medium text-white/90 backdrop-blur-sm">
                    {badge}
                  </div>
                  <h1 className="mt-4 text-3xl font-bold leading-tight text-white">
                    {title}
                  </h1>
                  <p className="mt-2 text-sm leading-6 text-white/60">
                    {description}
                  </p>
                </div>

                {children}

                <div className="mt-6 text-center text-xs text-white/50">
                  {footer}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}