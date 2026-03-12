"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";

export type Locale = "en" | "es";

type Translations = {
  [key: string]: {
    en: string;
    es: string;
  };
};

const translations: Translations = {
  // Navbar
  "nav.home": { en: "Home", es: "Inicio" },
  "nav.about": { en: "About", es: "Sobre Mi" },
  "nav.services": { en: "Services", es: "Servicios" },
  "nav.projects": { en: "Projects", es: "Proyectos" },
  "nav.education": { en: "Education", es: "Educacion" },
  "nav.contact": { en: "Contact", es: "Contacto" },
  "nav.cv": { en: "Download CV", es: "Descargar CV" },

  // Hero
  "hero.greeting": { en: "Hello Wolrd, I'm", es: "Hola Mundo, soy" },
  "hero.name": { en: "Diego Rivera Spröhnle", es: "Diego Rivera Spröhnle" },
  "hero.title": {
    en: "Full Stack Developer • Shopify Developer",
    es: "Desarrollador Full Stack • Desarrollador Shopify",
  },
  "hero.description": {
    en: "Building modern digital experiences focused on ecommerce. Specialized in JavaScript programming and Shopify store development, creating fast, scalable, and user-centric solutions.",
    es: "Desarrollo experiencias digitales modernas enfocadas en ecommerce. Especializado en programación con JavaScript y desarrollo de tiendas Shopify, creando soluciones rápidas, escalables y centradas en el usuario.",
  },
  "hero.cta.projects": { en: "View Projects", es: "Ver Proyectos" },
  "hero.cta.contact": { en: "Get in Touch", es: "Contactame" },

  // About
  "about.title": { en: "About Me", es: "Sobre Mi" },
  "about.subtitle": { en: "Get to know me", es: "Conoceme" },
  "about.description": {
    en: "I'm a full-stack developer with over 5 years of experience building web applications and ecommerce solutions. I specialize in JavaScript, React, Next.js, and Node.js, as well as Shopify store development using Liquid and optimization best practices. I focus on creating intuitive interfaces and scalable systems that enhance the shopping experience and performance of online stores. When I'm not coding, you'll find me exploring new technologies, listening to music, hanging out with my pets, or enjoying motorcycle rides.",
    es: "Soy desarrollador full-stack con más de 5 años de experiencia construyendo aplicaciones web y soluciones de ecommerce. Me especializo en JavaScript, React, Next.js y Node.js, además del desarrollo de tiendas Shopify utilizando Liquid y buenas prácticas de optimización. Me enfoco en crear interfaces intuitivas y sistemas escalables que mejoran la experiencia de compra y el rendimiento de las tiendas online. Cuando no estoy programando, me encontrarás explorando nuevas tecnologías, escuchando música, compartiendo con mis mascotas o disfrutando de salir en moto.",
  },
  "about.skills": {
    en: "Skills & Technologies",
    es: "Habilidades y Tecnologias",
  },
  // Services
  "services.title": {
    en: "What I Can Help You With",
    es: "En Que Puedo Ayudarte",
  },
  "services.subtitle": { en: "My services", es: "Mis servicios" },

  "service.1.title": {
    en: "Shopify Store Development",
    es: "Desarrollo de Tiendas Shopify",
  },
  "service.1.description": {
    en: "Setup, customization and development of Shopify stores tailored for modern e-commerce businesses.",
    es: "Configuracion, personalizacion y desarrollo de tiendas Shopify adaptadas para negocios de comercio electronico modernos.",
  },
  "service.2.title": {
    en: "Custom Shopify Themes",
    es: "Temas Personalizados para Shopify",
  },
  "service.2.description": {
    en: "Development and customization of high-performance Shopify themes focused on design, speed and conversions.",
    es: "Desarrollo y personalizacion de temas Shopify de alto rendimiento enfocados en diseno, velocidad y conversiones.",
  },
  "service.3.title": {
    en: "E-commerce Optimization",
    es: "Optimizacion de E-commerce",
  },
  "service.3.description": {
    en: "Improving store performance, UX, and checkout flow to increase conversions and customer engagement.",
    es: "Mejora del rendimiento de la tienda, UX y flujo de checkout para aumentar conversiones y engagement del cliente.",
  },
  "service.4.title": {
    en: "Full-Stack Web Applications",
    es: "Aplicaciones Web Full-Stack",
  },
  "service.4.description": {
    en: "Building scalable web applications using Next.js, Node.js and modern technologies.",
    es: "Construccion de aplicaciones web escalables usando Next.js, Node.js y tecnologias modernas.",
  },
  "service.5.title": { en: "API Integrations", es: "Integraciones de APIs" },
  "service.5.description": {
    en: "Integration of third-party services such as payments, analytics, CRMs and marketing tools.",
    es: "Integracion de servicios de terceros como pagos, analiticas, CRMs y herramientas de marketing.",
  },
  "service.6.title": {
    en: "Performance & SEO Optimization",
    es: "Optimizacion de Rendimiento y SEO",
  },
  "service.6.description": {
    en: "Optimizing websites for faster load times, better SEO and improved user experience.",
    es: "Optimizacion de sitios web para tiempos de carga mas rapidos, mejor SEO y experiencia de usuario mejorada.",
  },
  // Projects
  "projects.title": { en: "Projects", es: "Proyectos" },
  "projects.subtitle": { en: "Selected work", es: "Trabajo seleccionado" },
  "projects.view": { en: "View Project", es: "Ver Proyecto" },

  "project.1.title": {
    en: "E-Commerce Stores 1530",
    es: "E-Commerce Tiendas 1530",
  },
  "project.1.description": {
    en: "E-commerce platform on Shopify developed from start to finish for Tiendas 1530, specializing in footwear and urban fashion from exclusive brands. Comprehensive catalog management, synchronized inventory, SEO optimization, payment method configuration, and a shopping experience focused on conversion.",
    es: "Plataforma de ecommerce en Shopify desarrollada de inicio a fin para Tiendas 1530, especializada en calzado y moda urbana de marcas exclusivas. Gestión integral de catálogo, inventario sincronizado, optimización SEO, configuración de medios de pago y experiencia de compra enfocada en conversión.",
  },
  "project.2.title": {
    en: "Ecommerce Osiris Shoes",
    es: "Ecommerce Osiris Shoes",
  },
  "project.2.description": {
    en: "Development and management of Osiris' e-commerce on Shopify, focused on exclusive footwear, clothing, and streetwear and skate accessories. Catalog management, inventory control, SEO optimization, and continuous improvements aimed at conversion.",
    es: "Desarrollo y gestión del ecommerce de Osiris en Shopify, enfocado en calzado, vestuario y accesorios streetwear y skate de carácter exclusivo. Administración de catálogo, control de inventario, optimización SEO y mejoras continuas orientadas a conversión.",
  },
  "project.3.title": {
    en: "Ecommerce Tododeportes",
    es: "Ecommerce Tododeportes",
  },
  "project.3.description": {
    en: "Comprehensive development and management of Tododeportes' e-commerce platform on Shopify, specializing in footwear, clothing, accessories, bicycles, and sports equipment. High-volume catalog management, inventory control, SEO optimization, and payment gateway configuration.",
    es: "Desarrollo y gestión integral del ecommerce de Tododeportes en Shopify, especializado en calzado, vestuario, accesorios, bicicletas y máquinas deportivas. Administración de catálogo de alto volumen, control de inventario, optimización SEO y configuración de pasarelas de pago.",
  },
  "project.4.title": {
    en: "Ecommerce Titansportswear",
    es: "Ecommerce Titansportswear",
  },
  "project.4.description": {
    en: "Comprehensive development and management of TitanSportsWear's e-commerce platform on Shopify, specializing in exclusive footwear and apparel. Catalog management, inventory control, SEO optimization, and continuous improvements aimed at conversion.",
    es: "Desarrollo y gestión integral del ecommerce de TitanSportsWear en Shopify, especializado en calzado y vestuario exclusivo. Administración de catálogo, control de inventario, optimización SEO y mejoras continuas orientadas a conversión.",
  },
"project.5.title": {
  en: "Rodotecnia - Industrial Design Website",
  es: "Rodotecnia - Sitio Web de Diseños Industriales",
},
"project.5.description": {
  en: "Corporate website developed for Rodotecnia, a company specialized in industrial design and engineering solutions. The project focused on creating a modern and professional digital presence, highlighting services, projects, and technical capabilities with a responsive and optimized interface.",
  es: "Sitio web corporativo desarrollado para Rodotecnia, empresa especializada en diseño industrial y soluciones de ingeniería. El proyecto se enfocó en crear una presencia digital moderna y profesional, destacando servicios, proyectos y capacidades técnicas con una interfaz responsiva y optimizada.",
},
"project.6.title": {
  en: "DinoGloss - Car Wash & Auto Detailing",
  es: "DinoGloss - Lavado y Detailing Automotriz",
},
"project.6.description": {
  en: "Website developed for DinoGloss, a car wash and auto detailing service focused on premium vehicle care. The site highlights available services, pricing, and booking options with a clean, modern design optimized for mobile users and local customer acquisition.",
  es: "Sitio web desarrollado para DinoGloss, servicio especializado en lavado y detailing automotriz enfocado en el cuidado premium de vehículos. El sitio presenta los servicios, precios y opciones de contacto con un diseño limpio y moderno optimizado para dispositivos móviles y captación de clientes locales.",
},
"project.7.title": {
  en: "Café Template - Website for Coffee Shops",
  es: "Plantilla Web para Cafeterías",
},
"project.7.description": {
  en: "Modern website concept designed for coffee shops and small cafés. The project focuses on a clean and inviting design to showcase menus, featured products, location information, and brand identity, optimized for mobile users and local customer engagement.",
  es: "Concepto de sitio web moderno diseñado para cafeterías y pequeños cafés. El proyecto se enfoca en un diseño limpio y atractivo para mostrar menús, productos destacados, ubicación e identidad de marca, optimizado para dispositivos móviles y la interacción con clientes locales.",
},
  // Education
  "education.title": { en: "Education", es: "Educacion" },
  "education.subtitle": {
    en: "My academic journey",
    es: "Mi trayectoria academica",
  },

  "edu.1.degree": {
    en: "Civil Mechatronics Engineering",
    es: "Ingeniería Civil Mecatrónica",
  },
  "edu.1.school": { en: "Talca University", es: "Universidad de Talca" },
  "edu.1.year": { en: "2017 - 2022", es: "2017 - 2022" },
  "edu.1.description": {
    en: "Engineering training focused on automation, robotics, control systems, electronics, and programming for intelligent mechanical systems.",
    es: "Formación en ingeniería enfocada en automatización, robótica, sistemas de control, electrónica y programación para sistemas mecánicos inteligentes.",
  },

  "edu.2.degree": {
    en: "Full Stack Developer",
    es: "Desarrollador Full Stack",
  },
  "edu.2.school": { en: "Soy Henry Bootcamp", es: "Soy Henry Bootcamp" },
  "edu.2.year": { en: "2023 - 2023", es: "2023 - 2023" },
  "edu.2.description": {
    en: "Full stack development focused on JavaScript, Node.js, and PostgreSQL databases.",
    es: "Desarrollo full stack enfocado en JavaScript, Node.js y bases de datos PostgreSQL.",
  },
  "edu.3.degree": {
    en: "Full Stack Java Developer",
    es: "Desarrollador Full Stack Java",
  },
  "edu.3.school": { en: "Adalid Fudesco", es: "Adalid Fudesco" },
  "edu.3.year": { en: "2024 - 2024", es: "2024 - 2024" },
  "edu.3.description": {
    en: "Training in full stack development using Java and modern web technologies, including backend development, REST APIs, databases, and frontend integration.",
    es: "Formación en desarrollo full stack utilizando Java y tecnologías web modernas, incluyendo desarrollo backend, APIs REST, bases de datos e integración con frontend.",
  },
  "edu.4.degree": { en: "Computer Engineering", es: "Ingeniería Informática" },
  "edu.4.school": {
    en: "San Sebastian University",
    es: "Universidad San Sebastian",
  },
  "edu.4.year": { en: "2025 - 2028", es: "2025 - 2028" },
  "edu.4.description": {
    en: "Ongoing studies in computer engineering with a focus on software development, programming, systems architecture, and databases.",
    es: "Formación en desarrollo de software, programación, arquitectura de sistemas y bases de datos.",
  },

  "edu.5.degree": { en: "Vocational Training", es: "Formación Profesional" },
  "edu.5.school": {
    en: "Web development and programming – Udemy, Coderhouse, IBM",
    es: "Desarrollo web y programación – Udemy, Coderhouse, IBM",
  },
  "edu.5.year": { en: "2017 - 2026", es: "2017 - 2026" },
  "edu.5.description": {
    en: "Vocational training in programming, web development, and ecommerce through courses and certifications on Udemy, Coderhouse, IBM, and other platforms.",
    es: "Formación en programación, desarrollo web y ecommerce mediante cursos y certificaciones en Udemy, Coderhouse, IBM y otras plataformas.",
  },

  // Contact
  "contact.title": { en: "Contact", es: "Contacto" },
  "contact.subtitle": {
    en: "Let's work together",
    es: "Trabajemos juntos",
  },
  "contact.description": {
    en: "If you'd like to discuss a project or just say hi, I'm always open to chat. Fill out the form below or reach out through any of the channels.",
    es: "Si te gustaria discutir un proyecto o simplemente saludar, siempre estoy abierto a conversar. Completa el formulario o contactame por cualquiera de los canales.",
  },
  "contact.email": { en: "Email", es: "Correo" },
  "contact.socials": { en: "Social Links", es: "Redes Sociales" },
  "contact.form.name": { en: "Name", es: "Nombre" },
  "contact.form.name.placeholder": { en: "Your name", es: "Tu nombre" },
  "contact.form.email": { en: "Email", es: "Correo electronico" },
  "contact.form.email.placeholder": {
    en: "your@email.com",
    es: "tu@correo.com",
  },
  "contact.form.message": { en: "Message", es: "Mensaje" },
  "contact.form.message.placeholder": {
    en: "Tell me about your project...",
    es: "Cuentame sobre tu proyecto...",
  },
  "contact.form.submit": { en: "Send Message", es: "Enviar Mensaje" },
  "contact.form.sending": { en: "Sending...", es: "Enviando..." },
  "contact.form.success": {
    en: "Message sent successfully!",
    es: "Mensaje enviado con exito!",
  },
  "contact.form.error": {
    en: "Failed to send message. Please try again.",
    es: "Error al enviar el mensaje. Por favor, intenta de nuevo.",
  },

  // Footer
  "footer.rights": {
    en: "All rights reserved.",
    es: "Todos los derechos reservados.",
  },
};

type I18nContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  const t = useCallback(
    (key: string) => {
      const translation = translations[key];
      if (!translation) return key;
      return translation[locale];
    },
    [locale],
  );

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}
