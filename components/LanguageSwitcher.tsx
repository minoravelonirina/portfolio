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
          <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
            <g strokeLinecap="round" strokeLinejoin="round">
              <line stroke="#fcfcfc" strokeWidth={1.92} strokeMiterlimit={10} fill="none" x1="0.5" y1="3.35" x2="12" y2="3.35"></line>
              <line stroke="#fcfcfc" strokeWidth={1.92} strokeMiterlimit={10} fill="none" x1="6.25" y1="0.48" x2="6.25" y2="3.35"></line>
              <path stroke="#fcfcfc" strokeWidth={1.92} strokeMiterlimit={10} fill="none" d="M9.12,3.35c0,3.52-3.28,8.2-7.66,10.55"></path>
              <path stroke="#fcfcfc" strokeWidth={1.92} strokeMiterlimit={10} fill="none" d="M4.51,7.37A16.4,16.4,0,0,0,11,13.9"></path>
              <polyline stroke="#fcfcfc" strokeWidth={1.92} strokeMiterlimit={10} fill="none" points="12.96 22.52 16.79 11.98 17.75 11.98 21.58 22.52"></polyline>
              <line stroke="#fcfcfc" strokeWidth={1.92} strokeMiterlimit={10} fill="none" x1="20.43" y1="18.69" x2="15.07" y2="18.69"></line>
              <line stroke="#fcfcfc" strokeWidth={1.92} strokeMiterlimit={10} fill="none" x1="11.04" y1="22.52" x2="14.88" y2="22.52"></line>
              <line stroke="#fcfcfc" strokeWidth={1.92} strokeMiterlimit={10} fill="none" x1="19.67" y1="22.52" x2="23.5" y2="22.52"></line>
            </g>
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
          className="appearance-none rounded-full border bg-transparent pl-9 pr-3 py-1 text-sm text-white/90 transition hover:bg-violet-400/10"
          style={{ accentColor: '#8b5cf6' }}
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
