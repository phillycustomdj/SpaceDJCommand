"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react"

interface SoundCtx {
  enabled: boolean
  toggle: () => void
  playHover: () => void
  playClick: () => void
}

const SoundContext = createContext<SoundCtx>({
  enabled: false,
  toggle: () => {},
  playHover: () => {},
  playClick: () => {},
})

export const useSounds = () => useContext(SoundContext)

export function SoundProvider({ children }: { children: ReactNode }) {
  const [enabled, setEnabled] = useState(false)
  const audioCtxRef = useRef<AudioContext | null>(null)
  const humGainRef = useRef<GainNode | null>(null)
  const humSourceRef = useRef<AudioBufferSourceNode | null>(null)
  const humBufferRef = useRef<AudioBuffer | null>(null)
  const readyRef = useRef(false)

  // Initialize audio context and load the WAV buffer (non-blocking)
  const ensureAudio = useCallback(async () => {
    if (readyRef.current && audioCtxRef.current) return audioCtxRef.current

    const ctx = audioCtxRef.current ?? new AudioContext()
    audioCtxRef.current = ctx

    if (ctx.state === "suspended") {
      await ctx.resume()
    }

    if (!humGainRef.current) {
      const gain = ctx.createGain()
      gain.gain.setValueAtTime(0, ctx.currentTime)
      gain.connect(ctx.destination)
      humGainRef.current = gain
    }

    if (!humBufferRef.current) {
      try {
        const res = await fetch("/audio/spacecraft-room-tone.wav")
        const arr = await res.arrayBuffer()
        humBufferRef.current = await ctx.decodeAudioData(arr)
      } catch {
        // WAV not available -- hum will be silent
      }
    }

    readyRef.current = true
    return ctx
  }, [])

  const startHum = useCallback(() => {
    const ctx = audioCtxRef.current
    const buf = humBufferRef.current
    const gain = humGainRef.current
    if (!ctx || !buf || !gain) return

    if (humSourceRef.current) {
      try { humSourceRef.current.stop() } catch {}
    }

    const src = ctx.createBufferSource()
    src.buffer = buf
    src.loop = true
    src.connect(gain)
    src.start()
    humSourceRef.current = src

    gain.gain.setTargetAtTime(0.12, ctx.currentTime, 0.4)
  }, [])

  const stopHum = useCallback(() => {
    const gain = humGainRef.current
    const ctx = audioCtxRef.current
    if (gain && ctx) {
      gain.gain.setTargetAtTime(0, ctx.currentTime, 0.3)
    }
    const src = humSourceRef.current
    if (src) {
      setTimeout(() => {
        try { src.stop() } catch {}
      }, 1500)
      humSourceRef.current = null
    }
  }, [])

  const toggle = useCallback(() => {
    setEnabled((prev) => !prev)
  }, [])

  // React to enabled state changes -- keep audio logic out of setState
  useEffect(() => {
    if (enabled) {
      ensureAudio().then(() => startHum())
    } else {
      stopHum()
    }
  }, [enabled, ensureAudio, startHum, stopHum])

  const playHover = useCallback(() => {
    if (!enabled || !audioCtxRef.current) return
    const ctx = audioCtxRef.current
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.type = "sine"
    osc.frequency.setValueAtTime(300, ctx.currentTime)
    osc.frequency.exponentialRampToValueAtTime(220, ctx.currentTime + 0.05)
    gain.gain.setValueAtTime(0.015, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.06)
    osc.connect(gain)
    gain.connect(ctx.destination)
    osc.start()
    osc.stop(ctx.currentTime + 0.06)
  }, [enabled])

  const playClick = useCallback(() => {
    if (!enabled || !audioCtxRef.current) return
    const ctx = audioCtxRef.current
    const t = ctx.currentTime

    const osc1 = ctx.createOscillator()
    const gain1 = ctx.createGain()
    osc1.type = "sine"
    osc1.frequency.setValueAtTime(250, t)
    osc1.frequency.exponentialRampToValueAtTime(350, t + 0.04)
    gain1.gain.setValueAtTime(0.02, t)
    gain1.gain.exponentialRampToValueAtTime(0.0001, t + 0.06)
    osc1.connect(gain1)
    gain1.connect(ctx.destination)
    osc1.start(t)
    osc1.stop(t + 0.06)

    const osc2 = ctx.createOscillator()
    const gain2 = ctx.createGain()
    osc2.type = "sine"
    osc2.frequency.setValueAtTime(350, t + 0.06)
    osc2.frequency.exponentialRampToValueAtTime(440, t + 0.1)
    gain2.gain.setValueAtTime(0.015, t + 0.06)
    gain2.gain.exponentialRampToValueAtTime(0.0001, t + 0.12)
    osc2.connect(gain2)
    gain2.connect(ctx.destination)
    osc2.start(t + 0.06)
    osc2.stop(t + 0.12)
  }, [enabled])

  useEffect(() => {
    return () => {
      if (humSourceRef.current) {
        try { humSourceRef.current.stop() } catch {}
      }
      if (audioCtxRef.current) {
        try { audioCtxRef.current.close() } catch {}
      }
    }
  }, [])

  return (
    <SoundContext.Provider value={{ enabled, toggle, playHover, playClick }}>
      {children}
    </SoundContext.Provider>
  )
}
