"use client";

import { useI18n } from "@/lib/i18n";
import { Badge } from "@/components/ui/badge";
import { useInView } from "@/hooks/use-in-view";

const skills = [
  "React",
  "Next.js",
  "Java",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "OracleSQL",
  "PostgreSQL",
  "MySQL",
  "Shopify",
  "Liquid",
  "Git",
  "Figma",
  "REST APIs",
];

export function AboutSection() {
  const { t } = useI18n();
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-2">
            {t("about.subtitle")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-balance">
            {t("about.title")}
          </h2>
        </div>

        <div
          className={`grid md:grid-cols-2 gap-12 items-start transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div>
            <p className="text-base leading-relaxed text-muted-foreground text-pretty">
              {t("about.description")}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              {t("about.skills")}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className={`rounded-full px-3 py-1 text-sm cursor-default
  transition-all duration-200 ease-out
  hover:-translate-y-[2px] hhover:bg-primary/10 hover:text-primary

  ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
