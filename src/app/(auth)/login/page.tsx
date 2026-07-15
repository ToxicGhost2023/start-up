import Link from "next/link";
import { LoginForm } from "@/features/auth/components/client/login-form";
import { AuthShell } from "@/features/auth/components/server/auth-shell";

export default function LoginPage() {
  return (
    <AuthShell
      badge="ورود به حساب"
      title="خوش برگشتی"
      description="برای ادامه، خیلی سریع وارد حساب خودت شو."
      backgroundImage="/assets/banner/login.jpg"
      footer={
        <>
          حساب کاربری نداری؟{" "}
          <Link
            href="/signup"
            className="font-semibold text-white transition-colors hover:text-white/80"
          >
            ساخت حساب
          </Link>
        </>
      }
    >
      <LoginForm />
    </AuthShell>
  );
}
