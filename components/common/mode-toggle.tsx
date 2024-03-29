"use client"

import * as React from "react"
import { useTheme } from "next-themes"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <>
        <button
            onClick={() => setTheme("light")}
        >
            Light
        </button>
        <button
            onClick={() => setTheme("dark")}
        >
            Dark
        </button>
    </>
  )
}
