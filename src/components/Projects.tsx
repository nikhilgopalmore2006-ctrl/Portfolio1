import type { CSSProperties } from 'react'
import { ArrowUpRight, Github, Info, RadioTower } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { portfolio, type Project } from '../data/portfolio'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

function ProjectVisual({ type, title }: { type: Project['visual']; title: string }) {
  return (
    <div className={`project-visual project-visual--${type}`} role="img" aria-label={`${title} abstract project thumbnail`}>
      <div className="project-visual__grid" aria-hidden="true" />
      {type === 'terminal' && (
        <div className="mini-terminal" aria-hidden="true">
          <div className="mini-terminal__bar">
            <i />
            <i />
            <i />
            <span>practice.py</span>
          </div>
          <code>
            <span><b>def</b> solve(array):</span>
            <span>&nbsp;&nbsp;array.sort()</span>
            <span>&nbsp;&nbsp;<b>return</b> array</span>
            <span className="mini-terminal__cursor">_</span>
          </code>
        </div>
      )}
      {type === 'nodes' && (
        <div className="node-visual" aria-hidden="true">
          {[8, 3, 12, 5, 9, 14].map((value, index) => (
            <span key={value} style={{ '--node-index': index } as CSSProperties}>
              {value}
            </span>
          ))}
          <i className="node-visual__scan" />
        </div>
      )}
      {type === 'orbit' && (
        <div className="project-orbit" aria-hidden="true">
          <span className="project-orbit__ring project-orbit__ring--one" />
          <span className="project-orbit__ring project-orbit__ring--two" />
          <span className="project-orbit__core">AI</span>
          <i className="project-orbit__dot project-orbit__dot--one" />
          <i className="project-orbit__dot project-orbit__dot--two" />
        </div>
      )}
      <div className="project-visual__label" aria-hidden="true">
        <RadioTower size={13} />
        VISUAL SIGNAL / {type.toUpperCase()}
      </div>
    </div>
  )
}

function ProjectLink({ href, kind }: { href: string; kind: 'github' | 'live' }) {
  const label = kind === 'github' ? 'Repository' : 'Live preview'
  const Icon = kind === 'github' ? Github : ArrowUpRight

  if (!href) {
    return (
      <span className="project-link is-disabled" aria-disabled="true" title={`Add ${label.toLowerCase()} URL in src/data/portfolio.ts`}>
        <Icon size={16} aria-hidden="true" />
        {kind === 'github' ? 'Repo pending' : 'Demo pending'}
      </span>
    )
  }

  return (
    <a className="project-link" href={href} target="_blank" rel="noreferrer">
      <Icon size={16} aria-hidden="true" />
      {label}
    </a>
  )
}

export function Projects() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="projects" className="section section-anchor projects" aria-labelledby="projects-title">
      <div className="site-container">
        <Reveal>
          <SectionHeading
            index="03"
            eyebrow="MISSION LOG"
            title="Practice today. Products tomorrow."
            description="A transparent view of current coding practice and concept directions—without presenting ideas as completed work."
          />
        </Reveal>

        <Reveal className="project-disclosure" delay={0.08}>
          <Info size={17} aria-hidden="true" />
          <p>
            My resume does not yet list completed project case studies. The first card reflects an ongoing
            practice portfolio; cards marked <strong>Concept Project</strong> are ready-to-build ideas.
          </p>
        </Reveal>

        <div className="projects-grid">
          {portfolio.projects.map((project, index) => (
            <Reveal
              className={`project-card-wrap ${project.featured ? 'project-card-wrap--featured' : ''}`}
              delay={index * 0.08}
              key={project.title}
            >
              <motion.article
                className="project-card"
                whileHover={reduceMotion ? undefined : { y: -8 }}
                transition={{ duration: 0.28, ease: 'easeOut' }}
              >
                <ProjectVisual type={project.visual} title={project.title} />
                <div className="project-card__content">
                  <div className="project-card__eyebrow">
                    <span>{project.eyebrow}</span>
                    {project.featured && <b>FEATURED</b>}
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-card__stack" aria-label="Project topics and technologies">
                    {project.stack.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                  <div className="project-card__links">
                    <ProjectLink href={project.github} kind="github" />
                    <ProjectLink href={project.live} kind="live" />
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
