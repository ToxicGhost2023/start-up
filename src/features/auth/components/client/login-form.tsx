"use client";

import { useEffect, useState } from "react";
import {
  Check,
  Eye,
  EyeOff,
  LoaderCircle,
  LockKeyhole,
  Mail,
  X,
} from "lucide-react";

type ToastState = {
  open: boolean;
  title: string;
  message: string;
  tone: "success" | "error";
};

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [pending, setPending] = useState(false);
  const [toast, setToast] = useState<ToastState>({
    open: false,
    title: "",
    message: "",
    tone: "success",
  });

  const [form, setForm] = useState({
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

  function openToast(title: string, message: string, tone: "success" | "error") {
    setToast({ open: true, title, message, tone });
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!form.email.trim() || !form.password.trim()) {
      openToast("اطلاعات ناقص است", "ایمیل و رمز عبور را وارد کنید.", "error");
      return;
    }
    setPending(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setPending(false);
    openToast("فرم آماده است", "ورود آماده اتصال به بک‌اند است.", "success");
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-1.5">
          <label htmlFor="email" className="block text-sm font-medium text-white/80">
            ایمیل
          </label>
          <div className="relative">
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-white/30">
              <Mail className="h-4 w-4" />
            </span>
            <input
              id="email"
              type="email"
              dir="ltr"
              value={form.email}
              onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
              placeholder="you@example.com"
              className="h-12 w-full rounded-2xl border border-white/10 bg-white/5 pr-11 pl-4 text-sm text-white outline-none shadow-[inset_4px_4px_10px_rgba(0,0,0,0.3),inset_-4px_-4px_10px_rgba(255,255,255,0.05)] transition-all placeholder:text-white/30 focus:border-white/30 focus:shadow-[0_0_0_3px_rgba(214,185,140,0.2)]"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label htmlFor="password" className="block text-sm font-medium text-white/80">
            رمز عبور
          </label>
          <div className="relative">
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-white/30">
              <LockKeyhole className="h-4 w-4" />
            </span>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              dir="ltr"
              value={form.password}
              onChange={(e) => setForm((prev) => ({ ...prev, password: e.target.value }))}
              placeholder="••••••••"
              className="h-12 w-full rounded-2xl border border-white/10 bg-white/5 pr-11 pl-12 text-sm text-white outline-none shadow-[inset_4px_4px_10px_rgba(0,0,0,0.3),inset_-4px_-4px_10px_rgba(255,255,255,0.05)] transition-all placeholder:text-white/30 focus:border-white/30 focus:shadow-[0_0_0_3px_rgba(214,185,140,0.2)]"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={showPassword ? "مخفی کردن رمز" : "نمایش رمز"}
              className="absolute inset-y-0 left-0 flex items-center pl-4 text-white/30 transition-colors hover:text-white"
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 shadow-[inset_4px_4px_10px_rgba(0,0,0,0.2)]">
          <label className="flex cursor-pointer items-center gap-2.5 text-xs text-white/60">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="h-4 w-4 rounded border-white/20 bg-transparent accent-[#d6b98c]"
            />
            <span>مرا به خاطر بسپار</span>
          </label>
          <button type="button" className="text-xs font-medium text-[#d6b98c] transition-colors hover:text-[#c08457]">
            فراموشی رمز؟
          </button>
        </div>

        <button
          type="submit"
          disabled={pending}
          className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-[#d6b98c] px-5 text-sm font-semibold text-[#1f1720] shadow-[6px_6px_16px_rgba(0,0,0,0.3),-4px_-4px_12px_rgba(255,255,255,0.05)] transition-all hover:bg-[#c08457] hover:text-white disabled:cursor-not-allowed disabled:opacity-70"
        >
          {pending ? (
            <>
              <LoaderCircle className="h-4 w-4 animate-spin" />
              <span>در حال ورود...</span>
            </>
          ) : (
            <span>ورود به حساب</span>
          )}
        </button>
      </form>

      <div
        className={`pointer-events-none fixed left-4 top-4 z-50 w-[calc(100%-2rem)] max-w-sm transition-all duration-300 sm:left-6 sm:top-6 ${toast.open ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
          }`}
      >
        <div
          className={`rounded-2xl border p-4 shadow-[0_18px_40px_rgba(0,0,0,0.2)] backdrop-blur-xl ${toast.tone === "success"
              ? "border-emerald-400/20 bg-[rgba(248,252,250,0.95)]"
              : "border-rose-400/20 bg-[rgba(255,247,247,0.95)]"
            }`}
        >
          <div className="flex items-start gap-3">
            <span
              className={`mt-0.5 flex h-8 w-8 items-center justify-center rounded-xl ${toast.tone === "success"
                  ? "bg-emerald-100 text-emerald-700"
                  : "bg-rose-100 text-rose-700"
                }`}
            >
              {toast.tone === "success" ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
            </span>
            <div className="flex-1">
              <div className="text-sm font-bold text-[#1f1720]">{toast.title}</div>
              <div className="mt-0.5 text-sm leading-6 text-[rgba(31,23,32,0.6)]">{toast.message}</div>
            </div>
            <button
              type="button"
              onClick={() => setToast((prev) => ({ ...prev, open: false }))}
              className="pointer-events-auto text-[rgba(31,23,32,0.3)] hover:text-[#1f1720]"
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