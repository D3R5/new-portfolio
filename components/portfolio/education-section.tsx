"use client"

import { useI18n } from "@/lib/i18n"
import { GraduationCap } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const educationItems = [
  {
    degreeKey: "edu.1.degree",
    schoolKey: "edu.1.school",
    yearKey: "edu.1.year",
    descriptionKey: "edu.1.description",
  },
  {
    degreeKey: "edu.2.degree",
    schoolKey: "edu.2.school",
    yearKey: "edu.2.year",
    descriptionKey: "edu.2.description",
  },
  {
    degreeKey: "edu.3.degree",
    schoolKey: "edu.3.school",
    yearKey: "edu.3.year",
    descriptionKey: "edu.3.description",
  }, 
  {
    degreeKey: "edu.4.degree",
    schoolKey: "edu.4.school",
    yearKey: "edu.4.year",
    descriptionKey: "edu.4.description",
  },
]

export function EducationSection() {
  const { t } = useI18n()
  const { ref, isInView } = useInView({ threshold: 0.15 })

  return (
    <section id="education" className="py-24 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-2">
            {t("education.subtitle")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-balance">
            {t("education.title")}
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="flex flex-col gap-12">
            {educationItems.map((item, index) => {
              const isLeft = index % 2 === 0
              return (
                <div
                  key={item.degreeKey}
                  className={`relative flex items-start gap-6 md:gap-0 transition-all duration-700 ${
                    isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 size-12 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center z-10">
                    <GraduationCap className="size-5 text-primary" />
                  </div>

                  {/* Content */}
                  <div
                    className={`ml-16 md:ml-0 md:w-1/2 ${
                      isLeft ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"
                    }`}
                  >
                    <div className="bg-card border border-border rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <span className="text-xs font-medium tracking-wider uppercase text-primary">
                        {t(item.yearKey)}
                      </span>
                      <h3 className="text-lg font-semibold text-card-foreground mt-1">
                        {t(item.degreeKey)}
                      </h3>
                      <p className="text-sm font-medium text-muted-foreground mt-0.5">
                        {t(item.schoolKey)}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                        {t(item.descriptionKey)}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
