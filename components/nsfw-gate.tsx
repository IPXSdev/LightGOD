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
  children?: React.ReactNode
  title?: string
}

export function NsfwGate({ children, title = "this content" }: NsfwGateProps) {
  const [isConfirmed, setIsConfirmed] = useState(false)
  const [showDialog, setShowDialog] = useState(true)

  // If used as standalone component without children, just show the dialog
  if (!children) {
    return (
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="bg-white border-gray-200">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-red-600">
              <AlertTriangle className="h-5 w-5" />
              Content Warning
            </DialogTitle>
            <DialogDescription className="text-gray-700">
              The project "{title}" contains artistic nude photography and mature themes. This content is intended for
              mature audiences (18+) and is presented as fine art.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex gap-2">
            <Button
              variant="outline"
              onClick={() => setShowDialog(false)}
              className="border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              Go Back
            </Button>
            <Button
              onClick={() => {
                setIsConfirmed(true)
                setShowDialog(false)
              }}
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              I'm 18+ and Understand
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
  }

  if (isConfirmed) {
    return <>{children}</>
  }

  return (
    <Dialog open={showDialog} onOpenChange={setShowDialog}>
      <DialogContent className="bg-white border-gray-200">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-red-600">
            <AlertTriangle className="h-5 w-5" />
            Content Warning
          </DialogTitle>
          <DialogDescription className="text-gray-700">
            The project "{title}" contains artistic nude photography and mature themes. This content is intended for
            mature audiences (18+) and is presented as fine art.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => setShowDialog(false)}
            className="border-gray-300 text-gray-700 hover:bg-gray-50"
          >
            Go Back
          </Button>
          <Button
            onClick={() => {
              setIsConfirmed(true)
              setShowDialog(false)
            }}
            className="bg-red-600 hover:bg-red-700 text-white"
          >
            I'm 18+ and Understand
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
