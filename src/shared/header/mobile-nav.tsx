"use client";

import Link from "next/link";
import { useState } from "react";

type NavItem = {
  label: string;
  href: string;
};

type MobileNavProps = {
  navItems: NavItem[];
};

export function MobileNav({ navItems }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-label="باز کردن منو"
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(111,78,55,0.14)] bg-white/70 text-(--color-foreground) shadow-[0_8px_22px_rgba(111,78,55,0.08)] transition-colors duration-200 hover:bg-white"
      >
        <span className="relative h-4 w-4">
          <span
            className={`absolute left-0 top-0.5 h-[1.5px] w-4 rounded-full bg-current transition-all duration-200 ${open ? "top-1.75 rotate-45" : ""
              }`}
          />
          <span
            className={`absolute left-0 top-1.75 h-[1.5px] w-4 rounded-full bg-current transition-all duration-200 ${open ? "opacity-0" : ""
              }`}
          />
          <span
            className={`absolute left-0 top-3 h-[1.5px] w-4 rounded-full bg-current transition-all duration-200 ${open ? "top-1.75 -rotate-45" : ""
              }`}
          />
        </span>
      </button>

      <div
        className={`absolute left-0 right-0 top-[calc(100%+12px)] origin-top rounded-3xl border border-[rgba(111,78,55,0.14)] bg-[rgba(248,244,237,0.96)] p-3 shadow-[0_18px_40px_rgba(111,78,55,0.12)] backdrop-blur-md transition-all duration-200 ${open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0"
          }`}
      >
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 text-sm font-medium text-[rgba(31,23,32,0.78)] transition-colors duration-200 hover:bg-white/80 hover:text-(--color-foreground)"
            >
              {item.label}
            </Link>
          ))}

          <div className="my-2 h-px bg-[rgba(111,78,55,0.12)]" />

          <Link
            href="/signin"
            onClick={() => setOpen(false)}
            className="rounded-2xl px-4 py-3 text-sm font-medium text-[rgba(31,23,32,0.78)] transition-colors duration-200 hover:bg-white/80 hover:text-(--color-foreground)"
          >
            ورود / ثبت‌نام
          </Link>
        </nav>
      </div>
    </div>
  );
}