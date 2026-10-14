import { BrainCircuit, Braces, Code2, ShieldCheck, TerminalSquare } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { portfolio, type SkillGroup } from '../data/portfolio'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const icons: Record<SkillGroup['icon'], LucideIcon> = {
  code: Code2,
  braces: Braces,
  database: TerminalSquare,
  brain: BrainCircuit,
  terminal: TerminalSquare,
}

export function Skills() {
  return (
    <section id="skills" className="section section-anchor skills" aria-labelledby="skills-title">
      <div className="site-container">
        <Reveal>
          <SectionHeading
            index="02"
            eyebrow="TOOLKIT"
            title="Foundations for the next frontier."
            description="A resume-verified map of the languages, concepts, and tools currently in my learning orbit."
          />
        </Reveal>

        <Reveal className="skills-note" delay={0.08}>
          <ShieldCheck size={18} aria-hidden="true" />
          <p>
            <strong>Signal integrity:</strong> no inflated percentages or invented expertise—just the
            technologies and foundations I am actively building.
          </p>
        </Reveal>

        <div className="skills-grid">
          {portfolio.skills.map((group, index) => {
            const Icon = icons[group.icon]
            return (
              <Reveal className="skill-card" delay={index * 0.08} key={group.title}>
                <div className="skill-card__top">
                  <span className="skill-card__number">0{index + 1}</span>
                  <span className="skill-card__icon">
                    <Icon size={23} aria-hidden="true" />
                  </span>
                </div>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
                <div className="skill-card__tags">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
                <span className="skill-card__beam" aria-hidden="true" />
              </Reveal>
            )
          })}
        </div>

        <Reveal className="practice-band" delay={0.12}>
          <div>
            <span className="practice-band__eyebrow">ACTIVE PRACTICE NETWORK</span>
            <h3>Consistency across four problem-solving platforms.</h3>
          </div>
          <div className="practice-band__platforms" aria-label="Coding practice platforms">
            {['HackerRank', 'LeetCode', 'CodeChef', 'GeeksforGeeks'].map((platform, index) => (
              <span key={platform}>
                <i>{String(index + 1).padStart(2, '0')}</i>
                {platform}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
