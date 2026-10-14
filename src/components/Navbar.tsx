import { Download, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { portfolio } from '../data/portfolio'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = portfolio.navigation.map((item) => item.href.slice(1))
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element))

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target.id) setActiveSection(visible.target.id)
      },
      { rootMargin: '-38% 0px -48% 0px', threshold: [0, 0.2, 0.5, 0.8] },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen])

  const handleNavigate = () => setMenuOpen(false)

  return (
    <header className={`nav-shell ${scrolled ? 'is-scrolled' : ''}`}>
      <nav className="navbar" aria-label="Primary navigation">
        <a className="brand" href="#home" onClick={handleNavigate} aria-label="Nikhil More — Home">
          <span className="brand__mark" aria-hidden="true">
            <span>{portfolio.person.initials}</span>
          </span>
          <span className="brand__wordmark">
            <strong>NIKHIL</strong>
            <small>MORE</small>
          </span>
        </a>

        <div className="nav-links" aria-label="Page sections">
          {portfolio.navigation.map((item) => {
            const id = item.href.slice(1)
            const isActive = activeSection === id
            return (
              <a
                key={item.href}
                href={item.href}
                className={isActive ? 'is-active' : ''}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
              </a>
            )
          })}
        </div>

        <a className="nav-resume" href={portfolio.links.resume} download>
          <Download size={15} aria-hidden="true" />
          Resume
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <div id="mobile-navigation" className={`mobile-nav ${menuOpen ? 'is-open' : ''}`}>
        <div className="mobile-nav__inner">
          <p>Navigate the universe</p>
          {portfolio.navigation.map((item, index) => {
            const id = item.href.slice(1)
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavigate}
                className={activeSection === id ? 'is-active' : ''}
              >
                <span>0{index + 1}</span>
                {item.label}
              </a>
            )
          })}
          <a className="button button--primary mobile-nav__resume" href={portfolio.links.resume} download>
            <Download size={17} /> Download resume
          </a>
        </div>
      </div>
    </header>
  )
}
