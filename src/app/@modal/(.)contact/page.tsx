"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Mail, Phone, MapPin, X } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function ContactModal() {
    const router = useRouter();

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/55 p-3 backdrop-blur-md sm:p-6"
            onClick={() => router.back()}
        >
            <div
                className="relative w-full max-w-4xl"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={() => router.back()}
                    aria-label="بستن"
                    className="absolute left-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white/85 backdrop-blur-xl transition hover:bg-white/16 sm:left-4 sm:top-4"
                >
                    <X className="h-4 w-4" />
                </button>

                <ContactCard />
            </div>
        </div>
    );
}

function ContactCard() {
    return (
        <section className="group relative overflow-hidden rounded-[32px] border border-white/12 bg-[linear-gradient(135deg,rgba(255,255,255,0.16),rgba(255,255,255,0.06))] text-(--color-foreground) shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.22),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(212,165,116,0.18),transparent_30%)]" />
            <div className="absolute inset-[1px] rounded-[31px] bg-[linear-gradient(145deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))]" />
            <div className="absolute right-[-64px] top-[-64px] h-40 w-40 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute bottom-[-72px] left-[-72px] h-44 w-44 rounded-full bg-(--color-primary)/18 blur-3xl" />

            <div className="relative grid min-h-[280px] grid-cols-1 md:grid-cols-[1.1fr_1.4fr]">
                <div className="flex flex-col justify-between border-b border-white/10 p-5 sm:p-7 md:border-b-0 md:border-l">
                    <div className="space-y-6">
                        <div className="flex items-start justify-between gap-4">
                            <div className="space-y-3">
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/12 bg-white/10 shadow-[inset_1px_1px_0_rgba(255,255,255,0.18),0_10px_30px_rgba(0,0,0,0.12)] backdrop-blur-xl">
                                    <Image
                                        src="/logo.png"
                                        alt="We Shop"
                                        width={32}
                                        height={32}
                                        className="h-8 w-8 object-contain"
                                    />
                                </div>

                                <div>
                                    <p className="text-xs tracking-[0.24em] text-white/50">
                                        CONTACT CARD
                                    </p>
                                    <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                                        We Shop
                                    </h2>
                                    <p className="mt-1 text-sm text-white/62">
                                        ارتباط سریع، حرفه‌ای و همیشه در دسترس
                                    </p>
                                </div>
                            </div>

                            <div className="h-11 w-16 rounded-2xl border border-white/12 bg-[linear-gradient(135deg,rgba(255,255,255,0.18),rgba(212,165,116,0.28))] shadow-[inset_1px_1px_0_rgba(255,255,255,0.15)]" />
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(74,222,128,0.8)]" />
                            <span className="text-sm text-white/65">پاسخگویی فعال در ساعات کاری</span>
                        </div>
                    </div>

                    <div className="mt-8 flex items-end justify-between gap-4">
                        <div>
                            <p className="text-[11px] tracking-[0.22em] text-white/38">
                                MEMBER SINCE
                            </p>
                            <p className="mt-1 text-sm font-medium text-white/82">2022</p>
                        </div>

                        <div className="flex gap-2">
                            <SocialButton icon={<FaInstagram className="h-4 w-4" />} />
                            <SocialButton icon={<FaSquareXTwitter className="h-4 w-4" />} />
                        </div>
                    </div>
                </div>

                <div className="p-5 sm:p-7">
                    <div className="grid gap-3">
                        <ContactRow
                            icon={<Phone className="h-4 w-4" />}
                            label="تلفن تماس"
                            title="۰۲۱-۴۴۳۳۲۲۱۱"
                            meta="شنبه تا چهارشنبه، ۹ تا ۱۸"
                        />
                        <ContactRow
                            icon={<Mail className="h-4 w-4" />}
                            label="پست الکترونیک"
                            title="hello@weshop.com"
                            meta="پاسخگویی حداکثر تا ۲۴ ساعت"
                        />
                        <ContactRow
                            icon={<MapPin className="h-4 w-4" />}
                            label="آدرس"
                            title="تهران، خیابان ولی‌عصر"
                            meta="برای هماهنگی حضوری، از قبل تماس بگیرید"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function ContactRow({
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
        <div className="rounded-[24px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.11),rgba(255,255,255,0.05))] p-3 shadow-[inset_1px_1px_0_rgba(255,255,255,0.16),inset_-1px_-1px_0_rgba(255,255,255,0.03),0_10px_30px_rgba(15,10,20,0.12)] backdrop-blur-xl transition duration-200 hover:bg-[linear-gradient(135deg,rgba(255,255,255,0.13),rgba(255,255,255,0.06))] sm:p-4">
            <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-(--color-primary) shadow-[inset_1px_1px_0_rgba(255,255,255,0.14),0_8px_24px_rgba(0,0,0,0.12)] backdrop-blur-xl">
                    {icon}
                </div>

                <div className="min-w-0">
                    <p className="text-[11px] tracking-[0.16em] text-white/42">{label}</p>
                    <p className="mt-1 truncate text-sm font-semibold text-white sm:text-base">
                        {title}
                    </p>
                    <p className="mt-1 text-xs text-white/52 sm:text-sm">{meta}</p>
                </div>
            </div>
        </div>
    );
}

function SocialButton({ icon }: { icon: ReactNode }) {
    return (
        <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white/78 shadow-[inset_1px_1px_0_rgba(255,255,255,0.16),0_8px_20px_rgba(0,0,0,0.12)] backdrop-blur-xl transition hover:bg-white/14 hover:text-white"
        >
            {icon}
        </button>
    );
}
