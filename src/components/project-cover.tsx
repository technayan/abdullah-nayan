import Image from "next/image";

import type { Project } from "@/data/portfolio";
import { cn } from "@/lib/utils";

/** Shows the project image if provided, otherwise a clean generated cover. */
export function ProjectCover({ project, className }: { project: Project; className?: string }) {
  return (
    <div
      className={cn(
        "relative aspect-[16/10] w-full overflow-hidden rounded-lg border bg-linear-to-br from-accent via-accent to-accent-2/25",
        className
      )}
    >
      {project.image ? (
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          sizes="(min-width: 1024px) 560px, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none"
        />
      ) : (
        <>
          <div className="bg-dots absolute inset-0" aria-hidden />
          <div className="absolute inset-0 flex items-end p-5 sm:p-6" aria-hidden>
            <span className="font-display text-5xl font-semibold tracking-tight text-accent-foreground/90 transition-transform duration-500 group-hover:translate-x-1 sm:text-6xl motion-reduce:transition-none">
              {project.title}
            </span>
          </div>
        </>
      )}
    </div>
  );
}
