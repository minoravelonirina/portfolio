"use client"

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type Props = { locales?: string[] };

export default function LanguageSwitcher({ locales = ["fr", "en"] }: Props) {
  const pathname = usePathname() || "/";
  const [value, setValue] = useState<string>(() => {
    const parts = pathname.split("/").filter(Boolean);
    const current = parts[0];
    return locales.includes(current) ? current : locales[0];
  });

  useEffect(() => {
    setValue((prev) => {
      const parts = pathname.split("/").filter(Boolean);
      const current = parts[0];
      return locales.includes(current) ? current : prev;
    });
  }, [pathname, locales]);

  function buildHref(target: string) {
    const parts = pathname.split("/").filter(Boolean);
    const known = locales;
    if (parts.length && known.includes(parts[0])) {
      parts[0] = target;
    } else {
      parts.unshift(target);
    }
    return "/" + parts.join("/");
  }

  return (
    <div className="flex items-center">
      <label htmlFor="locale-select" className="sr-only">
        Change language
      </label>
      <div className="relative inline-flex items-center">
        <span className="pointer-events-none absolute left-2 text-white/80">
          {/* translate icon */}
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m6 0v14m0 0h6M21 17l-3 3m0 0l-3-3m3 3V10" />
          </svg>
        </span>

        <select
          id="locale-select"
          value={value}
          onChange={(e) => {
            const target = e.target.value;
            const href = buildHref(target);
            // navigate
            window.location.href = href;
          }}
          className="appearance-none rounded-full border bg-transparent pl-9 pr-3 py-1 text-sm text-white/90 transition hover:bg-white/5"
          aria-label="Select language"
        >
          {locales.map((loc) => (
            <option key={loc} value={loc} className="bg-black text-white">
              {loc.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
