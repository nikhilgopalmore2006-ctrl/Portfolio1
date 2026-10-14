import {
  AlertCircle,
  CheckCircle2,
  Copy,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Send,
  ShieldCheck,
} from 'lucide-react'
import { type FormEvent, useState } from 'react'
import { portfolio } from '../data/portfolio'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

type FormFields = {
  name: string
  email: string
  subject: string
  message: string
  company: string
}

type FieldErrors = Partial<Record<keyof Omit<FormFields, 'company'>, string>>
type SubmitState = 'idle' | 'loading' | 'success' | 'error'

const initialFields: FormFields = {
  name: '',
  email: '',
  subject: '',
  message: '',
  company: '',
}

function validate(fields: FormFields): FieldErrors {
  const errors: FieldErrors = {}
  if (fields.name.trim().length < 2) errors.name = 'Please enter at least 2 characters.'
  if (!/^\S+@\S+\.\S+$/.test(fields.email.trim())) errors.email = 'Enter a valid email address.'
  if (fields.subject.trim().length < 3) errors.subject = 'Please add a short subject.'
  if (fields.message.trim().length < 10) errors.message = 'Please write at least 10 characters.'
  return errors
}

function SocialLink({
  href,
  label,
  icon: Icon,
}: {
  href: string
  label: string
  icon: typeof Github
}) {
  if (!href) {
    return (
      <span className="social-contact is-disabled" aria-disabled="true" title={`Add ${label} URL in src/data/portfolio.ts`}>
        <Icon size={19} aria-hidden="true" />
        <span>
          <strong>{label}</strong>
          <small>Profile URL not supplied</small>
        </span>
      </span>
    )
  }

  return (
    <a className="social-contact" href={href} target="_blank" rel="noreferrer">
      <Icon size={19} aria-hidden="true" />
      <span>
        <strong>{label}</strong>
        <small>Open profile</small>
      </span>
      <ExternalLink size={14} aria-hidden="true" />
    </a>
  )
}

