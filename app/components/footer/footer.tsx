import Link from "next/link";

type FooterLink = { label: string; href: string };

const primaryLinks: FooterLink[] = [
  { label: "Download Kit", href: "#download-kit" },
  { label: "Contact Us", href: "#contact" },
  { label: "Back to the top", href: "#top" },
];

const legalLinks: FooterLink[] = [
  { label: "Legal", href: "#legal" },
  { label: "Privacy", href: "#privacy" },
];

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white lg:ml-62.5">
      <div className="mx-auto w-full max-w-[1120px] px-5 py-10 md:py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="shrink-0">
            <img
              src="/img/logo-primary.png"
              alt="Redo"
              className="h-[58px] w-auto md:h-[44px] lg:h-[52px]"
            />
          </div>

          {/* Links */}
          <nav aria-label="Footer">
            <ul className="flex flex-col gap-6 text-[14px] font-medium text-black md:flex-row md:items-center md:gap-10">
              {primaryLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="hover:opacity-70">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 border-t border-black/10" />

        <div className="mt-6 flex items-center justify-between gap-6 text-[12px] font-medium text-black">
          <div className="flex items-center gap-6">
            <span>© Redo</span>

            <ul className="flex items-center gap-6">
              {legalLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="hover:opacity-70">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="whitespace-nowrap">All Rights Reserved</div>
        </div>
      </div>
    </footer>
  );
}
