"use client";

import { useEffect, useState } from "react";
import {
  Check,
  Eye,
  EyeOff,
  LoaderCircle,
  LockKeyhole,
  Mail,
  UserRound,
  X,
} from "lucide-react";

type ToastState = {
  open: boolean;
  title: string;
  message: string;
  tone: "success" | "error";
};

export function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [pending, setPending] = useState(false);
  const [agree, setAgree] = useState(true);
  const [toast, setToast] = useState<ToastState>({
    open: false,
    title: "",
    message: "",
    tone: "success",
  });

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (!toast.open) return;

    const timer = window.setTimeout(() => {
      setToast((prev) => ({ ...prev, open: false }));
    }, 2800);

    return () => window.clearTimeout(timer);
  }, [toast.open]);

  function openToast(
    title: string,
    message: string,
    tone: "success" | "error",
  ) {
    setToast({ open: true, title, message, tone });
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.password.trim()) {
      openToast("اطلاعات ناقص است", "لطفاً همه فیلدها را تکمیل کن.", "error");
      return;
    }

    if (!agree) {
      openToast(
        "تأیید قوانین لازم است",
        "برای ادامه باید قوانین را بپذیری.",
        "error",
      );
      return;
    }

    setPending(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setPending(false);

    openToast(
      "فرم آماده است",
      "این فرم الان آماده اتصال به بک‌اند است.",
      "success",
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-(--color-foreground)"
          >
            نام و نام خانوادگی
          </label>
          <div className="relative">
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-primary/55">
              <UserRound className="h-4 w-4" />
            </span>
            <input
              id="name"
              type="text"
              value={form.name}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, name: e.target.value }))
              }
              placeholder="مثلاً محمد رضایی"
              className="h-13 w-full rounded-[20px] border border-(--color-border) bg-(--color-background) pr-11 pl-4 text-sm text-(--color-foreground) outline-none shadow-[inset_0_1px_0_rgba(255,255,255,0.45)] transition-all placeholder:text-foreground/30 focus:border-primary/30 focus:shadow-[0_0_0_4px_rgba(111,78,55,0.08)]"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-(--color-foreground)"
          >
            ایمیل
          </label>
          <div className="relative">
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-primary/55">
              <Mail className="h-4 w-4" />
            </span>
            <input
              id="email"
              type="email"
              dir="ltr"
              value={form.email}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, email: e.target.value }))
              }
              placeholder="you@example.com"
              className="h-13 w-full rounded-[20px] border border-(--color-border) bg-(--color-background) pr-11 pl-4 text-sm text-(--color-foreground) outline-none shadow-[inset_0_1px_0_rgba(255,255,255,0.45)] transition-all placeholder:text-foreground/30 focus:border-primary/30 focus:shadow-[0_0_0_4px_rgba(111,78,55,0.08)]"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="password"
            className="block text-sm font-semibold text-(--color-foreground)"
          >
            رمز عبور
          </label>
          <div className="relative">
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-primary/55">
              <LockKeyhole className="h-4 w-4" />
            </span>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              dir="ltr"
              value={form.password}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, password: e.target.value }))
              }
              placeholder="••••••••"
              className="h-13 w-full rounded-[20px] border border-(--color-border) bg-(--color-background) pr-11 pl-12 text-sm text-(--color-foreground) outline-none shadow-[inset_0_1px_0_rgba(255,255,255,0.45)] transition-all placeholder:text-foreground/30 focus:border-primary/30 focus:shadow-[0_0_0_4px_rgba(111,78,55,0.08)]"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={showPassword ? "مخفی کردن رمز" : "نمایش رمز"}
              className="absolute inset-y-0 left-0 flex items-center pl-4 text-primary/55 transition-colors hover:text-(--color-primary)"
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        <label className="flex cursor-pointer items-start gap-3 rounded-[18px] border border-(--color-border) bg-(--color-muted) px-4 py-3 text-sm text-foreground/75">
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
            className="mt-0.5 h-4 w-4 rounded border-(--color-border) accent-(--color-primary)"
          />
          <span>با قوانین و شرایط استفاده موافقم.</span>
        </label>

        <button
          type="submit"
          disabled={pending}
          className="inline-flex h-13 w-full items-center justify-center gap-2 rounded-[20px] bg-(--color-primary) px-5 text-sm font-bold text-white shadow-[0_14px_32px_rgba(111,78,55,0.24)] transition-all hover:bg-(--color-accent) disabled:cursor-not-allowed disabled:opacity-70"
        >
          {pending ? (
            <>
              <LoaderCircle className="h-4 w-4 animate-spin" />
              <span>در حال بررسی...</span>
            </>
          ) : (
            <span>ساخت حساب</span>
          )}
        </button>
      </form>

      <div
        className={`pointer-events-none fixed left-4 top-4 z-80 w-[calc(100%-2rem)] max-w-sm transition-all duration-300 sm:left-6 sm:top-6 ${
          toast.open ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
        }`}
      >
        <div
          className={`rounded-[22px] border p-4 shadow-[0_18px_40px_rgba(31,23,32,0.12)] backdrop-blur-xl ${
            toast.tone === "success"
              ? "border-emerald-400/20 bg-[rgba(248,252,250,0.92)]"
              : "border-rose-400/20 bg-[rgba(255,247,247,0.94)]"
          }`}
        >
          <div className="flex items-start gap-3">
            <span
              className={`mt-0.5 flex h-9 w-9 items-center justify-center rounded-2xl ${
                toast.tone === "success"
                  ? "bg-emerald-100 text-emerald-700"
                  : "bg-rose-100 text-rose-700"
              }`}
            >
              {toast.tone === "success" ? (
                <Check className="h-4 w-4" />
              ) : (
                <X className="h-4 w-4" />
              )}
            </span>
            <div className="flex-1">
              <div className="text-sm font-bold text-(--color-foreground)">
                {toast.title}
              </div>
              <div className="mt-1 text-sm leading-6 text-foreground/65">
                {toast.message}
              </div>
            </div>
            <button
              type="button"
              onClick={() => setToast((prev) => ({ ...prev, open: false }))}
              className="pointer-events-auto text-foreground/40 hover:text-(--color-foreground)"
              aria-label="بستن"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
