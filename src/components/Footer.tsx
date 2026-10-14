import { ArrowUp, Download, Mail, Orbit } from 'lucide-react'
import { portfolio } from '../data/portfolio'

export function Footer() {
  return (
    <footer className="footer">
      <div className="site-container">
        <div className="footer__cta">
          <div>
            <span>END OF TRANSMISSION / BEGINNING OF POSSIBILITY</span>
            <h2>Keep exploring. Keep building.</h2>
          </div>
          <a className="button button--ghost" href="#home">
            Back to launch <ArrowUp size={17} aria-hidden="true" />
          </a>
        </div>

        <div className="footer__main">
          <a className="footer__brand" href="#home" aria-label="Back to home">
            <span>{portfolio.person.initials}</span>
            <div>
              <strong>{portfolio.person.name}</strong>
              <small>{portfolio.person.title}</small>
            </div>
          </a>

          <div className="footer__links" aria-label="Footer links">
            <a href={portfolio.links.email}><Mail size={15} /> Email</a>
            <a href={portfolio.links.resume} download><Download size={15} /> Resume</a>
            <a href="#projects"><Orbit size={15} /> Projects</a>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} {portfolio.person.name}. Built with curiosity and code.</p>
          <a href={portfolio.media.videoCredit.url} target="_blank" rel="noreferrer">
            {portfolio.media.videoCredit.label}
          </a>
        </div>
      </div>
    </footer>
  )
}
