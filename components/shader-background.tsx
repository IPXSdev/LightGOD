"use client"

import type React from "react"
import { useEffect, useRef } from "react"

interface ShaderBackgroundProps {
  children: React.ReactNode
}

export default function ShaderBackground({ children }: ShaderBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const waveCount = 6
    const waves: Array<{
      amplitude: number
      frequency: number
      phase: number
      speed: number
      color: string
      direction: number
      yOffset: number
    }> = []

    function resize() {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    function rand(min: number, max: number) {
      return Math.random() * (max - min) + min
    }

    resize()

    const brandColors = [
      "hsl(300, 90%, 70%)", // fuchsia
      "hsl(186, 90%, 70%)", // cyan
      "hsl(84, 90%, 70%)", // lime
      "hsl(320, 85%, 75%)", // magenta variant
      "hsl(200, 85%, 75%)", // cyan variant
      "hsl(90, 85%, 75%)", // lime variant
    ]

    for (let i = 0; i < waveCount; i++) {
      waves.push({
        amplitude: rand(80, 200),
        frequency: rand(0.002, 0.008),
        phase: rand(0, Math.PI * 2),
        speed: rand(0.05, 0.12),
        color: brandColors[i % brandColors.length],
        direction: Math.random() > 0.5 ? 1 : -1,
        yOffset: rand(0.2, 0.8) * canvas.height,
      })
    }

    let animationId: number
    let time = 0

    function animate() {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      time += 0.032

      waves.forEach((wave, index) => {
        ctx.globalCompositeOperation = "lighten"

        // Create flowing gradient
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
        gradient.addColorStop(0, wave.color)
        gradient.addColorStop(0.5, wave.color.replace("70%", "40%"))
        gradient.addColorStop(1, "transparent")

        ctx.fillStyle = gradient
        ctx.beginPath()

        // Draw wave path
        const points = []
        for (let x = 0; x <= canvas.width; x += 10) {
          const y =
            wave.yOffset +
            Math.sin(x * wave.frequency + wave.phase + time * wave.speed * wave.direction) * wave.amplitude +
            Math.cos(x * wave.frequency * 0.5 + time * wave.speed * 1.5) * wave.amplitude * 0.3
          points.push({ x, y })
        }

        // Create wave shape
        ctx.moveTo(0, canvas.height)
        points.forEach((point, i) => {
          if (i === 0) {
            ctx.lineTo(point.x, point.y)
          } else {
            const prevPoint = points[i - 1]
            const cpx = (prevPoint.x + point.x) / 2
            const cpy = (prevPoint.y + point.y) / 2
            ctx.quadraticCurveTo(prevPoint.x, prevPoint.y, cpx, cpy)
          }
        })

        ctx.lineTo(canvas.width, canvas.height)
        ctx.closePath()
        ctx.fill()

        // Add secondary wave layer for more fluid effect
        ctx.globalAlpha = 0.6
        ctx.beginPath()
        ctx.moveTo(0, 0)
        points.forEach((point, i) => {
          const fluidY = point.y - wave.amplitude * 0.8 + Math.sin(time * wave.speed * 4 + i * 0.1) * 30
          if (i === 0) {
            ctx.lineTo(point.x, fluidY)
          } else {
            const prevPoint = points[i - 1]
            const prevFluidY = prevPoint.y - wave.amplitude * 0.8 + Math.sin(time * wave.speed * 4 + (i - 1) * 0.1) * 30
            const cpx = (prevPoint.x + point.x) / 2
            const cpy = (prevFluidY + fluidY) / 2
            ctx.quadraticCurveTo(prevPoint.x, prevFluidY, cpx, cpy)
          }
        })
        ctx.lineTo(canvas.width, 0)
        ctx.closePath()
        ctx.fill()
        ctx.globalAlpha = 1
      })

      animationId = requestAnimationFrame(animate)
    }

    window.addEventListener("resize", resize)
    animate()

    return () => {
      window.removeEventListener("resize", resize)
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full z-0"
        style={{
          filter: "blur(20px) contrast(120%)",
        }}
      />

      <div className="fixed top-0 left-0 w-full h-full bg-white/8 backdrop-blur-[2px] z-10" />

      <div className="relative z-20">{children}</div>
    </div>
  )
}
