import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { about } from "@/data/portfolio";

export function About() {
  return (
    <Section id="about" title="About me">
      <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
        <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <p className="max-w-prose">{p}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <Card className="py-6">
            <CardContent>
              <dl className="space-y-4">
                {about.facts.map((f) => (
                  <div key={f.label} className="border-b pb-4 last:border-0 last:pb-0">
                    <dt className="text-sm text-muted-foreground">{f.label}</dt>
                    <dd className="mt-0.5 font-medium">{f.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-6">
                <p className="mb-2 text-sm text-muted-foreground">Currently learning</p>
                <ul className="flex flex-wrap gap-1.5">
                  {about.learning.map((l) => (
                    <li key={l}>
                      <Badge variant="accent">{l}</Badge>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}
