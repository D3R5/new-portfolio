"use client"

import { I18nProvider } from "@/lib/i18n"
import { Navbar } from "@/components/portfolio/navbar"
import { HeroSection } from "@/components/portfolio/hero-section"
import { AboutSection } from "@/components/portfolio/about-section"
import { ProjectsSection } from "@/components/portfolio/projects-section"
import { EducationSection } from "@/components/portfolio/education-section"
import { ContactSection } from "@/components/portfolio/contact-section"
import { Footer } from "@/components/portfolio/footer"
import { WhatsAppButton } from "@/components/portfolio/whatsapp-button"

export default function Home() {
  return (
    <I18nProvider>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
      {/* Replace with your WhatsApp number (include country code, e.g., "1234567890") */}
      <WhatsAppButton phoneNumber="56920995401" message="Hello! I found your portfolio and would like to connect." />
    </I18nProvider>
  )
}
