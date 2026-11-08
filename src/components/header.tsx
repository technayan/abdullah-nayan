"use client";

import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

import { NavLink } from "@/components/nav-link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { navLinks, site } from "@/data/portfolio";

/** Tracks which home-page section is currently in view. */
function useActiveSection() {
  const pathname = usePathname();
  const [active, setActive] = React.useState("");

  React.useEffect(() => {
    if (pathname !== "/") return;
    const ids = ["top", ...navLinks.map((l) => l.href.replace("/#", ""))];
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting)
            setActive(e.target.id === "top" ? "" : e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return pathname === "/" ? active : "";
}

export function Header() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const active = useActiveSection();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-colors duration-300 ${
        scrolled || open
          ? "border-border bg-background/80 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold"
          onClick={() => setOpen(false)}
        >
          <span className="font-display text-2xl">
            {site.shortName.split(" ")[0]}
          </span>
          <span className="font-display text-2xl text-primary">
            {site.shortName.split(" ")[1]}
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href.replace("/#", "");
            return (
              <NavLink
                key={link.href}
                href={link.href}
                className={`relative isolate rounded-md px-3 py-2 text-sm transition-colors ${
                  isActive
                    ? "text-accent-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-md bg-accent"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {link.label}
              </NavLink>
            );
          })}
          <ThemeToggle />
          <Button asChild size="sm" className="ml-2">
            <a href={site.resumeUrl} target="_blank" rel="noreferrer">
              Resume
            </a>
          </Button>
        </nav>

        <div className="flex items-center gap-1 lg:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            aria-label="Mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t lg:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-3 text-base font-medium hover:bg-accent"
                >
                  {link.label}
                </NavLink>
              ))}
              <Button asChild className="mt-2">
                <a href={site.resumeUrl} target="_blank" rel="noreferrer">
                  Download resume
                </a>
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