export function Contact() {
  const [fields, setFields] = useState<FormFields>(initialFields)
  const [errors, setErrors] = useState<FieldErrors>({})
  const [submitState, setSubmitState] = useState<SubmitState>('idle')
  const [feedback, setFeedback] = useState('')
  const [copied, setCopied] = useState(false)

  const updateField = (field: keyof FormFields, value: string) => {
    setFields((current) => ({ ...current, [field]: value }))
    if (field !== 'company' && errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }))
    }
    if (submitState !== 'idle') {
      setSubmitState('idle')
      setFeedback('')
    }
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (fields.company) {
      setSubmitState('success')
      setFeedback('Thanks. Your message has been prepared.')
      setFields(initialFields)
      return
    }

    const nextErrors = validate(fields)
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      setSubmitState('error')
      setFeedback('Please review the highlighted fields.')
      const firstError = Object.keys(nextErrors)[0]
      window.requestAnimationFrame(() => document.getElementById(`contact-${firstError}`)?.focus())
      return
    }

    setErrors({})
    setSubmitState('loading')
    setFeedback('Preparing a secure email draft…')

    await new Promise((resolve) => window.setTimeout(resolve, 450))

    try {
      const subject = encodeURIComponent(`[Portfolio] ${fields.subject.trim()}`)
      const body = encodeURIComponent(
        `Hello Nikhil,\n\n${fields.message.trim()}\n\nFrom: ${fields.name.trim()}\nReply to: ${fields.email.trim()}`,
      )
      setSubmitState('success')
      setFeedback('Email draft prepared. Your email app should open now; the message has not been sent automatically.')
      window.location.href = `mailto:${portfolio.person.email}?subject=${subject}&body=${body}`
    } catch {
      setSubmitState('error')
      setFeedback(`Could not open your email app. Please email ${portfolio.person.email} directly.`)
    }
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(portfolio.person.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = portfolio.links.email
    }
  }

  return (
    <section id="contact" className="section section-anchor contact" aria-labelledby="contact-title">
      <div className="contact__halo" aria-hidden="true" />
      <div className="site-container">
        <Reveal>
          <SectionHeading
            index="05"
            eyebrow="OPEN CHANNEL"
            title="Let’s create the next signal."
            description="Have an opportunity, a project idea, or a learning challenge? Send a transmission."
          />
        </Reveal>

        <div className="contact__grid">
          <Reveal className="contact-console" delay={0.08}>
            <div className="contact-console__topline">
              <span>
                <i aria-hidden="true" /> CHANNEL STATUS: READY
              </span>
              <small>ENCRYPTION / TLS</small>
            </div>

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="contact-name">Your name</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Jane Doe"
                    value={fields.name}
                    onChange={(event) => updateField('name', event.target.value)}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'contact-name-error' : undefined}
                  />
                  {errors.name && <span id="contact-name-error" className="field-error">{errors.name}</span>}
                </div>
                <div className="form-field">
                  <label htmlFor="contact-email">Email address</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    inputMode="email"
                    placeholder="jane@example.com"
                    value={fields.email}
                    onChange={(event) => updateField('email', event.target.value)}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'contact-email-error' : undefined}
                  />
                  {errors.email && <span id="contact-email-error" className="field-error">{errors.email}</span>}
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="contact-subject">Subject</label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  placeholder="Opportunity, collaboration, or hello"
                  value={fields.subject}
                  onChange={(event) => updateField('subject', event.target.value)}
                  aria-invalid={Boolean(errors.subject)}
                  aria-describedby={errors.subject ? 'contact-subject-error' : undefined}
                />
                {errors.subject && <span id="contact-subject-error" className="field-error">{errors.subject}</span>}
              </div>

              <div className="form-field">
                <div className="form-field__label-row">
                  <label htmlFor="contact-message">Message</label>
                  <span>{fields.message.length}/1200</span>
                </div>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={6}
                  maxLength={1200}
                  placeholder="Tell me what you have in mind…"
                  value={fields.message}
                  onChange={(event) => updateField('message', event.target.value)}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'contact-message-error' : undefined}
                />
                {errors.message && <span id="contact-message-error" className="field-error">{errors.message}</span>}
              </div>

              <div className="honeypot" aria-hidden="true">
                <label htmlFor="contact-company">Company website</label>
                <input
                  id="contact-company"
                  name="company"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={fields.company}
                  onChange={(event) => updateField('company', event.target.value)}
                />
              </div>

              <div className="form-submit-row">
                <button className="button button--primary" type="submit" disabled={submitState === 'loading'}>
                  {submitState === 'loading' ? (
                    <><span className="button-spinner" aria-hidden="true" /> Preparing…</>
                  ) : (
                    <>Prepare email <Send size={17} aria-hidden="true" /></>
                  )}
                </button>
                <p>
                  <ShieldCheck size={14} aria-hidden="true" /> Opens your email app. Nothing is silently uploaded.
                </p>
              </div>

              {feedback && (
                <div className={`form-feedback form-feedback--${submitState}`} role="status" aria-live="polite">
                  {submitState === 'success' ? <CheckCircle2 size={17} /> : submitState === 'error' ? <AlertCircle size={17} /> : null}
                  <span>{feedback}</span>
                </div>
              )}
            </form>
          </Reveal>

          <aside className="contact__aside">
            <Reveal className="contact-card" delay={0.14}>
              <span className="panel-label">DIRECT FREQUENCY</span>
              <h3>Prefer a direct route?</h3>
              <p>Reach me by email. I&apos;ll respond as soon as I can.</p>

              <a className="contact-detail" href={portfolio.links.email}>
                <span><Mail size={19} aria-hidden="true" /></span>
                <div>
                  <small>EMAIL</small>
                  <strong>{portfolio.person.email}</strong>
                </div>
              </a>
              <button className="copy-email" type="button" onClick={copyEmail}>
                <Copy size={14} aria-hidden="true" /> {copied ? 'Email copied' : 'Copy email address'}
              </button>

              <div className="contact-detail contact-detail--static">
                <span><MapPin size={19} aria-hidden="true" /></span>
                <div>
                  <small>BASE</small>
                  <strong>{portfolio.person.location}</strong>
                </div>
              </div>
            </Reveal>

            <Reveal className="social-stack" delay={0.2}>
              <SocialLink href={portfolio.links.github} label="GitHub" icon={Github} />
              <SocialLink href={portfolio.links.linkedin} label="LinkedIn" icon={Linkedin} />
            </Reveal>
          </aside>
        </div>
      </div>
    </section>
  )
}
