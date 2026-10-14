import { BookOpen, MapPin, Orbit, Sparkles } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'
import { portfolio } from '../data/portfolio'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

type CounterProps = {
  value: number
  suffix: string
}

function AnimatedCounter({ value, suffix }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.8 })
  const reduceMotion = useReducedMotion()
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    if (reduceMotion) {
      setDisplay(value)
      return
    }

    let frame = 0
    const start = performance.now()
    const duration = 1250
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(value * eased))
      if (progress < 1) frame = window.requestAnimationFrame(tick)
    }
    frame = window.requestAnimationFrame(tick)
    return () => window.cancelAnimationFrame(frame)
  }, [inView, reduceMotion, value])

  return (
    <span ref={ref}>
      {String(display).padStart(value < 10 ? 2 : 1, '0')}
      {suffix}
    </span>
  )
}

export function About() {
  return (
    <section id="about" className="section section-anchor about" aria-labelledby="about-title">
      <div className="site-container">
        <Reveal>
          <SectionHeading
            index="01"
            eyebrow="IDENTITY"
            title="A curious mind in constant orbit."
            description="Grounded in fundamentals, driven by consistent practice, and fascinated by the possibilities beyond the obvious."
          />
        </Reveal>

        <div className="about__grid">
          <Reveal className="identity-card" delay={0.08}>
            <div className="identity-card__scanline" aria-hidden="true" />
            <div className="identity-portrait" aria-label="Profile placeholder with Nikhil's initials">
              <div className="identity-portrait__orbit" />
              <div className="identity-portrait__orbit identity-portrait__orbit--two" />
              <span>{portfolio.person.initials}</span>
            </div>
            <div className="identity-card__name">
              <span>PROFILE / 001</span>
              <h3>{portfolio.person.name}</h3>
              <p>{portfolio.person.title}</p>
            </div>
            <div className="identity-card__status">
              <span>
                <MapPin size={14} /> {portfolio.person.location}
              </span>
              <span>
                <i aria-hidden="true" /> Currently learning
              </span>
            </div>
          </Reveal>

          <div className="about__story">
            <Reveal className="glass-panel story-card" delay={0.14}>
              <span className="panel-label">ABOUT ME</span>
              <p className="story-card__lead">{portfolio.person.bio}</p>
              <div className="story-card__goal">
                <Orbit size={19} aria-hidden="true" />
                <div>
                  <strong>Current trajectory</strong>
                  <p>{portfolio.person.goal}</p>
                </div>
              </div>
            </Reveal>

            <Reveal className="education-card" delay={0.2}>
              <div className="education-card__icon">
                <BookOpen size={22} aria-hidden="true" />
              </div>
              <div>
                <span>CURRENT EDUCATION · {portfolio.education.period}</span>
                <h3>{portfolio.education.degree}</h3>
                <p>{portfolio.education.institution}</p>
              </div>
              <div className="education-card__metrics">
                {portfolio.education.details.map((detail) => (
                  <span key={detail}>{detail}</span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal className="stats-grid" delay={0.12}>
          {portfolio.stats.map((stat, index) => (
            <article className="stat-card" key={stat.label}>
              <span className="stat-card__index">0{index + 1}</span>
              <strong>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </strong>
              <p>{stat.label}</p>
            </article>
          ))}
        </Reveal>

        <Reveal className="interests-strip" delay={0.12}>
          <div className="interests-strip__title">
            <Sparkles size={18} aria-hidden="true" />
            <span>OFF THE KEYBOARD</span>
          </div>
          <div className="interests-strip__items">
            {portfolio.interests.map((interest) => (
              <span key={interest}>{interest}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
