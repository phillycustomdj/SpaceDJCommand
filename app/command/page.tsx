"use client"

import Link from "next/link"
import { useSounds } from "@/components/sound-provider"


const DJS = [
  {
    id: "adam",
    name: "ADAM",
    title: "The Galactic Wedding Architect",
    residency: "Coruscant Senate District / The Outer Rim",
    origin:
      "Adam first gained notoriety when he was asked by Figrin D'an to spin between sets at the Mos Eisley Cantina. From there he worked his way across the galaxy from Kamino to Mustafar to Kashyyyk. Adam's legend was cemented during a diplomatic summit on Coruscant. What began as a rigid formal reception for the Galactic Senate became a six-hour cross-quadrant rhapsody. Eyewitnesses confirm that Mon Mothma herself maintained flawless rhythm on the outer balcony. Since that night, Adam has served as primary operative for high-stakes celebrations from the Core Worlds to the desert sands of Tatooine.",
    specialties: [
      "Multi-Species Crowd Calibration",
      "Atmospheric Architecture",
    ],
    awards: [
      "3x Galactic Dancefloor Integrity Award",
      "Interstellar Crowd Control Medal",
      "Coruscant Citation for Sonic Diplomacy",
    ],
    transmissionHref: "/listening-room#adam",
  },
  {
    id: "alex",
    name: "ALEX",
    title: "The Pan-Galactic Chaos Agent",
    residency: "Milliways — The Restaurant at the End of the Universe",
    origin:
      "Alex's big break came on the night of the Vegan Meat Scandal at Milliways. When Steve Aoki famously walked out because the main course — a sentient bovine — was too enthusiastic about being eaten, Alex stepped up to the decks. He kept the crowd dancing even as the universe approached heat death.",
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
    transmissionHref: null,
  },
  {
    id: "jack",
    name: "JACK",
    title: "The Retro Space DJ From Knowhere",
    residency: "Knowhere",
    origin:
      "Jack's legend began in the industrial underbelly of Knowhere. Armed with a salvaged dual-cassette starship deck and a crate of 20th-century Terran Awesome Mixes, he spun for miners, Ravagers, and interstellar drifters alike. His defining moment came during a high-stakes standoff when his impromptu Retro Set de-escalated a riot by sheer force of groove. He upgraded from cassette decks to a Zune. He has been the sector's resident sound commander ever since.",
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
    transmissionHref: null,
  },
  {
    id: "fonseca",
    name: "A. FONSECA",
    title: "The Machine-Language Maestro",
    residency: "The Hip Joint",
    origin:
      "Fonseca gained legendary status after a 48-hour set at The Hip Joint, where he prevented a planet-wide logic loop by perfectly beat-matching the rhythm of the club's industrial coolant fans. He remains the only human DJ officially recognized by the Silicon Council as a Designated Device Driver.",
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
    transmissionHref: "/visual-transmissions#fonseca",
  },
  {
    id: "bennie-james",
    name: "BENNIE JAMES",
    title: "The Synth Architect",
    residency: "Off-World Colonies / The Nostromo",
    origin:
      "Bennie's reputation was forged in the neon haze of 2019 Los Angeles before extending to the cold cargo holds of Weyland-Yutani deep-space freighters. His breakthrough came during a corporate off-world launch event where his atmospheric synth set masked a system-wide AI malfunction long enough to prevent total panic. Since then, he has become the preferred selector for industrial colonies and replicant-heavy gatherings.",
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
    transmissionHref: "/listening-room#bennie-james",
  },
  {
    id: "dennis",
    name: "DENNIS KIRKLAND",
    title: "The Zero-G Virtuoso",
    residency: "The Distracted Globe",
    origin:
      "Dennis rose to prominence inside The Distracted Globe, the OASIS's premier zero-gravity nightclub. During a catastrophic server-wide gravity failure — affecting both dancers and equipment — Dennis continued spinning while literally upside down, using haptic-feedback gloves to catch beats mid-air. No avatar left the floor.",
    specialties: [
      "Virtual crowd control (10,000+ simultaneous avatars)",
      "Anti-gravity audio optimization",
      "360-degree immersive energy management",
    ],
    awards: [
      "OASIS All-Sector MVP (Music & Visuals)",
      "The High-Five Citation for Tactical Mixing",
    ],
    transmissionHref: null,
  },
  {
    id: "kid-lightning",
    name: "KID LIGHTNING",
    title: "The Warp-Speed Party Specialist",
    residency: "Quark's Bar, Deep Space 9",
    origin:
      "Kid Lightning earned his reputation during a Dominion-era ceasefire celebration at Quark's. When tensions flared between Starfleet officers and visiting Jem'Hadar envoys, he recalibrated the tempo mid-set, preventing a diplomatic incident through sheer rhythmic authority. His temporary sabbatical — involving a misunderstanding with a shipment of Ketracel-White — has since been resolved. He returned to the decks stronger than ever.",
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
    transmissionHref: null,
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
              id={dj.id}
              onMouseEnter={playHover}
              className="group rounded border border-border bg-card/60 backdrop-blur-sm p-6 transition-all hover:border-primary pulse-border scroll-mt-28"
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

              <div className="mt-4 pt-4 border-t border-border">
                {dj.transmissionHref ? (
                  <Link
                    href={dj.transmissionHref}
                    onMouseEnter={playHover}
                    className="text-xs font-semibold uppercase tracking-widest text-primary glitch-hover hover:underline"
                  >
                    View transmission →
                  </Link>
                ) : (
                  <span className="text-xs uppercase tracking-widest text-muted-foreground/60">
                    Transmission Pending
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
