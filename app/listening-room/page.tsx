"use client"

import Link from "next/link"
import { useSounds } from "@/components/sound-provider"


const ADAM_PLAYLISTS = [
  {
    title: "Space Party (Dance Mix)",
    embedId: "6dojxkNkZ99HkgusQ5CCkI",
  },
  {
    title: "Pan Galactic Gargle Blaster (Cocktail Hour)",
    embedId: "3NQS80mf84kflxm6APw5MW",
  },
  {
    title: "Space! (Concept Journey Mix)",
    embedId: "7Et9tUrSLstueiMAluW7Cf",
  },
]

const BENNIE_PLAYLISTS = [
  {
    title: "Intergalactic",
    embedId: "66PWQbWblsry1w8VC9Ze9G",
  },
]

const PENDING_DJS = [
  "A. Fonseca",
  "Alex",
  "Jack",
  "Dennis Kirkland",
  "Kid Lightning",
]

export default function ListeningRoomPage() {
  const { playHover } = useSounds()

  return (
    <div className="relative z-10 min-h-screen px-4 pt-24 pb-20 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <h1 className="font-[family-name:var(--font-display)] text-3xl font-black uppercase tracking-wider text-primary crt-flicker neon-glow-text text-center sm:text-4xl md:text-5xl">
          The Listening Room
        </h1>
        <p className="mt-4 text-center text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Welcome to the Command Archive. Official transmissions from across the
          galaxy — recorded residencies, long-form mixes, and curated sonic
          journeys from each member of Space DJ Command.
        </p>

        {/* ADAM */}
        <section id="adam" className="mt-14 scroll-mt-28">
          <h2
            onMouseEnter={playHover}
            className="font-[family-name:var(--font-display)] text-xl font-bold uppercase tracking-wider text-primary glitch-hover"
          >
            <Link href="/command#adam" className="hover:underline">
              ADAM
            </Link>
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ADAM_PLAYLISTS.map((pl) => (
              <div
                key={pl.embedId}
                className="rounded border border-border bg-card/60 backdrop-blur-sm p-4 pulse-border"
              >
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-foreground">
                  {pl.title}
                </p>
                <iframe
                  title={pl.title}
                  src={`https://open.spotify.com/embed/playlist/${pl.embedId}?utm_source=generator&theme=0`}
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  className="rounded"
                />
              </div>
            ))}
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded border border-border bg-card/60 backdrop-blur-sm p-4 pulse-border">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-foreground">
                The Future (Live from the past!)
              </p>
              <iframe
                title="The Future (Live from the past!)"
                src="https://www.mixcloud.com/widget/iframe/?feed=https%3A%2F%2Fwww.mixcloud.com%2Fmennu%2Fthe-mennu-method-the-future%2F&hide_cover=1&mini=1&light=1"
                width="100%"
                height="120"
                frameBorder="0"
                allow="autoplay"
                loading="lazy"
                className="rounded"
              />
            </div>
          </div>
        </section>

        {/* BENNIE JAMES */}
        <section id="bennie-james" className="mt-14 scroll-mt-28">
          <h2
            onMouseEnter={playHover}
            className="font-[family-name:var(--font-display)] text-xl font-bold uppercase tracking-wider text-primary glitch-hover"
          >
            <Link href="/command#bennie-james" className="hover:underline">
              BENNIE JAMES
            </Link>
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {BENNIE_PLAYLISTS.map((pl) => (
              <div
                key={pl.embedId}
                className="rounded border border-border bg-card/60 backdrop-blur-sm p-4 pulse-border"
              >
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-foreground">
                  {pl.title}
                </p>
                <iframe
                  title={pl.title}
                  src={`https://open.spotify.com/embed/playlist/${pl.embedId}?utm_source=generator&theme=0`}
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  className="rounded"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Pending DJs */}
        <section className="mt-14">
          <h2 className="font-[family-name:var(--font-display)] text-lg font-bold uppercase tracking-wider text-foreground">
            Incoming Transmissions
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PENDING_DJS.map((name) => (
              <div
                key={name}
                className="flex flex-col items-center justify-center rounded border border-border bg-card/40 backdrop-blur-sm p-8 text-center pulse-border"
              >
                <p
                  onMouseEnter={playHover}
                  className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-wider text-primary glitch-hover"
                >
                  {name}
                </p>
                <p className="mt-3 text-xs uppercase tracking-widest text-muted-foreground pulse-text blink-cursor">
                  TRANSMISSION INCOMING — MIX PENDING
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
