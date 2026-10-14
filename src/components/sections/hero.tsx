"use client";

import { ArrowDown, Download } from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import Image from "next/image";

import { Reveal } from "@/components/reveal";
import { SocialLinks } from "@/components/social-links";
import { Typewriter } from "@/components/typewriter";
import { Button } from "@/components/ui/button";
import { hero, site } from "@/data/portfolio";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const parallax = useTransform(scrollY, [0, 700], [0, reduce ? 0 : 70]);
  const words = site.name.split(" ");

  return (
    <section id="top" className="relative overflow-hidden">
      {/* Soft background glow + dots */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="bg-dots absolute inset-0" />
        <div className="drift absolute -right-24 -top-20 size-104 rounded-full bg-primary/15 blur-3xl" />
        <div className="drift absolute -bottom-32 -left-24 size-88 rounded-full bg-accent-2/15 blur-3xl [animation-delay:-6s]" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-5 pb-20 pt-12 sm:px-8 sm:pb-28 sm:pt-20 lg:grid-cols-[1.2fr_1fr] lg:gap-10">
        <div>
          <Reveal>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border bg-card/80 px-3 py-1.5 text-sm text-muted-foreground backdrop-blur">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent-2 opacity-60 motion-reduce:animate-none" />
                <span className="relative inline-flex size-2 rounded-full bg-accent-2" />
              </span>
              {site.availability}
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <p className="mb-2 text-lg text-muted-foreground sm:text-xl">
              {hero.greeting}
            </p>
          </Reveal>

          <h1 className="text-balance text-5xl font-semibold leading-[1.02] sm:text-7xl">
            <span className="sr-only">{site.name}</span>
            <span aria-hidden>
              {words.map((w, i) => (
                <span
                  key={i}
                  className="mr-[0.22em] inline-block overflow-hidden pb-[0.12em] align-bottom"
                >
                  <motion.span
                    className="inline-block"
                    initial={reduce ? false : { y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 0.85,
                      delay: 0.1 + i * 0.09,
                      ease: EASE,
                    }}
                  >
                    {w}
                  </motion.span>
                </span>
              ))}
            </span>
          </h1>

          <Reveal delay={0.45}>
            <p className="mt-5 flex min-h-[3.2rem] flex-wrap items-baseline gap-x-2 font-display text-xl font-medium sm:min-h-[2.4rem] sm:text-3xl">
              <span className="text-muted-foreground">I&apos;m a</span>
              <Typewriter words={hero.roles} className="text-primary" />
            </p>
          </Reveal>

          <Reveal delay={0.55}>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              {hero.intro}
            </p>
          </Reveal>

          <Reveal
            delay={0.65}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Button asChild size="lg">
              <a href="#projects">
                View my work <ArrowDown />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={site.resumeUrl} target="_blank" rel="noreferrer">
                <Download /> Resume
              </a>
            </Button>
            <SocialLinks className="sm:ml-2" />
          </Reveal>
        </div>

        {/* Photo */}
        <motion.div
          style={{ y: parallax }}
          className="relative mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-md"
        >
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.94, y: 36 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25, ease: EASE }}
            className="relative"
          >
            <div
              className="absolute -inset-3 rounded-t-[999px] rounded-b-3xl border border-primary/30"
              aria-hidden
            />
            <div className="relative aspect-4/5 overflow-hidden rounded-t-[999px] rounded-b-3xl border bg-accent shadow-2xl shadow-primary/15">
              <Image
                src={hero.image}
                alt={hero.imageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 448px, 90vw"
                className="object-cover"
              />
            </div>

            {hero.chips.map(({ label, icon: Icon }, i) => (
              <motion.div
                key={label}
                aria-hidden
                className={`absolute flex items-center gap-2 rounded-full border bg-card/90 px-3.5 py-2 text-sm font-medium shadow-lg shadow-primary/10 backdrop-blur ${
                  [
                    "left-0 top-10 sm:-left-8",
                    "right-0 top-1/2 sm:-right-8",
                    "bottom-10 left-2 sm:-left-4",
                  ][i % 3]
                }`}
                initial={reduce ? false : { opacity: 0, scale: 0.8 }}
                animate={
                  reduce
                    ? { opacity: 1 }
                    : { opacity: 1, scale: 1, y: [0, -9, 0] }
                }
                transition={{
                  opacity: { duration: 0.5, delay: 0.9 + i * 0.15 },
                  scale: { duration: 0.5, delay: 0.9 + i * 0.15, ease: EASE },
                  y: {
                    duration: 5 + i,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.6,
                  },
                }}
              >
                <Icon className="size-4 text-primary" />
                {label}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
