import { ArrowLeft, Award, Coffee, Heart, Leaf, Sparkles, Star } from "lucide-react";

import Link from "next/link";

const values = [
    {
        icon: Leaf,
        title: "تعهد به کیفیت",
        description: "از انتخاب دانه تا بسته‌بندی نهایی، هر مرحله با دقت و عشق انجام می‌شود.",
    },
    {
        icon: Heart,
        title: "عاشق قهوه‌ایم",
        description: "ما نه فقط یک فروشگاه، که جامعه‌ای از عاشقان قهوه هستیم.",
    },
    {
        icon: Sparkles,
        title: "طراحی برای زندگی",
        description: "محصولات ما برای لحظات روزمره و تجربه‌های خاص طراحی شده‌اند.",
    },
    {
        icon: Award,
        title: "تضمین تازگی",
        description: "هر کیسه قهوه با تاریخ بو دادن و تضمین تازگی ارسال می‌شود.",
    },
];

const timeline = [
    {
        year: "۱۳۹۸",
        title: "آغاز سفر",
        description: "با یک بوخانه کوچک در تهران شروع کردیم، فقط برای دوستان و خانواده.",
    },
    {
        year: "۱۴۰۰",
        title: "اولین فروشگاه آنلاین",
        description: "وب‌سایت ما راه‌اندازی شد و قهوه‌هایمان را به سراسر کشور فرستادیم.",
    },
    {
        year: "۱۴۰۲",
        title: "افتتاح بوخانه تخصصی",
        description: "بوخانه‌ای با تجهیزات مدرن برای بو دادن دقیق‌تر و کنترل‌شده‌تر.",
    },
    {
        year: "۱۴۰۴",
        title: "حالا و آینده",
        description: "ما به رشد خود ادامه می‌دهیم، با همان عشق و تعهد روز اول.",
    },
];

