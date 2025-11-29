"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import {
  Server,
  Shield,
  Network,
  HardDrive,
  RefreshCw,
  Terminal,
  Instagram,
  Github,
  Youtube,
  MessageCircle,
  Code,
} from "lucide-react"

// Translations
const translations = {
  "pt-BR": {
    title: "Precisa de ajuda com tecnologia?",
    subtitle: "Soluções profissionais em TI para empresas e usuários domésticos",
    servicesTitle: "Nossos Serviços",
    services: [
      {
        icon: Server,
        title: "Suporte de TI",
        description: "Assistência técnica completa para manter seus sistemas funcionando perfeitamente",
      },
      {
        icon: RefreshCw,
        title: "Atualização de Software",
        description: "Mantenha seus aplicativos e sistemas sempre atualizados e seguros",
      },
      {
        icon: HardDrive,
        title: "Reparo de Hardware",
        description: "Diagnóstico e conserto de equipamentos com rapidez e eficiência",
      },
      {
        icon: Shield,
        title: "Consultoria em Segurança",
        description: "Proteção avançada contra ameaças cibernéticas e vulnerabilidades",
      },
      {
        icon: Network,
        title: "Redes e Infraestrutura",
        description: "Planejamento e implementação de soluções de rede robustas",
      },
      {
        icon: Terminal,
        title: "Suporte Linux/Windows",
        description: "Solução de problemas em sistemas Linux e Windows",
      },
      {
        icon: Code,
        title: "Desenvolvimento de Software",
        description: "Criação de soluções personalizadas para atender às necessidades do seu negócio",
      },
    ],
    contactTitle: "Entre em Contato",
    contactSubtitle: "Conte-nos sobre seu problema e entraremos em contato em breve",
    formName: "Nome Completo",
    formPhone: "Número de Contato",
    formEmail: "E-mail (opcional)",
    formIssue: "Descreva seu problema",
    formSubmit: "Enviar Mensagem",
    bioTitle: "Muito prazer, eu sou o Richard",
    bio: "Sou apaixonado por tecnologia e ajudar pessoas. Ao longo de mais de 10 anos trabalhando com suporte técnico, redes, segurança e desenvolvimento, aprendi que tecnologia boa é aquela que resolve problemas de verdade. Por isso, hoje ajudo empresas e usuários a manterem seus sistemas protegidos, rápidos e funcionando sem dor de cabeça.",
    socialTitle: "Conecte-se",
    footer: "Richard Wollyce. Todos os direitos reservados.",
  },
  en: {
    title: "Need help with technology?",
    subtitle: "Professional IT services for businesses and home users",
    servicesTitle: "Our Services",
    services: [
      {
        icon: Server,
        title: "IT Support",
        description: "Complete technical assistance to keep your systems running perfectly",
      },
      {
        icon: RefreshCw,
        title: "Software Updates",
        description: "Keep your applications and systems always updated and secure",
      },
      {
        icon: HardDrive,
        title: "Hardware Repair",
        description: "Quick and efficient equipment diagnosis and repair",
      },
      {
        icon: Shield,
        title: "Cybersecurity Consulting",
        description: "Advanced protection against cyber threats and vulnerabilities",
      },
      {
        icon: Network,
        title: "Network & Infrastructure",
        description: "Planning and implementation of robust network solutions",
      },
      {
        icon: Terminal,
        title: "Linux/Windows Support",
        description: "Troubleshooting for Linux and Windows systems",
      },
      {
        icon: Code,
        title: "Software Development",
        description: "Custom software solutions tailored to your business needs",
      },
    ],
    contactTitle: "Get in Touch",
    contactSubtitle: "Tell us about your issue and we'll get back to you soon",
    formName: "Full Name",
    formPhone: "Contact Number",
    formEmail: "Email (optional)",
    formIssue: "Describe your issue",
    formSubmit: "Send Message",
    bioTitle: "Nice to meet you, I’m Richard",
    bio: "I am passionate about technology and helping people. With over 10 years of experience in IT support, networking, security and development, I believe technology should make life easier. That’s why I help businesses and everyday users to keep their systems working without complications.",
    socialTitle: "Connect",
    footer: "Richard Wollyce. All rights reserved.",
  },
}

// Flag components as inline SVGs for better compatibility
const BrazilFlag = () => (
  <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="20" height="14" fill="#009C3B" />
    <path d="M10 1L18 7L10 13L2 7L10 1Z" fill="#FFDF00" />
    <circle cx="10" cy="7" r="3.5" fill="#002776" />
  </svg>
)

const USFlag = () => (
  <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="20" height="14" fill="#B22234" />
    <rect y="1" width="20" height="1" fill="white" />
    <rect y="3" width="20" height="1" fill="white" />
    <rect y="5" width="20" height="1" fill="white" />
    <rect y="7" width="20" height="1" fill="white" />
    <rect y="9" width="20" height="1" fill="white" />
    <rect y="11" width="20" height="1" fill="white" />
    <rect width="8" height="7" fill="#3C3B6E" />
  </svg>
)

