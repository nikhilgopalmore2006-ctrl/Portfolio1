import { Award, Check, Code2, GraduationCap, Mic2, Sparkles } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { portfolio, type TimelineItem } from '../data/portfolio'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const timelineIcons: Record<TimelineItem['kind'], LucideIcon> = {
  education: GraduationCap,
  practice: Code2,
  certificate: Award,
  activity: Mic2,
}

export function Experience() {
  return (
    <section id="experience" className="section section-anchor experience" aria-labelledby="experience-title">
      <div className="site-container">
        <Reveal>
          <SectionHeading
            index="04"
            eyebrow="FLIGHT PATH"
            title="The journey is already in motion."
            description="Education, continuous practice, certifications, and formative activities—charted exactly from my current resume."
          />
        </Reveal>

        <div className="experience__grid">
          <div className="timeline" aria-label="Education and learning timeline">
            {portfolio.timeline.map((item, index) => {
              const Icon = timelineIcons[item.kind]
              return (
                <Reveal className="timeline-item" delay={index * 0.06} key={`${item.period}-${item.title}`}>
                  <div className="timeline-item__rail" aria-hidden="true">
                    <span>
                      <Icon size={18} />
                    </span>
                  </div>
                  <article className="timeline-item__card">
                    <span className="timeline-item__period">{item.period}</span>
                    <h3>{item.title}</h3>
                    <p className="timeline-item__organization">{item.organization}</p>
                    <p className="timeline-item__description">{item.description}</p>
                    {item.highlights && (
                      <div className="timeline-item__highlights">
                        {item.highlights.map((highlight) => (
                          <span key={highlight}>
                            <Check size={13} aria-hidden="true" /> {highlight}
                          </span>
                        ))}
                      </div>
                    )}
                  </article>
                </Reveal>
              )
            })}
          </div>

          <aside className="experience__aside" aria-label="Certifications">
            <Reveal className="certificate-panel" delay={0.12}>
              <div className="certificate-panel__header">
                <span className="certificate-panel__icon">
                  <Award size={22} aria-hidden="true" />
                </span>
                <div>
                  <span>VERIFIED FROM RESUME</span>
                  <h3>Certificates & participation</h3>
                </div>
              </div>
              <ol>
                {portfolio.certifications.map((certificate, index) => (
                  <li key={certificate}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <p>{certificate}</p>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal className="trajectory-panel" delay={0.18}>
              <Sparkles size={19} aria-hidden="true" />
              <span>NEXT COORDINATE</span>
              <h3>From learning to building.</h3>
              <p>
                I&apos;m focused on converting foundations into documented projects, stronger problem-solving
                depth, and meaningful collaborative experience.
              </p>
              <a href="#contact">Start a conversation</a>
            </Reveal>
          </aside>
        </div>
      </div>
    </section>
  )
}
