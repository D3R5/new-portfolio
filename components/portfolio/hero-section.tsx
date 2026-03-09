"use client"

import { useI18n } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { ArrowDown, Send } from "lucide-react"

export function HeroSection() {
  const { t } = useI18n()

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden"
    >
      {/* Subtle background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 size-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 size-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative max-w-3xl mx-auto text-center">
        <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4 opacity-0 animate-fade-in-up">
          {t("hero.greeting")}
        </p>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-4 opacity-0 animate-fade-in-up animation-delay-200 text-balance">
          {t("hero.name")}
        </h1>

        <p className="text-xl md:text-2xl font-medium text-primary mb-6 opacity-0 animate-fade-in-up animation-delay-200">
          {t("hero.title")}
        </p>

        <p className="text-base md:text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in-up animation-delay-400 text-pretty">
          {t("hero.description")}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up animation-delay-600">
          <Button size="lg" asChild className="rounded-full px-8">
            <a href="#projects">
              {t("hero.cta.projects")}
              <ArrowDown className="size-4" />
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild className="rounded-full px-8">
            <a href="#contact">
              {t("hero.cta.contact")}
              <Send className="size-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
