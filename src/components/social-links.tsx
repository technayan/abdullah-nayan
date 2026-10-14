import {
  FaFacebook,
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

import { site } from "@/data/portfolio";

export function SocialLinks({ className = "" }: { className?: string }) {
  const items = [
    { href: site.socials.github, label: "GitHub", Icon: FaGithub },
    { href: site.socials.linkedin, label: "LinkedIn", Icon: FaLinkedinIn },
    { href: site.socials.twitter, label: "X (Twitter)", Icon: FaXTwitter },
    { href: site.socials.facebook, label: "Facebook", Icon: FaFacebook },
  ].filter((i) => i.href);

  return (
    <ul className={`flex items-center gap-2 ${className}`}>
      {items.map(({ href, label, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className="grid size-10 place-items-center rounded-md border bg-card text-muted-foreground transition-colors hover:border-primary hover:text-primary focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none"
          >
            <Icon className="size-4" />
          </a>
        </li>
      ))}
    </ul>
  );
}
