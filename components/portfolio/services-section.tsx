"use client"

import { useI18n } from "@/lib/i18n"
import { useInView } from "@/hooks/use-in-view"
import { ShoppingBag, Palette, TrendingUp, Code2, Plug, Zap } from "lucide-react"
import { useState } from "react"
import React from "react"

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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [smoothPos, setSmoothPos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent, index: number) => {
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setHoveredIndex(index)
    setMousePos({ x, y })
  }

  const handleMouseLeave = () => setHoveredIndex(null)

  // Animación suave tipo "lerp"
  React.useEffect(() => {
    const animation = requestAnimationFrame(() => {
      setSmoothPos((prev) => ({
        x: prev.x + (mousePos.x - prev.x) * 0.1,
        y: prev.y + (mousePos.y - prev.y) * 0.1,
      }))
    })
    return () => cancelAnimationFrame(animation)
  }, [mousePos])

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
            const isHovered = hoveredIndex === i
            const rotateX = isHovered ? -(smoothPos.y / 25 - 3) : 0
            const rotateY = isHovered ? smoothPos.x / 25 - 3 : 0

            return (
              <div
                key={service.key}
                onMouseMove={(e) => handleMouseMove(e, i)}
                onMouseLeave={handleMouseLeave}
                className={`group bg-card rounded-2xl p-6 border border-border shadow-md transition-all duration-500 
                            hover:shadow-2xl hover:border-primary/50`}
                style={{
                  transform: `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) ${isHovered ? "scale(1.07)" : "scale(1)"}`,
                  transformOrigin: "center",
                  opacity: isInView ? 1 : 0,
                  transition: "transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
                }}
              >
                <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 
                                group-hover:bg-primary/30 group-hover:scale-110 transition-all duration-500">
                  <Icon className="size-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {t(`service.${service.key}.title`)}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
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