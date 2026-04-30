import { useEffect, useRef } from 'react'

export default function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const letters =
      'アァイィウエオカキクケコサシスセソ' +
      'タチツテトナニヌネノハヒフヘホ' +
      'マミムメモヤユヨラリルレロワヲン' +
      '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
      '@#$%&*+=-'

    const fontSize = 18

    let drops: number[] = []
    let headOpacity: number[] = []

    function resize() {
      if (!canvas) return

      canvas.width = window.innerWidth
      canvas.height = window.innerHeight

      const cols = Math.max(1, Math.floor(canvas.width / fontSize))

      drops = Array.from(
        { length: cols },
        () => Math.random() * (canvas.height / fontSize)
      )

      headOpacity = Array.from({ length: cols }, () => 1)
    }

    function draw() {
      if (!ctx || !canvas) return

      // fade trail
      ctx.fillStyle = 'rgba(0, 0, 0, 0.06)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)]

        const x = i * fontSize
        const y = drops[i] * fontSize

        // occasionally promote a new "head"
        const isNewHead = Math.random() > 0.98
        if (isNewHead) {
          headOpacity[i] = 1
        }

        // brightness system
        if (headOpacity[i] > 0.8) {
          ctx.fillStyle = 'rgba(180, 255, 200, 1)' // bright head
        } else if (headOpacity[i] > 0.4) {
          ctx.fillStyle = 'rgba(0, 255, 120, 0.4)' // mid trail
        } else {
          ctx.fillStyle = 'rgba(0, 255, 120, 0.15)' // fade trail
        }

        ctx.fillText(text, x, y)

        // fade head over time
        headOpacity[i] *= 0.97

        // reset column when off-screen
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
          headOpacity[i] = 1
        }

        drops[i]++
      }
    }

    resize()
    window.addEventListener('resize', resize)

    const interval = setInterval(draw, 70)

    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.3,
        filter: 'blur(0.6px)',
      }}
    />
  )
}
