import { useEffect, useRef } from 'react'

const FONT_SIZE = 18
const FRAME_MS = 70

/** Iterations used to build the still frame, enough for the trails to settle. */
const SETTLE_STEPS = 45

/** Ignore height changes smaller than this — see the resize handler. */
const ADDRESS_BAR_SLOP = 120

/**
 * Devices that get a single still frame instead of the animation.
 *
 * `pointer: coarse` is the load-bearing clause: a phone in landscape is wider
 * than 768px, so width alone would leave it animating on exactly the hardware
 * that cannot afford it. Keep in sync with .matrix-canvas in index.css.
 */
const STILL_QUERY =
  '(prefers-reduced-motion: reduce), (max-width: 768px), (pointer: coarse)'

const LETTERS =
  'アァイィウエオカキクケコサシスセソ' +
  'タチツテトナニヌネノハヒフヘホ' +
  'マミムメモヤユヨラリルレロワヲン' +
  '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
  '@#$%&*+=-'

export default function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // A full-screen repaint every frame is affordable on a desktop GPU and not
    // on a phone, which also throttles once it warms up — so the animation gets
    // worse the longer it runs. Touch devices, narrow viewports and anyone who
    // has asked for reduced motion get one settled frame with the same glyphs
    // and colours.
    const stillQuery = window.matchMedia(STILL_QUERY)

    let drops: number[] = []
    let heads: number[] = []
    let width = 0
    let height = 0

    const resize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight

      const cols = Math.max(1, Math.floor(width / FONT_SIZE))

      drops = Array.from(
        { length: cols },
        () => Math.random() * (height / FONT_SIZE)
      )
      heads = Array.from({ length: cols }, () => 1)
    }

    const draw = () => {
      // fade trail
      ctx.fillStyle = 'rgba(0, 0, 0, 0.06)'
      ctx.fillRect(0, 0, width, height)

      ctx.font = `${FONT_SIZE}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const text = LETTERS[Math.floor(Math.random() * LETTERS.length)]

        const x = i * FONT_SIZE
        const y = drops[i] * FONT_SIZE

        // occasionally promote a new "head"
        if (Math.random() > 0.98) heads[i] = 1

        // brightness system — tuned to the emerald accent (--color-accent)
        if (heads[i] > 0.8) {
          ctx.fillStyle = 'rgba(167, 243, 208, 1)' // bright head
        } else if (heads[i] > 0.4) {
          ctx.fillStyle = 'rgba(52, 211, 153, 0.4)' // mid trail
        } else {
          ctx.fillStyle = 'rgba(52, 211, 153, 0.15)' // fade trail
        }

        ctx.fillText(text, x, y)

        heads[i] *= 0.97

        if (y > height && Math.random() > 0.975) {
          drops[i] = 0
          heads[i] = 1
        }

        drops[i]++
      }
    }

    const settle = () => {
      for (let i = 0; i < SETTLE_STEPS; i++) draw()
    }

    resize()

    let frame = 0
    let resizeTimer: number | undefined

    const stop = () => {
      cancelAnimationFrame(frame)
      frame = 0
    }

    /** (Re)start in whichever mode the media query currently reports. */
    const start = () => {
      stop()

      if (stillQuery.matches) {
        settle()
        return
      }

      // requestAnimationFrame rather than setInterval: it stops on its own when
      // the tab is hidden, where setInterval would keep repainting forever. The
      // accumulator holds the original ~70ms cadence, so the rain falls at the
      // same speed it always did.
      let last = 0

      const loop = (now: number) => {
        frame = requestAnimationFrame(loop)

        if (now - last < FRAME_MS) return

        last = now
        draw()
      }

      frame = requestAnimationFrame(loop)
    }

    start()

    // Rotating a phone, or switching device emulation in devtools, changes the
    // answer without remounting, so the mode has to be re-read rather than
    // captured once.
    const onQueryChange = () => {
      resize()
      start()
    }

    stillQuery.addEventListener('change', onQueryChange)

    // Scrolling a phone hides and reveals the address bar, which fires resize
    // and would otherwise reallocate the canvas mid-scroll. Only a width change
    // — or a height change too large to be browser chrome — is a real layout
    // change worth rebuilding for.
    const onResize = () => {
      window.clearTimeout(resizeTimer)

      resizeTimer = window.setTimeout(() => {
        const heightShift = Math.abs(window.innerHeight - height)
        if (window.innerWidth === width && heightShift < ADDRESS_BAR_SLOP)
          return

        resize()
        start()
      }, 200)
    }

    window.addEventListener('resize', onResize)

    return () => {
      stop()
      window.clearTimeout(resizeTimer)
      window.removeEventListener('resize', onResize)
      stillQuery.removeEventListener('change', onQueryChange)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      // .matrix-canvas carries the blur and the query that removes it; see index.css.
      className="matrix-canvas pointer-events-none fixed inset-0 z-0 opacity-30"
    />
  )
}
