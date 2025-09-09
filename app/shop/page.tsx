"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function ShopPage() {
  const router = useRouter()

  useEffect(() => {
    router.replace("/shop/services")
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-black mb-4">Redirecting to LightGod Services...</h1>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-fuchsia-600 mx-auto"></div>
      </div>
    </div>
  )
}
