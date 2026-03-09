"use client";

import { useState, useEffect } from "react";
import { useI18n } from "@/lib/i18n";
import { GraduationCap } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

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
];

export function EducationSection() {
  const { t } = useI18n();
  const { ref, isInView } = useInView({ threshold: 0.15 });

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [smoothPos, setSmoothPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent, index: number) => {
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setHoveredIndex(index);
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => setHoveredIndex(null);

  // Animación suave tipo "lerp"
  useEffect(() => {
    const animation = requestAnimationFrame(() => {
      setSmoothPos((prev) => ({
        x: prev.x + (mousePos.x - prev.x) * 0.1,
        y: prev.y + (mousePos.y - prev.y) * 0.1,
      }));
    });
    return () => cancelAnimationFrame(animation);
  }, [mousePos]);

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

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="flex flex-col gap-12">
            {educationItems.map((item, index) => {
              const isLeft = index % 2 === 0;
              const isHovered = hoveredIndex === index;
              const rotateX = isHovered ? -(smoothPos.y / 25 - 3) : 0;
              const rotateY = isHovered ? smoothPos.x / 25 - 3 : 0;

              return (
                <div
                  key={item.degreeKey}
                  className={`relative flex items-start gap-6 md:gap-0 transition-all duration-700 ${
                    isInView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 size-12 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center z-10">
                    <GraduationCap
                      className={`size-5 text-primary transition-all duration-500 ${
                        hoveredIndex === index
                          ? "scale-125 rotate-12"
                          : "scale-100 rotate-0"
                      }`}
                    />
                  </div>

                  {/* Content */}
                  <div
                    className={`ml-16 md:ml-0 md:w-1/2 ${
                      isLeft ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"
                    }`}
                  >
                    <div
                      onMouseMove={(e) => handleMouseMove(e, index)}
                      onMouseLeave={handleMouseLeave}
                      className="bg-card border border-border rounded-xl p-5 shadow-md hover:shadow-2xl transition-shadow duration-500"
                      style={{
                        transform: `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) ${isHovered ? "scale(1.07)" : "scale(1)"}`,
                        transformOrigin: "center",
                        transition:
                          "transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
                      }}
                    >
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
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
