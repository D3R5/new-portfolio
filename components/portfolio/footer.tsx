"use client";

import { useI18n } from "@/lib/i18n";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="py-10 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        {/* top */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* nombre */}
          <div className="text-center md:text-left">
            <p className="font-medium">Diego Rivera Spröhnle</p>
            <p className="text-sm text-muted-foreground">
              Full Stack Developer • Shopify Developer
            </p>
          </div>

          {/* links */}
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition">
              {t("nav.about")}
            </a>
            <a href="#projects" className="hover:text-foreground transition">
              {t("nav.projects")}
            </a>
            <a href="#contact" className="hover:text-foreground transition">
              {t("nav.contact")}
            </a>
          </div>

          {/* redes */}
          <div className="flex gap-4 text-muted-foreground">
            <a href="https://github.com/D3R5" target="_blank">
              <Github className="w-4 h-4 hover:text-foreground transition" />
            </a>
            <a
              href="https://www.linkedin.com/in/diego-rivera-sprohnle/"
              target="_blank"
            >
              <Linkedin className="w-4 h-4 hover:text-foreground transition" />
            </a>
            <a href="mailto:tuemail@email.com">
              <Mail className="w-4 h-4 hover:text-foreground transition" />
            </a>
          </div>
        </div>

        {/* bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-muted-foreground gap-2">
          <p>
            © {year} Diego Rivera Spröhnle. {t("footer.rights")}
          </p>
          <p>Built with Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
