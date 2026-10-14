import { ArrowLeft, ArrowRight, Check, ExternalLink } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaGithub } from "react-icons/fa6";

import { ProjectCover } from "@/components/project-cover";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getProject, projects } from "@/data/portfolio";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: project.title, description: project.tagline };
}

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal>
      <section className="border-t pt-8">
        <h2 className="mb-4 text-2xl font-semibold">{title}</h2>
        {children}
      </section>
    </Reveal>
  );
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];
  const { caseStudy: cs } = project;

  return (
    <article
      id="top"
      className="mx-auto w-full max-w-6xl px-5 pb-24 pt-10 sm:px-8 sm:pt-14"
    >
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-4" /> All projects
      </Link>

      <header className="mt-6 max-w-3xl">
        <Reveal>
          <h1 className="text-4xl font-semibold sm:text-6xl">
            {project.title}
          </h1>
          <p className="mt-4 text-xl text-muted-foreground">
            {project.tagline}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href={project.liveUrl} target="_blank" rel="noreferrer">
                <ExternalLink /> Live demo
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={project.githubUrl} target="_blank" rel="noreferrer">
                <FaGithub /> Source code
              </a>
            </Button>
          </div>
        </Reveal>
      </header>

      <Reveal delay={0.1} className="mt-12">
        <ProjectCover project={project} className="aspect-16/8" />
      </Reveal>

      <div className="mt-14 grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-16">
        {/* Project facts */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <Reveal>
            <dl className="space-y-5 rounded-xl border bg-card p-5">
              <div>
                <dt className="text-sm text-muted-foreground">Year</dt>
                <dd className="font-medium">{project.year}</dd>
              </div>
              <div>
                <dt className="text-sm text-muted-foreground">Role</dt>
                <dd className="font-medium">{project.role}</dd>
              </div>
              <div>
                <dt className="text-sm text-muted-foreground">Duration</dt>
                <dd className="font-medium">{project.duration}</dd>
              </div>
              <div>
                <dt className="mb-2 text-sm text-muted-foreground">
                  Tech stack
                </dt>
                <dd>
                  <ul className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <li key={t}>
                        <Badge>{t}</Badge>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
          </Reveal>
        </aside>

        {/* Case study */}
        <div className="max-w-3xl space-y-10 text-lg leading-relaxed text-muted-foreground">
          <Block title="Overview">
            <p>{cs.overview}</p>
          </Block>
          <Block title="The problem">
            <p>{cs.problem}</p>
          </Block>
          <Block title="The solution">
            <p>{cs.solution}</p>
          </Block>
          <Block title="Key features">
            <ul className="space-y-3">
              {cs.features.map((f) => (
                <li key={f} className="flex gap-3">
                  <Check
                    className="mt-1.5 size-4 shrink-0 text-primary"
                    aria-hidden
                  />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </Block>
          <Block title="Challenges and how I solved them">
            <div className="space-y-6">
              {cs.challenges.map((c) => (
                <div key={c.title}>
                  <h3 className="text-lg font-semibold text-foreground">
                    {c.title}
                  </h3>
                  <p className="mt-1">{c.text}</p>
                </div>
              ))}
            </div>
          </Block>
          <Block title="Outcome">
            <p>{cs.outcome}</p>
          </Block>
          <Block title="What I learned">
            <ul className="list-disc space-y-2 pl-5 marker:text-primary">
              {cs.learnings.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          </Block>
        </div>
      </div>

      {projects.length > 1 && (
        <Reveal className="mt-20">
          <Link
            href={`/projects/${next.slug}`}
            className="group flex items-center justify-between gap-4 rounded-xl border bg-card p-6 transition-colors hover:border-primary sm:p-8"
          >
            <div>
              <p className="text-sm text-muted-foreground">Next project</p>
              <p className="mt-1 font-display text-2xl font-semibold sm:text-3xl">
                {next.title}
              </p>
            </div>
            <ArrowRight className="size-6 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" />
          </Link>
        </Reveal>
      )}
    </article>
  );
}
