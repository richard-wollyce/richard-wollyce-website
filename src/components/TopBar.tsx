import type { NavItem } from '../types/content.ts'

type TopBarProps = {
  brand: string
  navItems: NavItem[]
  contactHref: `#${string}`
}

export function TopBar({ brand, navItems, contactHref }: TopBarProps) {
  return (
    <header className="top-bar">
      <a className="brand-lockup" href="#hero" aria-label="Jump to hero">
        <span className="brand-mark">[]</span>
        <span>{brand}</span>
      </a>

      <nav className="top-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="button-secondary top-bar-cta" href={contactHref}>
        CONTACT
      </a>
    </header>
  )
}
