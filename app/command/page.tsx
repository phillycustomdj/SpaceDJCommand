"use client"

import { useSounds } from "@/components/sound-provider"


const DJS = [
  {
    name: "ADAM",
    title: "The Galactic Wedding Architect",
    residency: "Coruscant Senate District / The Outer Rim",
    origin:
      "First noticed by Figrin D'an at Mos Eisley Cantina. Rose to prominence at a Galactic Senate diplomatic summit where Mon Mothma herself danced on the outer balcony for six hours straight.",
    specialties: [
      "Multi-Species Crowd Calibration",
      "Atmospheric Architecture",
    ],
    awards: [
      "3x Galactic Dancefloor Integrity Award",
      "Interstellar Crowd Control Medal",
      "Coruscant Citation for Sonic Diplomacy",
    ],
  },
  {
    name: "ALEX",
    title: "The Pan-Galactic Chaos Agent",
    residency: "Milliways — The Restaurant at the End of the Universe",
    origin:
      "Stepped up at the Vegan Meat Scandal at Milliways when Steve Aoki walked out. Kept the crowd dancing as the universe approached heat death.",
    specialties: [
      "Existential crisis management via deep-space disco",
      "Earth lounge to intergalactic house",
      "Sets calibrated to last exactly 42 minutes (or 42 centuries)",
    ],
    awards: [
      "Andromeda Residency Seal",
      "Nebula Groove Citation (Post-Apocalyptic Division)",
      "Order of the Pan Galactic Gargle Blaster",
    ],
  },
  {
    name: "JACK",
    title: "The Retro Space DJ From Knowhere",
    residency: "Knowhere",
    origin:
      "Armed with a salvaged dual-cassette starship deck and 20th-century Terran Awesome Mixes, de-escalated a Ravager riot through sheer force of groove. Upgraded from cassette to Zune.",
    specialties: [
      "Analog nostalgia in a digital galaxy",
      "Ravager crowd control via 70s/80s anthems",
      "Only starship rig powered by a Zune",
    ],
    awards: [
      "Golden Bolt Award (Analog Preservation Division)",
      "Knowhere Ribbon for High-Octane Grooves",
      "Outer Rim Performance Star",
    ],
  },
  {
    name: "A. FONSECA",
    title: "The Machine-Language Maestro",
    residency: "The Hip Joint",
    origin:
      "Prevented a planet-wide logic loop during a 48-hour set by beat-matching the rhythm of the club's industrial coolant fans. Only human DJ recognized by the Silicon Council as a Designated Device Driver.",
    specialties: [
      "High-frequency pulse optimization for synthetic lifeforms",
      "Binary-coded basslines",
      "Dance floors where 30% of guests are made of iron",
    ],
    awards: [
      "5-Time Golden Bolt Award Winner",
      "The 30% Iron Chef Award for Sonic Sustenance",
      "Citation for Outstanding Achievement in the Field of Excellence (C. Montgomery Burns Division)",
    ],
  },
  {
    name: "BENNIE JAMES",
    title: "The Synth Architect",
    residency: "Off-World Colonies / The Nostromo",
    origin:
      "Forged in neon-drenched 2019 Los Angeles. His atmospheric synth set masked a system-wide AI malfunction at a corporate off-world launch event, preventing total panic.",
    specialties: [
      "Neon-drenched atmosphere design",
      "Synthetic remix engineering",
      "Industrial tempo modulation",
    ],
    awards: [
      "Off-World Sound Design Citation",
      "Tyrell Corporation After-Hours Commendation",
      "Deep Freight Sonic Integrity Medal",
    ],
  },
  {
    name: "DENNIS KIRKLAND",
    title: "The Zero-G Virtuoso",
    residency: "The Distracted Globe",
    origin:
      "During a catastrophic gravity failure, continued spinning upside down using haptic-feedback gloves to catch beats mid-air. No avatar left the floor.",
    specialties: [
      "Virtual crowd control (10,000+ simultaneous avatars)",
      "Anti-gravity audio optimization",
      "360-degree immersive energy management",
    ],
    awards: [
      "OASIS All-Sector MVP (Music & Visuals)",
      "The High-Five Citation for Tactical Mixing",
    ],
  },
  {
    name: "KID LIGHTNING",
    title: "The Warp-Speed Party Specialist",
    residency: "Quark's Bar, Deep Space 9",
    origin:
      "Recalibrated the tempo mid-set during a ceasefire celebration to prevent a diplomatic incident between rival factions. His sabbatical involving a misunderstanding with a controlled substance shipment has been resolved.",
    specialties: [
      "Warp-speed energy escalation",
      "Tactical cross-faction crowd blending",
      "Subspace bass stabilization",
    ],
    awards: [
      "Federation Cultural Contribution Medal",
      "Gamma Quadrant Groove Distinction",
      "Starfleet Civilian Service Ribbon",
    ],
  },
]

export default function CommandPage() {
  const { playHover } = useSounds()

  return (
    <div className="relative z-10 min-h-screen px-4 pt-24 pb-20 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <h1 className="font-[family-name:var(--font-display)] text-3xl font-black uppercase tracking-wider text-primary crt-flicker neon-glow-text text-center sm:text-4xl md:text-5xl">
          The Command
        </h1>
        <p className="mt-4 text-center text-sm text-muted-foreground max-w-2xl mx-auto">
          Elite DJ operatives deployed across known and unknown space.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DJS.map((dj) => (
            <article
              key={dj.name}
              onMouseEnter={playHover}
              className="group rounded border border-border bg-card/60 backdrop-blur-sm p-6 transition-all hover:border-primary pulse-border"
            >
              <h2 className="font-[family-name:var(--font-display)] text-lg font-bold uppercase tracking-wider text-primary glitch-hover">
                {dj.name}
              </h2>
              <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-foreground">
                {dj.title}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                {"Residency: "}{dj.residency}
              </p>

              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                {dj.origin}
              </p>

              <div className="mt-4">
                <p className="text-xs font-bold uppercase tracking-wider text-foreground">
                  Specialties
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {dj.specialties.map((s) => (
                    <span
                      key={s}
                      className="rounded-sm border border-border bg-secondary/50 px-2 py-0.5 text-[10px] tracking-wider text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4">
                <p className="text-xs font-bold uppercase tracking-wider text-foreground">
                  Awards
                </p>
                <ul className="mt-2 space-y-1">
                  {dj.awards.map((a) => (
                    <li
                      key={a}
                      className="text-[10px] leading-relaxed text-muted-foreground before:content-['//'] before:text-primary before:mr-1.5"
                    >
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
