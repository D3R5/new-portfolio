"use client"

import { useI18n } from "@/lib/i18n"
import { useInView } from "@/hooks/use-in-view"
import { ShoppingBag, Palette, TrendingUp, Code2, Plug, Zap } from "lucide-react"

const services = [
  {
    key: "1",
    icon: ShoppingBag,
  },
  {
    key: "2",
    icon: Palette,
  },
  {
    key: "3",
    icon: TrendingUp,
  },
  {
    key: "4",
    icon: Code2,
  },
  {
    key: "5",
    icon: Plug,
  },
  {
    key: "6",
    icon: Zap,
  },
]

export function ServicesSection() {
  const { t } = useI18n()
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section id="services" className="py-24 px-6 bg-secondary/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-2">
            {t("services.subtitle")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-balance">
            {t("services.title")}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <div
                key={service.key}
                className={`group bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-500 ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon className="size-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {t(`service.${service.key}.title`)}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(`service.${service.key}.description`)}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
