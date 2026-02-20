"use client"

import { useState } from "react"
import { useSounds } from "./sound-provider"

const EVENT_TYPES = [
  "Wedding",
  "Corporate Event",
  "Private Party",
  "Galactic Summit",
  "Other",
]

export function DeploymentForm() {
  const { playHover, playClick } = useSounds()
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    playClick()
    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      eventDate: (form.elements.namedItem("event-date") as HTMLInputElement).value,
      eventType: (form.elements.namedItem("event-type") as HTMLSelectElement).value,
      venue: (form.elements.namedItem("venue") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    }
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded border border-primary bg-card/60 backdrop-blur-sm p-8 text-center neon-glow">
        <p className="font-[family-name:var(--font-display)] text-lg font-bold uppercase tracking-wider text-primary crt-flicker">
          Transmission Received
        </p>
        <p className="mt-4 text-sm text-muted-foreground blink-cursor">
          STAND BY FOR CONTACT
        </p>
        <button
          type="button"
          onClick={() => {
            playClick()
            setSubmitted(false)
          }}
          onMouseEnter={playHover}
          className="mt-6 rounded border border-border px-4 py-2 text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:border-primary hover:text-primary"
        >
          Send Another Transmission
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded border border-border bg-card/60 backdrop-blur-sm p-6 space-y-5 sm:p-8"
    >
      <div className="space-y-1.5">
        <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-foreground">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          onFocus={playHover}
          className="w-full rounded border border-border bg-input px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          placeholder="Your designation"
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-foreground">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          onFocus={playHover}
          className="w-full rounded border border-border bg-input px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          placeholder="comms@yourship.gal"
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="event-date" className="block text-xs font-bold uppercase tracking-wider text-foreground">
          Event Date
        </label>
        <input
          id="event-date"
          name="event-date"
          type="date"
          required
          onFocus={playHover}
          className="w-full rounded border border-border bg-input px-3 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary [color-scheme:dark]"
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="event-type" className="block text-xs font-bold uppercase tracking-wider text-foreground">
          Event Type
        </label>
        <select
          id="event-type"
          name="event-type"
          required
          onFocus={playHover}
          className="w-full rounded border border-border bg-input px-3 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        >
          <option value="" disabled>Select event type</option>
          {EVENT_TYPES.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="venue" className="block text-xs font-bold uppercase tracking-wider text-foreground">
          Venue / Location
        </label>
        <input
          id="venue"
          name="venue"
          type="text"
          required
          onFocus={playHover}
          className="w-full rounded border border-border bg-input px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          placeholder="Sector, system, or planet"
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-foreground">
          Message <span className="font-normal text-muted-foreground">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          onFocus={playHover}
          className="w-full rounded border border-border bg-input px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
          placeholder="Additional mission parameters..."
        />
      </div>

      <button
        type="submit"
        onMouseEnter={playHover}
        className="w-full neon-glow rounded border border-primary bg-primary/10 px-6 py-3 text-xs font-bold uppercase tracking-widest text-primary transition-all hover:bg-primary hover:text-primary-foreground sm:text-sm"
      >
        Send Transmission
      </button>
    </form>
  )
}
