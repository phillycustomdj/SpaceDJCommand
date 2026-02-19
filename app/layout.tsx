import type { Metadata, Viewport } from "next"
import { Orbitron, Space_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { NebulaBackground } from "@/components/nebula-background"
import { SoundProvider } from "@/components/sound-provider"

const _orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" })
const _spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
})

export const metadata: Metadata = {
  title: "Space DJ Command",
  description: "The Best DJs in the Galaxy. Elite musical command across known and unknown space.",
}

export const viewport: Viewport = {
  themeColor: "#0B0F1C",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${_orbitron.variable} ${_spaceMono.variable}`}>
      <body className="font-mono antialiased scanlines">
        <SoundProvider>
          <NebulaBackground />
          <Navbar />
          <main className="relative z-10 pointer-events-auto">{children}</main>
        </SoundProvider>
        <Analytics />
      </body>
    </html>
  )
}
