import Image from "next/image";
import { Award, ExternalLink } from "lucide-react";

import { Stagger, StaggerItem } from "@/components/reveal";
import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { certifications } from "@/data/portfolio";

export function Certifications() {
  return (
    <Section
      id="certifications"
      title="Certifications"
      description="Formal training that backs up the skills above."
    >
      <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" gap={0.12}>
        {certifications.map((c) => (
          <StaggerItem key={c.title} className="h-full">
            <Card className="h-full overflow-hidden py-0 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
              {c.image && (
                <div className="relative aspect-[16/10] w-full border-b bg-muted">
                  <Image
                    src={c.image}
                    alt={`${c.title} certificate`}
                    fill
                    sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              )}
              <CardContent className="flex flex-1 flex-col gap-4 py-6">
                <div className="flex items-start gap-4">
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground">
                    <Award className="size-6" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold leading-snug">{c.title}</h3>
                    <p className="mt-0.5 font-medium text-primary">{c.issuer}</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{c.description}</p>
                <div className="mt-auto flex flex-wrap items-center gap-3 pt-2">
                  <Badge variant="outline">{c.date}</Badge>
                  {c.credentialUrl && (
                    <Button asChild size="sm" variant="outline">
                      <a href={c.credentialUrl} target="_blank" rel="noreferrer">
                        <ExternalLink /> View certificate
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
