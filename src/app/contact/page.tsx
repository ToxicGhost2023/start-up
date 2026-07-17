import type { ReactNode } from "react";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-(--color-background) pt-24 pb-10">
            <div className="container-shell">
                <div className="mb-8 max-w-2xl">
                    <h1 className="text-3xl font-bold text-(--color-foreground) sm:text-4xl">
                        تماس با ما
                    </h1>
                    <p className="mt-3 text-sm leading-7 text-foreground/65 sm:text-base">
                        اگر سوالی درباره سفارش، همکاری یا پشتیبانی دارید، از این مسیرها با ما
                        در ارتباط باشید.
                    </p>
                </div>

                <section className="group relative overflow-hidden rounded-4xl border border-(--color-border) bg-[linear-gradient(135deg,rgba(255,255,255,0.72),rgba(255,255,255,0.5))] text-(--color-foreground) shadow-[0_24px_80px_rgba(31,23,32,0.10)] backdrop-blur-2xl">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.7),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(214,185,140,0.22),transparent_30%)]" />
                    <div className="absolute inset-px rounded-[31px] bg-[linear-gradient(145deg,rgba(255,255,255,0.38),rgba(255,255,255,0.16))]" />

                    <div className="relative grid min-h-70 grid-cols-1 md:grid-cols-[1.1fr_1.4fr]">
                        <div className="flex flex-col justify-between border-b border-(--color-border) p-5 sm:p-7 md:border-b-0 md:border-l">
                            <div className="space-y-6">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="space-y-3">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-(--color-border) bg-white/50 shadow-[inset_1px_1px_0_rgba(255,255,255,0.6),0_10px_24px_rgba(31,23,32,0.08)] backdrop-blur-xl">
                                            <Image
                                                src="/logo.png"
                                                alt="We Shop"
                                                width={32}
                                                height={32}
                                                className="h-8 w-8 object-contain"
                                            />
                                        </div>

                                        <div>
                                            <p className="text-xs tracking-[0.24em] text-foreground/45">
                                                CONTACT CARD
                                            </p>
                                            <h2 className="mt-2 text-2xl font-bold text-(--color-foreground) sm:text-3xl">
                                                We Shop
                                            </h2>
                                            <p className="mt-1 text-sm text-foreground/62">
                                                ارتباط سریع، حرفه‌ای و همیشه در دسترس
                                            </p>
                                        </div>
                                    </div>

                                    <div className="h-11 w-16 rounded-2xl border border-(--color-border) bg-[linear-gradient(135deg,rgba(214,185,140,0.45),rgba(111,78,55,0.22))] shadow-[inset_1px_1px_0_rgba(255,255,255,0.35)]" />
                                </div>

                                <div className="flex items-center gap-2">
                                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_14px_rgba(16,185,129,0.45)]" />
                                    <span className="text-sm text-foreground/65">
                                        پاسخگویی فعال در ساعات کاری
                                    </span>
                                </div>
                            </div>

                            <div className="mt-8 flex items-end justify-between gap-4">
                                <div>
                                    <p className="text-[11px] tracking-[0.22em] text-foreground/38">
                                        MEMBER SINCE
                                    </p>
                                    <p className="mt-1 text-sm font-medium text-foreground/85">
                                        2022
                                    </p>
                                </div>

                                <div className="flex gap-2">
                                    <SocialButton icon={<FaInstagram className="h-4 w-4" />} />
                                    <SocialButton icon={<FaSquareXTwitter className="h-4 w-4" />} />
                                </div>
                            </div>
                        </div>

                        <div className="p-5 sm:p-7">
                            <div className="grid gap-3">
                                <InfoRow
                                    icon={<Phone className="h-4 w-4" />}
                                    label="تلفن تماس"
                                    title="۰۲۱-۴۴۳۳۲۲۱۱"
                                    meta="شنبه تا چهارشنبه، ۹ تا ۱۸"
                                />
                                <InfoRow
                                    icon={<Mail className="h-4 w-4" />}
                                    label="پست الکترونیک"
                                    title="hello@weshop.com"
                                    meta="پاسخگویی حداکثر تا ۲۴ ساعت"
                                />
                                <InfoRow
                                    icon={<MapPin className="h-4 w-4" />}
                                    label="آدرس"
                                    title="تهران، خیابان ولی‌عصر"
                                    meta="برای هماهنگی حضوری، از قبل تماس بگیرید"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}

function InfoRow({
    icon,
    label,
    title,
    meta,
}: {
    icon: ReactNode;
    label: string;
    title: string;
    meta: string;
}) {
    return (
        <div className="rounded-3xl border border-(--color-border) bg-white/42 p-3 shadow-[inset_1px_1px_0_rgba(255,255,255,0.45),0_10px_30px_rgba(31,23,32,0.06)] backdrop-blur-xl transition duration-200 hover:bg-white/50 sm:p-4">
            <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-(--color-border) bg-white/55 text-(--color-primary) shadow-[inset_1px_1px_0_rgba(255,255,255,0.55),0_8px_20px_rgba(31,23,32,0.06)]">
                    {icon}
                </div>

                <div className="min-w-0">
                    <p className="text-[11px] tracking-[0.16em] text-foreground/42">
                        {label}
                    </p>
                    <p className="mt-1 truncate text-sm font-semibold text-(--color-foreground) sm:text-base">
                        {title}
                    </p>
                    <p className="mt-1 text-xs text-foreground/55 sm:text-sm">
                        {meta}
                    </p>
                </div>
            </div>
        </div>
    );
}

function SocialButton({ icon }: { icon: ReactNode }) {
    return (
        <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-(--color-border) bg-white/50 text-foreground/80 shadow-[inset_1px_1px_0_rgba(255,255,255,0.55),0_8px_20px_rgba(31,23,32,0.06)] transition hover:bg-white/65 hover:text-(--color-foreground)"
        >
            {icon}
        </button>
    );
}