export default function ITServicesPage() {
  const [lang, setLang] = useState<"pt-BR" | "en">("pt-BR")
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    issue: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)

  const t = translations[lang]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.ok) {
        // Reset form on success
        setFormData({
          name: "",
          phone: "",
          email: "",
          issue: "",
        })

        alert(
          lang === "pt-BR"
            ? "Mensagem enviada com sucesso! Entraremos em contato em breve."
            : "Message sent successfully! We'll contact you soon.",
        )
      } else {
        throw new Error(data.error || "Failed to send message")
      }
    } catch (error) {
      console.error("[v0] Error submitting form:", error)
      alert(
        lang === "pt-BR"
          ? "Erro ao enviar mensagem. Por favor, tente novamente."
          : "Error sending message. Please try again.",
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -400, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 400, behavior: "smooth" })
    }
  }

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/richardwollyce",
    },
    {
      name: "X",
      icon: () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      url: "https://x.com/richardwollyce",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/richard-wollyce",
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://youtube.com/richardwollyce",
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: "https://wa.me/5516991597978",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header with Language Toggle */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold">Richard Wollyce</div>
          <div className="flex gap-2">
            <Button
              variant={lang === "pt-BR" ? "default" : "ghost"}
              size="sm"
              onClick={() => setLang("pt-BR")}
              className="flex items-center gap-2"
            >
              <BrazilFlag />
              <span>PT</span>
            </Button>
            <Button
              variant={lang === "en" ? "default" : "ghost"}
              size="sm"
              onClick={() => setLang("en")}
              className="flex items-center gap-2"
            >
              <USFlag />
              <span>EN</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">{t.title}</h1>
          <p className="text-xl md:text-2xl text-muted-foreground text-balance">{t.subtitle}</p>
        </div>
      </section>

      {/* Services Section - Infinite Scroll */}
      <section className="py-16 px-4 bg-muted/30 overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">{t.servicesTitle}</h2>
          <div className="relative group">
            {/* Left Navigation Button */}
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/90 hover:bg-background border-2 border-border rounded-full p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Scroll left"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>

            {/* Right Navigation Button */}
            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/90 hover:bg-background border-2 border-border rounded-full p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Scroll right"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>

            {/* Carousel Container */}
            <div
              ref={carouselRef}
              className="overflow-x-auto scrollbar-hide scroll-smooth"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className={`flex gap-6 ${isPaused ? "" : "animate-infinite-scroll"}`}>
                {/* First set of services */}
                {t.services.map((service, index) => {
                  const IconComponent = service.icon
                  return (
                    <Card key={`first-${index}`} className="p-6 hover:shadow-lg transition-shadow flex-shrink-0 w-80">
                      <div className="mb-4">
                        <IconComponent className="h-12 w-12" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    </Card>
                  )
                })}
                {/* Duplicate set for seamless loop */}
                {t.services.map((service, index) => {
                  const IconComponent = service.icon
                  return (
                    <Card key={`second-${index}`} className="p-6 hover:shadow-lg transition-shadow flex-shrink-0 w-80">
                      <div className="mb-4">
                        <IconComponent className="h-12 w-12" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    </Card>
                  )
                })}
                {t.services.map((service, index) => {
                  const IconComponent = service.icon
                  return (
                    <Card key={`third-${index}`} className="p-6 hover:shadow-lg transition-shadow flex-shrink-0 w-80">
                      <div className="mb-4">
                        <IconComponent className="h-12 w-12" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">{t.contactTitle}</h2>
            <p className="text-lg text-muted-foreground">{t.contactSubtitle}</p>
          </div>

          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">{t.formName}</Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">{t.formPhone}</Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">{t.formEmail}</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="issue">{t.formIssue}</Label>
                <Textarea
                  id="issue"
                  required
                  rows={5}
                  value={formData.issue}
                  onChange={(e) => setFormData((prev) => ({ ...prev, issue: e.target.value }))}
                />
              </div>

              <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                {isSubmitting ? (lang === "pt-BR" ? "Enviando..." : "Sending...") : t.formSubmit}
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-shrink-0">
              <img src="/rwpfp.webp" alt="Profile" className="rounded-lg w-48 h-48 object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">{t.bioTitle}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{t.bio}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8">{t.socialTitle}</h2>
          <div className="flex justify-center gap-6 flex-wrap">
            {socialLinks.map((social) => {
              const IconComponent = social.icon
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-lg border border-border hover:bg-muted transition-colors"
                >
                  <IconComponent />
                  <span className="font-medium">{social.name}</span>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} {t.footer}
          </p>
        </div>
      </footer>
    </div>
  )
}
