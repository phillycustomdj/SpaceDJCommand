"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const NEBULA_IMAGES = [
  "/images/nebula-1.jpg",
  "/images/nebula-2.jpg",
  "/images/nebula-3.jpg",
  "/images/nebula-4.jpg",
]

export function NebulaBackground() {
  const [src, setSrc] = useState(NEBULA_IMAGES[0])

  useEffect(() => {
    setSrc(NEBULA_IMAGES[Math.floor(Math.random() * NEBULA_IMAGES.length)])
  }, [])

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" style={{ width: "100vw", height: "100vh" }} aria-hidden="true">
      <div className="nebula-bg pointer-events-none" style={{ width: "100%", height: "100%", position: "relative" }}>
        <Image
          src={src}
          alt=""
          fill
          className="object-cover opacity-30 pointer-events-none"
          priority
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#0B0F1C]/60 via-transparent to-[#0B0F1C]/90" />
    </div>
  )
}
