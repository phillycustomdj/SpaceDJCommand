"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Volume2, VolumeX } from "lucide-react"
import { useSounds } from "./sound-provider"

const NAV_LINKS = [
  { href: "/command", label: "The Command" },
  { href: "/listening-room", label: "Listening Room" },
  { href: "/visual-transmissions", label: "Visual Transmissions" },
  { href: "/book", label: "Request Deployment" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const { enabled, toggle, playHover, playClick } = useSounds()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-[#0B0F1C]/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link
          href="/"
          onMouseEnter={playHover}
          onClick={() => playClick()}
          className="font-[family-name:var(--font-display)] text-sm font-bold tracking-widest text-primary sm:text-base neon-glow-text glow-hover"
        >
          SPACE DJ COMMAND
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onMouseEnter={playHover}
              onClick={() => playClick()}
              className="text-xs tracking-wider text-muted-foreground transition-colors hover:text-primary glow-hover uppercase"
            >
              {link.label}
            </Link>
          ))}
          <button
            type="button"
            onClick={() => {
              playClick()
              toggle()
            }}
            onMouseEnter={playHover}
            className="flex items-center gap-2 rounded border border-border px-3 py-1.5 text-xs tracking-wider text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            aria-label={enabled ? "Disable ship systems audio" : "Enable ship systems audio"}
          >
            {enabled ? (
              <Volume2 className="h-3.5 w-3.5" />
            ) : (
              <VolumeX className="h-3.5 w-3.5" />
            )}
            <span className="hidden xl:inline">SHIP SYSTEMS</span>
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            type="button"
            onClick={() => {
              playClick()
              toggle()
            }}
            className="flex items-center gap-1.5 rounded border border-border px-2 py-1 text-xs text-muted-foreground hover:border-primary hover:text-primary"
            aria-label={enabled ? "Disable ship systems audio" : "Enable ship systems audio"}
          >
            {enabled ? (
              <Volume2 className="h-3.5 w-3.5" />
            ) : (
              <VolumeX className="h-3.5 w-3.5" />
            )}
          </button>
          <button
            type="button"
            onClick={() => {
              playClick()
              setOpen(!open)
            }}
            className="text-muted-foreground hover:text-primary"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-[#0B0F1C]/95 backdrop-blur-md lg:hidden">
          <div className="flex flex-col gap-1 px-4 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => {
                  playClick()
                  setOpen(false)
                }}
                className="rounded px-3 py-2.5 text-sm tracking-wider text-muted-foreground transition-colors hover:bg-secondary hover:text-primary uppercase"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