const team = [
    {
        name: "سارا محمدی",
        role: "بنیان‌گذار و مدیر ارشد",
        image: "/assets/team/sara.jpg",
        bio: "عاشق قهوه و طراحی تجربه کاربری",
    },
    {
        name: "امیر رضایی",
        role: "رئیس بو دادن",
        image: "/assets/team/amir.jpg",
        bio: "۱۰ سال تجربه در بو دادن تخصصی",
    },
    {
        name: "نازنین کریمی",
        role: "مدیر محصول و برند",
        image: "/assets/team/nazanin.jpg",
        bio: "طراح و مدیر برند با دیدگاه مدرن",
    },
];

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            {/* هدر صفحه با طراحی چشم‌نواز */}
            <section className="relative overflow-hidden pt-20 pb-24 md:pt-32 md:pb-40">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(214,185,140,0.25),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(111,78,55,0.08),transparent_40%)]" />
                <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-(--color-secondary) opacity-10 blur-3xl" />
                <div className="absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-(--color-primary) opacity-10 blur-3xl" />

                <div className="container-shell">
                    <div className="relative z-10 mx-auto max-w-4xl text-center">
                        <div className="inline-flex items-center rounded-full border border-white/50 bg-white/60 px-4 py-2 text-sm font-medium text-(--color-primary) backdrop-blur-xl">
                            <Coffee className="ml-2 h-4 w-4" />
                            داستان ما
                        </div>

                        <h1 className="mt-8 text-5xl font-semibold tracking-[-0.04em] text-(--color-foreground) md:text-7xl lg:text-8xl">
                            عشق به قهوه،
                            <br />
                            <span className="text-(--color-primary)">طراحی برای شما</span>
                        </h1>

                        <p className="mt-8 mx-auto max-w-2xl text-base leading-8 text-[rgba(31,23,32,0.72)] md:text-lg">
                            ما در We Shop، قهوه را نه فقط یک نوشیدنی، که یک مراسم می‌بینیم.
                            از انتخاب دانه تا لحظه‌ای که فنجان را می‌نوشید، همه چیز با دقت و عشق طراحی شده است.
                        </p>

                        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/shop"
                                className="inline-flex h-14 items-center justify-center rounded-2xl bg-(--color-primary) px-8 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(111,78,55,0.25)] transition-all duration-300 hover:scale-[1.02] hover:bg-(--color-foreground)"
                            >
                                <span>مشاهده محصولات</span>
                                <ArrowLeft className="mr-2 h-4 w-4" />
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex h-14 items-center justify-center rounded-2xl border border-white/60 bg-white/50 px-8 text-sm font-semibold text-(--color-foreground) transition-all duration-300 hover:scale-[1.02] hover:bg-white/80"
                            >
                                تماس با ما
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* بخش آمار و ارقام */}
            <section className="relative py-16 md:py-24">
                <div className="container-shell">
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                        <div className="glass-card rounded-3xl border border-white/40 p-6 text-center">
                            <div className="text-4xl font-bold text-(--color-primary) md:text-5xl">۴.۹</div>
                            <div className="mt-2 text-sm text-[rgba(31,23,32,0.68)]">امتیاز مشتریان</div>
                            <div className="mt-2 flex justify-center text-amber-500">
                                <Star className="h-4 w-4 fill-current" />
                                <Star className="h-4 w-4 fill-current" />
                                <Star className="h-4 w-4 fill-current" />
                                <Star className="h-4 w-4 fill-current" />
                                <Star className="h-4 w-4 fill-current" />
                            </div>
                        </div>
                        <div className="glass-card rounded-3xl border border-white/40 p-6 text-center">
                            <div className="text-4xl font-bold text-(--color-primary) md:text-5xl">۱۲k+</div>
                            <div className="mt-2 text-sm text-[rgba(31,23,32,0.68)]">سفارش ماهانه</div>
                        </div>
                        <div className="glass-card rounded-3xl border border-white/40 p-6 text-center">
                            <div className="text-4xl font-bold text-(--color-primary) md:text-5xl">۴۸h</div>
                            <div className="mt-2 text-sm text-[rgba(31,23,32,0.68)]">تضمین تازگی</div>
                        </div>
                        <div className="glass-card rounded-3xl border border-white/40 p-6 text-center">
                            <div className="text-4xl font-bold text-(--color-primary) md:text-5xl">۱۰۰٪</div>
                            <div className="mt-2 text-sm text-[rgba(31,23,32,0.68)]">رضایت تضمینی</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* بخش ارزش‌های ما */}
            <section className="relative py-20 md:py-28">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(214,185,140,0.12),transparent_60%)]" />

                <div className="container-shell">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-semibold tracking-[-0.04em] text-(--color-foreground) md:text-5xl">
                            ارزش‌های ما
                        </h2>
                        <p className="mt-4 text-base text-[rgba(31,23,32,0.72)] md:text-lg">
                            چهار اصل که هر روز ما را هدایت می‌کنند
                        </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <div
                                    key={value.title}
                                    className="group glass-card relative overflow-hidden rounded-3xl border border-white/40 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(111,78,55,0.12)]"
                                >
                                    <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-(--color-secondary) opacity-5 blur-2xl transition-all duration-500 group-hover:scale-150" />
                                    <div className="relative">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-(--color-primary) text-white shadow-[0_8px_24px_rgba(111,78,55,0.2)]">
                                            <Icon className="h-7 w-7" />
                                        </div>
                                        <h3 className="mt-6 text-xl font-semibold text-(--color-foreground)">
                                            {value.title}
                                        </h3>
                                        <p className="mt-3 text-sm leading-6 text-[rgba(31,23,32,0.68)]">
                                            {value.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* بخش تایم‌لاین */}
            <section className="relative py-20 md:py-28">
                <div className="container-shell">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-semibold tracking-[-0.04em] text-(--color-foreground) md:text-5xl">
                            مسیر ما
                        </h2>
                        <p className="mt-4 text-base text-[rgba(31,23,32,0.72)] md:text-lg">
                            از یک بوخانه کوچک تا جامعه‌ای از عاشقان قهوه
                        </p>
                    </div>

                    <div className="relative mx-auto max-w-3xl">
                        {/* خط عمودی تایم‌لاین */}
                        <div className="absolute right-7 top-0 bottom-0 w-0.5 bg-[linear-gradient(180deg,rgba(111,78,55,0.2),rgba(214,185,140,0.4),rgba(111,78,55,0.2))] md:right-1/2 md:-ml-px" />

                        <div className="space-y-12">
                            {timeline.map((item, index) => (
                                <div
                                    key={item.year}
                                    className={`relative flex flex-col gap-3 md:flex-row md:items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                        }`}
                                >
                                    {/* نقطه */}
                                    <div className="absolute right-5 top-0 z-10 flex h-5 w-5 items-center justify-center rounded-full bg-(--color-primary) shadow-[0_0_0_4px_rgba(111,78,55,0.12)] md:right-1/2 md:-translate-x-1/2" />

                                    {/* محتوای سمت راست */}
                                    <div className="md:w-1/2 md:pr-12 md:text-right">
                                        <div className="glass-card rounded-3xl border border-white/40 p-6">
                                            <div className="text-sm font-semibold text-(--color-primary)">
                                                {item.year}
                                            </div>
                                            <h4 className="mt-2 text-xl font-semibold text-(--color-foreground)">
                                                {item.title}
                                            </h4>
                                            <p className="mt-2 text-sm text-[rgba(31,23,32,0.68)]">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* محتوای سمت چپ (خالی برای تعادل) */}
                                    <div className="hidden md:block md:w-1/2" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* بخش تیم */}
            <section className="relative py-20 md:py-28">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_20%,rgba(214,185,140,0.1),transparent_50%)]" />

                <div className="container-shell">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-semibold tracking-[-0.04em] text-(--color-foreground) md:text-5xl">
                            تیم ما
                        </h2>
                        <p className="mt-4 text-base text-[rgba(31,23,32,0.72)] md:text-lg">
                            افرادی که عشق به قهوه را به تجربه شما تبدیل می‌کنند
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        {team.map((member) => (
                            <div
                                key={member.name}
                                className="group glass-card relative overflow-hidden rounded-3xl border border-white/40 p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(111,78,55,0.12)]"
                            >
                                <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full border-4 border-white/60 bg-linear-to-br from-[rgba(214,185,140,0.3)] to-[rgba(111,78,55,0.2)]">
                                    <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-(--color-primary)">
                                        {member.name.charAt(0)}
                                    </div>
                                </div>
                                <h3 className="mt-6 text-xl font-semibold text-(--color-foreground)">
                                    {member.name}
                                </h3>
                                <p className="text-sm text-(--color-primary)">{member.role}</p>
                                <p className="mt-3 text-sm text-[rgba(31,23,32,0.68)]">
                                    {member.bio}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA نهایی */}
            <section className="relative overflow-hidden py-20 md:py-28">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(111,78,55,0.06),transparent_50%)]" />
                <div className="absolute left-1/2 top-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-(--color-secondary) opacity-5 blur-3xl" />

                <div className="container-shell">
                    <div className="glass-card relative overflow-hidden rounded-4xl border border-white/50 bg-white/40 px-6 py-16 text-center shadow-[0_32px_80px_rgba(111,78,55,0.08)] backdrop-blur-2xl md:px-12 md:py-20">
                        <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-[rgba(214,185,140,0.12)] via-transparent to-[rgba(111,78,55,0.08)]" />

                        <div className="relative mx-auto max-w-2xl">
                            <div className="inline-flex items-center rounded-full border border-white/60 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-(--color-primary) backdrop-blur-xl">
                                <Sparkles className="ml-2 h-3.5 w-3.5" />
                                به جمع ما بپیوندید
                            </div>

                            <h2 className="mt-8 text-3xl font-semibold tracking-[-0.04em] text-(--color-foreground) md:text-5xl lg:text-6xl">
                                بیایید با هم
                                <br />
                                قهوه را جشن بگیریم
                            </h2>

                            <p className="mt-6 text-base leading-8 text-[rgba(31,23,32,0.72)] md:text-lg">
                                چه یک عاشق قهوه باشید، چه یک خریدار حرفه‌ای، ما اینجا هستیم تا
                                بهترین تجربه را برای شما خلق کنیم.
                            </p>

                            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                                <Link
                                    href="/shop"
                                    className="group flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-(--color-primary) px-8 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(111,78,55,0.25)] transition-all duration-300 hover:scale-[1.02] hover:bg-(--color-foreground) sm:w-auto"
                                >
                                    <span>مشاهده فروشگاه</span>
                                    <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                                </Link>

                                <Link
                                    href="/contact"
                                    className="flex h-14 w-full items-center justify-center gap-2 rounded-2xl border border-white/60 bg-white/50 px-8 text-sm font-semibold text-(--color-foreground) transition-all duration-300 hover:scale-[1.02] hover:border-white/90 hover:bg-white/80 sm:w-auto"
                                >
                                    ارتباط با ما
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}