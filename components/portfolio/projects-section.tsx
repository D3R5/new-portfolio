"use client";

import Image from "next/image";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const projects = [
  {
    titleKey: "project.1.title",
    descriptionKey: "project.1.description",
    image: "/images/1530.png",
    tags: ["Shopify", "Liquid", "JavaScript", "HTML/CSS", "Ecommerce"],
    link: "https://tiendas1530.cl/",
  },
  {
    titleKey: "project.2.title",
    descriptionKey: "project.2.description",
    image: "/images/osiris.png",
    tags: ["Shopify", "Liquid", "JavaScript", "HTML/CSS", "Ecommerce"],
    link: "https://osirisshoes.cl/",
  },
  {
    titleKey: "project.3.title",
    descriptionKey: "project.3.description",
    image: "/images/tododeportes.png",
    tags: ["Shopify", "Liquid", "JavaScript", "HTML/CSS", "Ecommerce"],
    link: "https://tododeportes.cl/",
  },
  {
    titleKey: "project.4.title",
    descriptionKey: "project.4.description",
    image: "/images/titansporswear.png",
    tags: ["Shopify", "Liquid", "JavaScript", "HTML/CSS", "Ecommerce"],
    link: "https://titansportswearstore.myshopify.com/",
  },
  {
    titleKey: "project.5.title",
    descriptionKey: "project.5.description",
    image: "/images/rodotecnia.png",
    tags: [ "JavaScript", "HTML/CSS"],
    link: "https://www.rodotecnia.cl/",
  },
   {
    titleKey: "project.6.title",
    descriptionKey: "project.6.description",
    image: "/images/dinogloss.png",
    tags: [ "Next.js", "Tailwind.CSS", "JavaScript", "HTML/CSS"],
    link: "https://automotive-detailing-website.vercel.app/",
  },
];

export function ProjectsSection() {
  const { t } = useI18n();
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 px-6 bg-secondary/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-2">
            {t("projects.subtitle")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-balance">
            {t("projects.title")}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const isExpanded = expanded === index;

            return (
              <article
                key={project.titleKey}
                className={`group rounded-xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-lg transition-all duration-500 ${
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={t(project.titleKey)}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    /*className="object-contain p-2 transition-transform duration-500 group-hover:scale-105" codigo para que se vea la imagen completa cambiando el ratio*/
                  />
                </div>

                <div className="p-5 flex flex-col gap-3">
                  <h3 className="text-lg font-semibold text-card-foreground">
                    {t(project.titleKey)}
                  </h3>

                  <p
                    className={`text-sm text-muted-foreground leading-relaxed ${
                      isExpanded ? "" : "line-clamp-3"
                    }`}
                  >
                    {t(project.descriptionKey)}
                  </p>

                  <button
                    onClick={() => setExpanded(isExpanded ? null : index)}
                    className="text-xs text-primary hover:underline w-fit"
                  >
                    {isExpanded ? "Ver menos" : "Ver más"}
                  </button>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="rounded-full text-xs px-2.5 py-0.5"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    asChild
                    className="w-fit mt-1 -ml-2"
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t("projects.view")}
                      <ExternalLink className="size-3.5" />
                    </a>
                  </Button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
