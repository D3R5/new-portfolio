"use client";

import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { ArrowDown, Send } from "lucide-react";

export function HeroSection() {
  const { t } = useI18n();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden
  bg-gradient-to-b from-primary/10 via-background to-background"
    >
      {/* Subtle background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 size-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 size-96 rounded-full bg-primary/20 blur-3xl" />
      </div>

      <div className="relative max-w-3xl mx-auto text-center">
        <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4 opacity-0 animate-fade-in-up">
          {t("hero.greeting")}
        </p>

        <h1
          className="text-5xl md:text-7xl font-bold tracking-tight mb-4
leading-[1.1] md:leading-[1.2] 
bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-600 bg-clip-text text-transparent text-shine"
        >
          {t("hero.name")}
        </h1>
        <p className="text-xl md:text-2xl font-medium text-primary mb-6 opacity-0 animate-fade-in-up animation-delay-200">
          {t("hero.title")}
        </p>

        <p className="text-base md:text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in-up animation-delay-400 text-pretty">
          {t("hero.description")}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up animation-delay-600">
          <Button size="lg" asChild className="transition-transform hover:-translate-y-1 hover:scale-105 duration-300">
            <a href="#projects">
              {t("hero.cta.projects")}
              <ArrowDown className="size-4" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="transition-transform hover:-translate-y-1 hover:scale-105 duration-300"
          >
            <a href="#contact">
              {t("hero.cta.contact")}
              <Send className="size-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
