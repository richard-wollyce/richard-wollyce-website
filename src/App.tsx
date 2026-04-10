import './App.css'
import { MatrixRain } from './components/MatrixRain.tsx'
import { TopBar } from './components/TopBar.tsx'
import { siteContent } from './content/siteContent.ts'
import { AboutSection } from './sections/AboutSection.tsx'
import { AchievementsSection } from './sections/AchievementsSection.tsx'
import { ContactSection } from './sections/ContactSection.tsx'
import { ExperienceSection } from './sections/ExperienceSection.tsx'
import { HeroSection } from './sections/HeroSection.tsx'
import { ServicesSection } from './sections/ServicesSection.tsx'
import { TechStackSection } from './sections/TechStackSection.tsx'
import { generateQuickWhatsAppUrl } from './utils/whatsapp.ts'

function App() {
  const quickWhatsAppUrl = generateQuickWhatsAppUrl(
    siteContent.contact.whatsappNumber,
    siteContent.contact.quickMessage,
  )

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <MatrixRain />
      <TopBar
        brand={siteContent.brand}
        navItems={siteContent.nav}
        contactHref="#contact"
      />

      <main className="main-shell" id="main-content">
        <HeroSection
          brand={siteContent.brand}
          hero={siteContent.hero}
          serviceCubes={siteContent.services.cubes}
          primaryHref={quickWhatsAppUrl}
        />
        <AboutSection about={siteContent.about} />
        <ServicesSection services={siteContent.services} />
        <AchievementsSection achievements={siteContent.achievements} />
        <ExperienceSection experience={siteContent.experience} />
        <TechStackSection techStack={siteContent.techStack} />
        <ContactSection contact={siteContent.contact} />
      </main>

      <footer className="site-footer">
        <div>
          <p className="footer-eyebrow">{siteContent.footer.eyebrow}</p>
          <p className="footer-note">{siteContent.footer.note}</p>
        </div>
        <div className="footer-links" aria-label="Footer links">
          {siteContent.footer.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
      </footer>

      <a
        className="floating-whatsapp"
        href={quickWhatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Start a WhatsApp conversation with Richard Wollyce"
      >
        WA
      </a>
    </div>
  )
}

export default App
