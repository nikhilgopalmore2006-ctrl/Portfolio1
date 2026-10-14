import { Pause, Play, Sparkles } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { portfolio } from '../data/portfolio'

export function CosmicBackground() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [motionEnabled, setMotionEnabled] = useState(false)
  const [videoReady, setVideoReady] = useState(false)
  const [loopFading, setLoopFading] = useState(false)
  const [videoFailed, setVideoFailed] = useState(false)
  const [preferenceChecked, setPreferenceChecked] = useState(false)

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const compactScreen = window.matchMedia('(max-width: 767px)').matches
    const saveData = Boolean(navigator.connection?.saveData)
    setMotionEnabled(!reducedMotion && !compactScreen && !saveData)
    setPreferenceChecked(true)
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video || !motionEnabled) return
    video.play().catch(() => setVideoFailed(true))
  }, [motionEnabled])

  const toggleMotion = () => {
    const video = videoRef.current
    if (motionEnabled && video) {
      video.pause()
      setLoopFading(false)
      setMotionEnabled(false)
      return
    }
    setVideoFailed(false)
    setLoopFading(false)
    setMotionEnabled(true)
  }

  return (
    <>
      <div className="cosmic-background" aria-hidden="true">
        <div
          className="cosmic-background__poster"
          style={{ backgroundImage: `url(${portfolio.media.poster})` }}
        />
        {preferenceChecked && motionEnabled && !videoFailed && (
          <video
            ref={videoRef}
            className={`cosmic-background__video ${videoReady ? 'is-ready' : ''} ${loopFading ? 'is-loop-fading' : ''}`}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster={portfolio.media.poster}
            onCanPlay={() => setVideoReady(true)}
            onTimeUpdate={(event) => {
              const video = event.currentTarget
              const remaining = video.duration - video.currentTime
              if (remaining < 0.85 && !loopFading) setLoopFading(true)
              if (video.currentTime < 0.25 && loopFading) setLoopFading(false)
            }}
            onError={() => setVideoFailed(true)}
          >
            <source src={portfolio.media.backgroundVideoWebm} type="video/webm" />
            <source src={portfolio.media.backgroundVideo} type="video/mp4" />
          </video>
        )}
        <div className="cosmic-background__wash" />
        <div className="cosmic-background__nebula" />
        <div className="starfield starfield--one" />
        <div className="starfield starfield--two" />
        <div className="cosmic-background__grain" />
      </div>

      {preferenceChecked && (
        <button
          type="button"
          className="motion-control"
          onClick={toggleMotion}
          aria-pressed={motionEnabled}
          aria-label={motionEnabled ? 'Pause animated space background' : 'Play animated space background'}
        >
          <span className="motion-control__icon">
            {motionEnabled ? <Pause size={13} /> : videoFailed ? <Sparkles size={13} /> : <Play size={13} />}
          </span>
          <span>{motionEnabled ? 'Motion on' : videoFailed ? 'Static fallback' : 'Motion off'}</span>
        </button>
      )}
    </>
  )
}
