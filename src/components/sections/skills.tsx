import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { Section } from "@/components/section";
import { skillGroups } from "@/data/portfolio";

export function Skills() {
  return (
    <Section
      id="skills"
      title="Skills"
      description="The languages, frameworks and tools I use most often."
    >
      <div className="space-y-12">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <Reveal>
              <h3 className="mb-4 text-lg font-semibold">{group.title}</h3>
            </Reveal>
            <Stagger className="grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4 md:grid-cols-5 lg:grid-cols-7">
              {group.skills.map(({ name, icon: Icon }) => (
                <StaggerItem key={name}>
                  <div className="group flex aspect-square flex-col items-center justify-center gap-3 rounded-xl border bg-card p-2 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/10 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                    <Icon
                      className="size-8 shrink-0 text-primary transition-transform duration-300 group-hover:scale-110 sm:size-10 motion-reduce:transition-none"
                      aria-hidden
                    />
                    <span className="text-xs font-medium sm:text-sm">{name}</span>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        ))}
      </div>
    </Section>
  );
}
