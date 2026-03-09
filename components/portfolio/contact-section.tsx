"use client";

import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Send,
  Check,
  AlertCircle,
} from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const socials = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/D3R5",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/diego-rivera-sprohnle/",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/diegooders/",
  },
];

type FormStatus = "idle" | "loading" | "success" | "error";

export function ContactSection() {
  const { t } = useI18n();
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const [formStatus, setFormStatus] = useState<FormStatus>("idle");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    website: "", // honeypot anti spam
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus("success");

        setFormData({
          name: "",
          email: "",
          message: "",
          website: "",
        });

        setTimeout(() => setFormStatus("idle"), 5000);
      } else {
        setFormStatus("error");
        setTimeout(() => setFormStatus("idle"), 5000);
      }
    } catch {
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-secondary/30" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-2">
            {t("contact.subtitle")}
          </p>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
            {t("contact.title")}
          </h2>

          <p className="text-base text-muted-foreground max-w-xl mx-auto">
            {t("contact.description")}
          </p>
        </div>

        <div
          className={`grid md:grid-cols-2 gap-12 transition-all duration-700 ${
            isInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          {/* FORM */}
          <div className="bg-card rounded-2xl p-6 md:p-8 shadow-sm border border-border">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">

              {/* Honeypot */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                value={formData.website}
                onChange={(e) =>
                  setFormData({ ...formData, website: e.target.value })
                }
              />

              {/* NAME */}
              <div className="flex flex-col gap-2">
                <Label htmlFor="name">{t("contact.form.name")}</Label>

                <Input
                  id="name"
                  type="text"
                  placeholder={t("contact.form.name.placeholder")}
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>

              {/* EMAIL */}
              <div className="flex flex-col gap-2">
                <Label htmlFor="email">{t("contact.form.email")}</Label>

                <Input
                  id="email"
                  type="email"
                  placeholder={t("contact.form.email.placeholder")}
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>

              {/* MESSAGE */}
              <div className="flex flex-col gap-2">
                <Label htmlFor="message">{t("contact.form.message")}</Label>

                <Textarea
                  id="message"
                  rows={5}
                  placeholder={t("contact.form.message.placeholder")}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  className="resize-none"
                />
              </div>

              {/* BUTTON */}
              <Button
                type="submit"
                disabled={formStatus === "loading"}
                className="w-full rounded-lg mt-2 transition-all duration-300"
              >
                {formStatus === "loading" && (
                  <span className="animate-pulse">
                    {t("contact.form.sending")}
                  </span>
                )}

                {formStatus === "success" && (
                  <>
                    <Check className="size-4 mr-2" />
                    {t("contact.form.success")}
                  </>
                )}

                {formStatus === "error" && (
                  <>
                    <AlertCircle className="size-4 mr-2" />
                    {t("contact.form.error")}
                  </>
                )}

                {formStatus === "idle" && (
                  <>
                    <Send className="size-4 mr-2" />
                    {t("contact.form.submit")}
                  </>
                )}
              </Button>

              {/* SUCCESS MESSAGE */}
              {formStatus === "success" && (
                <div className="flex items-center gap-2 text-green-600 text-sm mt-2">
                  <Check className="size-4" />
                  Mensaje enviado correctamente
                </div>
              )}

              {formStatus === "error" && (
                <div className="flex items-center gap-2 text-red-500 text-sm mt-2">
                  <AlertCircle className="size-4" />
                  Error al enviar el mensaje
                </div>
              )}
            </form>
          </div>

          {/* CONTACT INFO */}
          <div className="flex flex-col justify-center gap-8">

            <div>
              <p className="text-sm text-muted-foreground mb-3">
                {t("contact.email")}
              </p>

              <Button variant="outline" size="lg" asChild className="rounded-full px-8">
                <a href="mailto:diegoesteban.ders@gmail.com">
                  <Mail className="size-4 mr-2" />
                  diegoesteban.ders@gmail.com
                </a>
              </Button>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-3">
                {t("contact.socials")}
              </p>

              <div className="flex gap-3">
                {socials.map((social) => (
                  <Button
                    key={social.name}
                    variant="outline"
                    size="icon"
                    asChild
                    className="rounded-full"
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <social.icon className="size-5" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
