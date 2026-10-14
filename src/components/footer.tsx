import { ArrowUp } from "lucide-react";

import { SocialLinks } from "@/components/social-links";
import { site } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-lg font-semibold">{site.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">
            © {new Date().getFullYear()} {site.name}. Built with Next.js and
            shadcn/ui.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <SocialLinks />
          <a
            href="#top"
            aria-label="Back to top"
            className="grid size-10 place-items-center rounded-md bg-secondary text-secondary-foreground transition-colors hover:bg-accent focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none"
          >
            <ArrowUp className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
