import { ProjectCard } from "@/components/project-card";
import { Stagger, StaggerItem } from "@/components/reveal";
import { Section } from "@/components/section";
import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      description="Things I've built to learn and to solve real problems. Each one has a live demo, source code and a written case study."
      className="bg-secondary/50"
    >
      <Stagger className="grid gap-6 md:grid-cols-2 lg:gap-8" gap={0.12}>
        {projects.map((project) => (
          <StaggerItem key={project.slug} className="h-full">
            <ProjectCard project={project} />
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
