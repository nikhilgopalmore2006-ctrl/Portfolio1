import { useEffect, useRef } from 'react'

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = glowRef.current
    const finePointer = window.matchMedia('(pointer: fine)').matches
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!element || !finePointer || reduceMotion) return

    let frame = 0
    const move = (event: PointerEvent) => {
      window.cancelAnimationFrame(frame)
      frame = window.requestAnimationFrame(() => {
        element.style.setProperty('--cursor-x', `${event.clientX}px`)
        element.style.setProperty('--cursor-y', `${event.clientY}px`)
        element.dataset.visible = 'true'
      })
    }
    const leave = () => {
      element.dataset.visible = 'false'
    }

    window.addEventListener('pointermove', move, { passive: true })
    document.documentElement.addEventListener('mouseleave', leave)
    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', move)
      document.documentElement.removeEventListener('mouseleave', leave)
    }
  }, [])

  return <div ref={glowRef} className="cursor-glow" aria-hidden="true" />
}
