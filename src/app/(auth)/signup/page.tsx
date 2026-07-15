import Link from "next/link";
import { SignupForm } from "@/features/auth/components/client/signup-form";
import { AuthShell } from "@/features/auth/components/server/auth-shell";

export default function SignupPage() {
  return (
    <AuthShell
      badge="ساخت حساب کاربری"
      title="شروع سریع و تمیز"
      description="یک فرم سبک، استاندارد و کاملاً هماهنگ با هویت بصری پروژه."
      backgroundImage="/assets/banner/signin.jpg"
      footer={
        <>
          قبلاً حساب داری؟{" "}
          <Link
            href="/login"
            className="font-semibold  transition-colors hover:text-(--color-accent)"
          >
            ورود به حساب
          </Link>
        </>
      }
    >
      <SignupForm />
    </AuthShell>
  );
}
