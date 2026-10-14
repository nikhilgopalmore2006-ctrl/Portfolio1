import {
  ArrowDown,
  ArrowRight,
  Code2,
  Download,
  GraduationCap,
  MapPin,
  Radio,
  Sparkles,
} from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { portfolio } from '../data/portfolio'

const practicePlatforms = ['HackerRank', 'LeetCode', 'CodeChef', 'GeeksforGeeks']

export function Hero() {
  const reduceMotion = useReducedMotion()
  const enter = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 24 },
    animate: reduceMotion ? undefined : { opacity: 1, y: 0 },
    transition: { duration: 0.78, delay, ease: [0.22, 1, 0.36, 1] as const },
  })

  return (
    <section id="home" className="hero hero--editorial section-anchor" aria-labelledby="hero-title">
      <div className="hero__shell site-container">
        <div className="hero__panel">
          <div className="hero__panel-aura" aria-hidden="true" />

          <div className="hero__grid">
            <div className="hero__content">
              <motion.div className="signal-pill" {...enter(0.1)}>
                <span className="signal-pill__dot" aria-hidden="true" />
                Hello, I&apos;m
              </motion.div>

              <motion.p className="hero__name" {...enter(0.16)}>
                {portfolio.person.name}
              </motion.p>

              <motion.h1 id="hero-title" {...enter(0.24)}>
                Curious mind.{' '}
                <br />
                Logic in{' '}
                <br />
                <span>motion.</span>
              </motion.h1>

              <motion.p className="hero__role" {...enter(0.32)}>
                {portfolio.person.title}
                <span aria-hidden="true">/</span>
                <strong>{portfolio.person.focus}</strong>
              </motion.p>

              <motion.p className="hero__intro" {...enter(0.4)}>
                Building a strong engineering foundation through code, structured problem solving, and
                the curiosity to keep asking how things work.
              </motion.p>

              <motion.div className="hero__actions" {...enter(0.48)}>
                <a className="button button--primary" href="#skills">
                  Explore my toolkit <ArrowRight size={18} aria-hidden="true" />
                </a>
                <a className="button button--ghost" href="#contact">
                  Let&apos;s connect <ArrowRight size={17} aria-hidden="true" />
                </a>
              </motion.div>

              <motion.div className="hero__practice" {...enter(0.54)}>
                <span className="hero__practice-label">PRACTICE NETWORK</span>
                <div>
                  {practicePlatforms.map((platform) => (
                    <span key={platform}>{platform}</span>
                  ))}
                </div>
              </motion.div>

              <motion.div className="hero__quick-meta" {...enter(0.6)}>
                <span>
                  <MapPin size={14} aria-hidden="true" /> {portfolio.person.location}
                </span>
                <a href={portfolio.links.resume} download>
                  <Download size={14} aria-hidden="true" /> Resume PDF
                </a>
              </motion.div>
            </div>

            <motion.div
              className="hero-orbit-wrap"
              initial={reduceMotion ? false : { opacity: 0, scale: 0.9 }}
              animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              aria-hidden="true"
            >
              <div className="hero-orbit-glow" />
              <div className="hero-orbit">
                <div className="hero-orbit__axis hero-orbit__axis--one">
                  <span className="orbit-node orbit-node--cyan" />
                </div>
                <div className="hero-orbit__axis hero-orbit__axis--two">
                  <span className="orbit-node orbit-node--violet" />
                </div>
                <div className="hero-orbit__axis hero-orbit__axis--three">
                  <span className="orbit-node orbit-node--white" />
                </div>
                <div className="hero-orbit__core">
                  <span className="hero-orbit__halo" />
                  <small>ENGINEERING</small>
                  <strong>{portfolio.person.initials}</strong>
                  <span>B.TECH / 2025</span>
                </div>
                <span className="orbit-label orbit-label--c">C</span>
                <span className="orbit-label orbit-label--java">JAVA</span>
                <span className="orbit-label orbit-label--python">PY</span>
                <span className="orbit-label orbit-label--sql">SQL</span>
              </div>

              <div className="telemetry-card telemetry-card--top">
                <span>ACTIVE MISSION</span>
                <strong>Strengthen the fundamentals</strong>
              </div>
              <div className="telemetry-card telemetry-card--bottom">
                <i />
                <span>LEARNING SIGNAL</span>
                <strong>ONLINE</strong>
              </div>

              <div className="journey-note">
                <div className="journey-note__bar">
                  <span><i /><i /><i /></span>
                  trajectory.java
                  <Code2 size={13} />
                </div>
                <code>
                  <span><b>final String</b> degree = <em>&quot;B.Tech&quot;</em>;</span>
                  <span><b>final String</b> focus = <em>&quot;DSA&quot;</em>;</span>
                  <span><b>String</b> status = <em>&quot;learning&quot;</em>;</span>
                </code>
              </div>
            </motion.div>
          </div>

          <div className="hero__panel-footer" aria-label="Current portfolio highlights">
            <span><GraduationCap size={16} /> B.TECH · RCPIT</span>
            <span><Code2 size={16} /> DSA · PROGRAMMING · LOGIC</span>
            <span><Sparkles size={16} /> DRIVEN BY CURIOSITY</span>
          </div>
        </div>

        <div className="hero__under">
          <span><Radio size={13} /> 20S UNIVERSE LOOP · SOUND OFF</span>
          <a href="#about">
            A little more about me <ArrowDown size={14} />
          </a>
        </div>
      </div>
    </section>
  )
}
