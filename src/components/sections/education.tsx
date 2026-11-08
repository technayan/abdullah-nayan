import { GraduationCap } from "lucide-react";

import { Stagger, StaggerItem } from "@/components/reveal";
import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { education } from "@/data/portfolio";

export function Education() {
  return (
    <Section
      id="education"
      title="Education"
      description="My academic background, which gave me strong research, writing and communication skills."
      className="bg-secondary/50"
    >
      <Stagger
        className="relative max-w-3xl space-y-8 border-l pl-8 sm:pl-10"
        gap={0.15}
      >
        {education.map((e) => (
          <StaggerItem key={e.degree} className="relative">
            {/* timeline dot */}
            <span
              aria-hidden
              className="absolute -left-10.25 top-7 size-4 rounded-full border-2 border-primary bg-background sm:-left-12.25"
            />
            <Card className="py-6 transition-colors hover:border-primary/40">
              <CardContent className="flex gap-4">
                <span className="hidden size-12 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground sm:grid">
                  <GraduationCap className="size-6" aria-hidden />
                </span>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                    <h3 className="text-xl font-semibold">{e.degree}</h3>
                    <Badge variant="accent">{e.period}</Badge>
                  </div>
                  <p className="mt-1 font-medium text-primary">
                    {e.institution}
                  </p>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    {e.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
