"use client"

import Link from "next/link"
import { useSounds } from "./sound-provider"

export function HeroSection() {
  const { playHover, playClick } = useSounds()

  return (
    <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <div className="max-w-4xl">
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-black uppercase tracking-wider text-primary crt-flicker neon-glow-text sm:text-5xl md:text-7xl lg:text-8xl">
          Space DJ Command
        </h1>

        <p className="mt-4 font-[family-name:var(--font-display)] text-sm font-semibold uppercase tracking-[0.3em] text-foreground sm:text-base md:text-lg">
          The Best DJs in the Galaxy
        </p>

        <div className="mt-8 max-w-2xl mx-auto space-y-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
          <p>
            {"From Earth to the Delta Quadrant. From Tatooine to Coruscant. From the OASIS to the Off-World Colonies."}
          </p>
          <p className="text-foreground">
            Elite musical command across known and unknown space.
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/command"
            onMouseEnter={playHover}
            onClick={(e) => {
              playClick()
              // Do NOT call e.preventDefault() -- let Next.js handle routing
            }}
            className="inline-block neon-glow rounded border border-primary bg-primary/10 px-6 py-3 text-xs font-bold uppercase tracking-widest text-primary transition-all hover:bg-primary hover:text-primary-foreground sm:text-sm"
          >
            Meet the Command
          </Link>
          <Link
            href="/listening-room"
            onMouseEnter={playHover}
            onClick={() => playClick()}
            className="inline-block rounded border border-border px-6 py-3 text-xs font-bold uppercase tracking-widest text-foreground transition-all hover:border-primary hover:text-primary sm:text-sm"
          >
            Enter the Listening Room
          </Link>
          <Link
            href="/book"
            onMouseEnter={playHover}
            onClick={() => playClick()}
            className="inline-block rounded border border-border px-6 py-3 text-xs font-bold uppercase tracking-widest text-foreground transition-all hover:border-primary hover:text-primary sm:text-sm"
          >
            Request Deployment
          </Link>
        </div>

        <p className="mt-8 text-xs tracking-wider text-muted-foreground italic sm:text-sm">
          Interstellar residencies. Multi-species calibration. Zero-gravity dance floors.
        </p>
      </div>
    </section>
  )
}
