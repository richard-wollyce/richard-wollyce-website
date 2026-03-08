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
  pt: {
    title: "Precisa de ajuda com tecnologia?",
    subtitle: "Confira os serviços abaixo e entre em contato. O resto é comigo.",
    servicesTitle: "Nossos Serviços",
    services: [
      {
        icon: Server,
        title: "Suporte em TI",
        description: "Assistência técnica completa para manter seus sistemas funcionando perfeitamente",
      },
      {
        icon: RefreshCw,
        title: "Atualizações de Software",
        description: "Mantenha suas aplicações e sistemas sempre atualizados e seguros",
      },
      {
        icon: HardDrive,
        title: "Conserto de Hardware",
        description: "Diagnóstico e reparo rápido e eficiente de equipamentos",
      },
      {
        icon: Shield,
        title: "Consultoria em Cibersegurança",
        description: "Proteção avançada contra ameaças e vulnerabilidades cibernéticas",
      },
      {
        icon: Network,
        title: "Redes e Infraestrutura",
        description: "Planejamento e implementação de soluções de rede robustas",
      },
      {
        icon: Terminal,
        title: "Suporte Linux/Windows",
        description: "Resolução de problemas em sistemas Linux e Windows",
      },
      {
        icon: Code,
        title: "Desenvolvimento de Software",
        description: "Soluções de software personalizadas para as necessidades do seu negócio",
      },
    ],
    contactTitle: "Entre em Contato",
    contactSubtitle: "Me diga o que precisa e entrarei em contato em breve",
    formName: "Nome Completo",
    formContact: "Número de Contato",
    formEmail: "E-mail (opcional)",
    formIssue: "Como posso ajudar?",
    formSubmit: "Enviar Mensagem",
    bioTitle: "Muito prazer, eu sou o Richard",
    bio: "Atuante na área há mais de 10 anos, ajudando pessoas e empresas a resolverem problemas de tecnologia com segurança e eficiência. Redes, suporte técnico, desenvolvimento de softwares, proteção de sistemas e ambientes Windows e Linux: se envolve tecnologia, eu posso ajudar.",
    socialTitle: "Conecte-se",
    footer: "Richard Wollyce. Todos os direitos reservados.",
  },
  en: {
    title: "Need help with technology?",
    subtitle: "Take a look at the services below and send me a message. I'll handle the rest.",
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
    contactSubtitle: "Tell me what you need and I'll get back to you soon",
    formName: "Full Name",
    formContact: "Contact Number",
    formEmail: "Email (optional)",
    formIssue: "How can I help you?",
    formSubmit: "Send Message",
    bioTitle: "Nice to meet you, I'm Richard",
    bio: "For more than 10 years, I've been helping people and businesses solve real technology challenges. Networking, security, software development, system support and optimization: if it involves tech, I can help you make it work better.",
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
  const [lang, setLang] = useState<"pt" | "en">("pt")
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    description: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const [animationSpeed, setAnimationSpeed] = useState(60)


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
          contact: "",
          email: "",
          description: "",
        })

        setSubmitMessage({
          type: "success",
          text:
            lang === "pt"
              ? "Mensagem enviada com sucesso! Entraremos em contato em breve."
              : "Message sent successfully! We'll contact you soon.",
        })
      } else {
        throw new Error(data.error || "Failed to send message")
      }
    } catch (error) {
      console.error("[v0] Error submitting form:", error)
      setSubmitMessage({
        type: "error",
        text:
          lang === "pt"
            ? "Erro ao enviar mensagem. Por favor, tente novamente."
            : "Error sending message. Please try again.",
      })
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

  const handleMouseEnter = () => {
    setAnimationSpeed(0)
  }

  const handleMouseLeave = () => {
    setAnimationSpeed(60)
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

  const t = translations[lang]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header with Language Toggle */}
      <header className="border-b border-border/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-foreground">Richard Wollyce</div>
          <div className="flex gap-2">
            <Button
              variant={lang === "pt" ? "default" : "ghost"}
              size="sm"
              onClick={() => setLang("pt")}
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
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance text-foreground">{t.title}</h1>
          <p className="text-xl md:text-2xl text-muted-foreground text-balance">{t.subtitle}</p>
        </div>
      </section>

      <div className="section-divider" />

      {/* Services Section - Infinite Scroll */}
      <section className="py-16 px-4 bg-muted/30 overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">{t.servicesTitle}</h2>
          <div className="relative group">
            {/* Left Navigation Button */}
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/90 hover:bg-background border-2 border-border hover:border-primary/50 rounded-full p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out hover:shadow-[0_0_15px_rgba(250,204,21,0.3)]"
              aria-label="Scroll left"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FF9F40"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>

            {/* Right Navigation Button */}
            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/90 hover:bg-background border-2 border-border hover:border-primary/50 rounded-full p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out hover:shadow-[0_0_15px_rgba(250,204,21,0.3)]"
              aria-label="Scroll right"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FF9F40"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>

            {/* Carousel Container */}
            <div
              ref={carouselRef}
              className="overflow-x-auto scrollbar-hide scroll-smooth"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className="flex gap-6 animate-infinite-scroll"
                style={{
                  animationPlayState: animationSpeed === 0 ? "paused" : "running",
                  transition: "animation-play-state 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                {/* First set of services */}
                {t.services.map((service, index) => {
                  const IconComponent = service.icon
                  return (
                    <Card key={`first-${index}`} className="p-6 card-glow flex-shrink-0 w-80 bg-card border-border">
                      <div className="mb-4">
                        <IconComponent className="h-12 w-12 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">{service.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    </Card>
                  )
                })}
                {/* Duplicate set for seamless loop */}
                {t.services.map((service, index) => {
                  const IconComponent = service.icon
                  return (
                    <Card key={`second-${index}`} className="p-6 card-glow flex-shrink-0 w-80 bg-card border-border">
                      <div className="mb-4">
                        <IconComponent className="h-12 w-12 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">{service.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    </Card>
                  )
                })}
                {t.services.map((service, index) => {
                  const IconComponent = service.icon
                  return (
                    <Card key={`third-${index}`} className="p-6 card-glow flex-shrink-0 w-80 bg-card border-border">
                      <div className="mb-4">
                        <IconComponent className="h-12 w-12 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">{service.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Bio Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-shrink-0">
              <img
                src="/rwpfp.webp"
                alt="Profile"
                className="rounded-lg w-48 h-48 object-cover border-2 border-primary/30"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4 text-foreground">{t.bioTitle}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{t.bio}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Contact Form Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">{t.contactTitle}</h2>
            <p className="text-lg text-muted-foreground">{t.contactSubtitle}</p>
          </div>

          <Card className="p-8 bg-card border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">
                  {t.formName}
                </Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                  className="bg-input border-border text-foreground"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact" className="text-foreground">
                  {t.formContact}
                </Label>
                <Input
                  id="contact"
                  type="tel"
                  required
                  value={formData.contact}
                  onChange={(e) => setFormData((prev) => ({ ...prev, contact: e.target.value }))}
                  className="bg-input border-border text-foreground"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">
                  {t.formEmail}
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                  className="bg-input border-border text-foreground"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description" className="text-foreground">
                  {t.formIssue}
                </Label>
                <Textarea
                  id="description"
                  required
                  rows={5}
                  value={formData.description}
                  onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
                  className="bg-input border-border text-foreground"
                />
              </div>

              <Button type="submit" className="w-full btn-primary-glow" size="lg" disabled={isSubmitting}>
                {isSubmitting ? (lang === "pt" ? "Enviando..." : "Sending...") : t.formSubmit}
              </Button>
            </form>
            {submitMessage && (
              <div
                className={`mt-4 text-center ${submitMessage.type === "success" ? "text-green-500" : "text-red-500"}`}
              >
                {submitMessage.text}
              </div>
            )}
          </Card>
        </div>
      </section>

      <div className="section-divider" />

      {/* Social Links Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-foreground text-center">{t.socialTitle}</h2>
          <div className="flex justify-center gap-6 flex-wrap">
            {socialLinks.map((social) => {
              const IconComponent = social.icon
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-card hover:bg-card hover:border-primary/50 transition-all duration-300 text-foreground"
                  style={{
                    boxShadow: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = "0 0 20px rgba(255, 159, 64, 0.2)" // Updated hover color
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "none"
                  }}
                >
                  <IconComponent className="text-primary" />
                  <span className="font-medium">{social.name}</span>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/5516991597978"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg transition-all duration-300 z-50 hover:scale-110"
        style={{ opacity: 0.7 }}
        onMouseEnter={(e) => {
          e.currentTarget.style.opacity = "1"
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.opacity = "0.7"
        }}
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle className="w-8 h-8 text-white" />
      </a>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 px-4">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>© 2026 {t.footer}</p>
        </div>
      </footer>


    </div>
  )
}
