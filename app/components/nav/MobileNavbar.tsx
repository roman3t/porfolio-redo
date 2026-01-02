"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Text } from "../ui/Text";

type NavItem = { label: string; number: string; href: string };

export function MobileNavbar() {
  const [open, setOpen] = useState(false);

  const navItems: NavItem[] = useMemo(
    () => [
      { label: "Brand Strategy", number: "01", href: "#brand-strategy" },
      { label: "Personality", number: "02", href: "#personality" },
      { label: "Logo", number: "03", href: "#logo" },
      { label: "Color", number: "04", href: "#color" },
      { label: "Typography", number: "05", href: "#typography" },
      { label: "Art Direction", number: "06", href: "#art-direction" },
    ],
    []
  );

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="relative z-50 tablet:hidden">
      <div className="fixed w-full bg-white px-4">
        <div className="flex h-12 items-center justify-between px-4">
          <div className="text-[18px] font-medium">↩︎Redo</div>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label="Open menu"
          >
            <Text variant={"link"}>{open ? "Close" : "Menu"}</Text>
          </button>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 mt-12"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/20"
            aria-label="Close menu overlay"
            onClick={() => setOpen(false)}
          />

          <div className="absolute left-1/2 w-full -translate-x-1/2 bg-white">
            <div className="px-4">
              <div className="h-px w-full bg-divider-1/10 bg-black/10" />
            </div>

            <div className="px-4 pb-5 pt-4.5">
              <nav>
                <ul className="flex flex-col gap-6">
                  {navItems.map((item) => (
                    <li key={item.number}>
                      <Link
                        href={item.href}
                        className="flex items-baseline gap-1"
                        onClick={() => setOpen(false)}
                      >
                        <Text as="span" variant="link" className="">
                          {item.label}
                        </Text>

                        <Text
                          as="span"
                          variant="display"
                          className="-translate-y-[2.5px] -translate-x-1 text-[#B1B1B1]"
                        >
                          {item.number}
                        </Text>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="mt-5 h-px w-full bg-divider-1/10 bg-black/10" />

              <div className="mt-4.5 flex flex-col gap-4.5">
                <Link
                  href="#download"
                  className="text-[14px] text-text-2"
                  onClick={() => setOpen(false)}
                >
                  <Text
                    as="span"
                    variant="link"
                    className="text-text-1 text-[#575757]"
                  >
                    Download
                  </Text>
                </Link>
                <Link
                  href="#contact"
                  className="text-[14px] text-text-2"
                  onClick={() => setOpen(false)}
                >
                  <Text
                    as="span"
                    variant="link"
                    className="text-text-1 text-[#575757]"
                  >
                    Contact Us
                  </Text>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
