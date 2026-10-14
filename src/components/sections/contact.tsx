import { Mail, MapPin, Phone } from "lucide-react";

import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { SocialLinks } from "@/components/social-links";
import { contact, site } from "@/data/portfolio";

export function Contact() {
  return (
    <Section id="contact" title={contact.heading} className="bg-secondary/50">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <Reveal>
          <p className="max-w-prose text-lg leading-relaxed text-muted-foreground">
            {contact.text}
          </p>
          <ul className="mt-8 space-y-4">
            <li className="flex items-center gap-3">
              <Phone className="size-5 text-primary" aria-hidden />
              <a
                href={`tel:${site.phone}`}
                className="font-medium hover:text-primary"
              >
                {site.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="size-5 text-primary" aria-hidden />
              <a
                href={`mailto:${site.email}`}
                className="font-medium hover:text-primary"
              >
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="size-5 text-primary" aria-hidden />
              <span>{site.location}</span>
            </li>
          </ul>
          <SocialLinks className="mt-8" />
        </Reveal>

        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  );
}
