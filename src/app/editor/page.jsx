"use client"
import { DesignEditor } from "@/components/design-editor"
import "@/styles/editor.css"

export default function Page() {
  return (
    <div className="h-screen bg-black dark editor-dark">
      <DesignEditor />
    </div>
  )
}