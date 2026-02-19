"use client"

import { useSounds } from "@/components/sound-provider"


const SLOTS = [
  {
    title: "Fonseca Live Set",
    status: "TRANSMISSION UPLOADING — STAND BY",
  },
  {
    title: "Jack — Corridor Session",
    status: "RECORDING IN PROGRESS",
  },
  {
    title: "Adam — Senate District Residency",
    status: "ARCHIVAL RECOVERY IN PROGRESS",
  },
  {
    title: "Bennie James — Off-World Session",
    status: "SIGNAL DECODING",
  },
  {
    title: "Command Collective — Live from Milliways",
    status: "AWAITING CLEARANCE",
  },
]

export default function VisualTransmissionsPage() {
  const { playHover } = useSounds()

  return (
    <div className="relative z-10 min-h-screen px-4 pt-24 pb-20 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <h1 className="font-[family-name:var(--font-display)] text-3xl font-black uppercase tracking-wider text-primary crt-flicker neon-glow-text text-center sm:text-4xl md:text-5xl">
          Visual Transmissions
        </h1>
        <p className="mt-4 text-center text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Some moments cannot be contained in audio alone. This archive contains
          visual recordings from across the galaxy — live sets, corridor
          sessions, and archival performance footage.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {SLOTS.map((slot) => (
            <div
              key={slot.title}
              onMouseEnter={playHover}
              className="group relative flex aspect-video flex-col items-center justify-center rounded border border-border bg-card/40 backdrop-blur-sm overflow-hidden pulse-border"
            >
              {/* Scanline effect inside the panel */}
              <div
                className="absolute inset-0 pointer-events-none opacity-20"
                style={{
                  background:
                    "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(57,255,20,0.04) 2px, rgba(57,255,20,0.04) 4px)",
                }}
                aria-hidden="true"
              />

              <p className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-wider text-primary glitch-hover relative z-10">
                {slot.title}
              </p>
              <p className="mt-3 text-[10px] uppercase tracking-[0.2em] text-muted-foreground pulse-text blink-cursor relative z-10">
                {slot.status}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
