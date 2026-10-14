import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

import { ProjectCover } from "@/components/project-cover";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { Project } from "@/data/portfolio";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group h-full overflow-hidden pt-0 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      <Link
        href={`/projects/${project.slug}`}
        aria-label={`View ${project.title} case study`}
        className="block p-3 pb-0 outline-none focus-visible:[&>div]:ring-[3px] focus-visible:[&>div]:ring-ring/50"
      >
        <ProjectCover project={project} />
      </Link>

      <CardHeader>
        <CardTitle className="text-xl">
          <Link href={`/projects/${project.slug}`} className="hover:text-primary">
            {project.title}
          </Link>
        </CardTitle>
        <CardDescription className="text-base text-foreground/80">{project.tagline}</CardDescription>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col gap-4">
        <p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p>
        <ul className="mt-auto flex flex-wrap gap-1.5" aria-label="Technologies used">
          {project.tech.map((t) => (
            <li key={t}>
              <Badge>{t}</Badge>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="flex-wrap gap-2">
        <Button asChild size="sm">
          <Link href={`/projects/${project.slug}`}>
            Case study <ArrowUpRight />
          </Link>
        </Button>
        <Button asChild size="sm" variant="outline">
          <a href={project.liveUrl} target="_blank" rel="noreferrer">
            <ExternalLink /> Live
          </a>
        </Button>
        <Button asChild size="sm" variant="outline">
          <a href={project.githubUrl} target="_blank" rel="noreferrer">
            <FaGithub /> Code
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
