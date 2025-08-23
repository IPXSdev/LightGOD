"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { AlertTriangle } from "lucide-react"

interface NsfwGateProps {
  children: React.ReactNode
  title: string
}

export function NsfwGate({ children, title }: NsfwGateProps) {
  const [isConfirmed, setIsConfirmed] = useState(false)
  const [showDialog, setShowDialog] = useState(true)

  if (isConfirmed) {
    return <>{children}</>
  }

  return (
    <Dialog open={showDialog} onOpenChange={setShowDialog}>
      <DialogContent className="bg-[#070709] border-white/20">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-[#FF1A2D]">
            <AlertTriangle className="h-5 w-5" />
            Content Warning
          </DialogTitle>
          <DialogDescription className="text-white/70">
            The project "{title}" contains artistic nude photography and mature themes. This content is intended for
            mature audiences (18+) and is presented as fine art.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => setShowDialog(false)}
            className="border-white/20 text-white hover:bg-white/10"
          >
            Go Back
          </Button>
          <Button
            onClick={() => {
              setIsConfirmed(true)
              setShowDialog(false)
            }}
            className="bg-[#FF1A2D] hover:bg-[#FF1A2D]/80"
          >
            I'm 18+ and Understand
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
