"use client"

import { useState } from "react"
import { DesignPanel } from "./design-panel"
import { PreviewArea } from "./preview-area"

const initialElements = [
  {
    id: "hero-section",
    type: "section",
    tagName: "section",
    content: "",
    styles: {
      padding: "64px 16px",
      backgroundColor: "bg-gray-900",
      minHeight: "400px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "24px",
    },
    children: ["hero-title", "hero-subtitle", "hero-button"],
  },
  {
    id: "hero-title",
    type: "heading",
    tagName: "h1",
    content: "Welcome to Our Platform",
    styles: {
      fontSize: "text-5xl",
      fontWeight: "font-bold",
      color: "text-white",
      textAlign: "text-center",
      lineHeight: "1.2",
      letterSpacing: "0em",
    },
    children: [],
  },
  {
    id: "hero-subtitle",
    type: "text",
    tagName: "p",
    content: "Build amazing experiences with our powerful tools and intuitive design system.",
    styles: {
      fontSize: "text-xl",
      color: "text-gray-300",
      textAlign: "text-center",
      maxWidth: "600px",
      lineHeight: "1.75rem",
      letterSpacing: "0em",
    },
    children: [],
  },
  {
    id: "hero-button",
    type: "button",
    tagName: "button",
    content: "Get Started",
    styles: {
      backgroundColor: "bg-blue-600",
      color: "text-white",
      padding: "12px 24px",
      borderRadius: "rounded-lg",
      fontSize: "text-lg",
      fontWeight: "font-semibold",
      border: "border-0",
      cursor: "cursor-pointer",
      transition: "transition-colors",
      hover: "hover:bg-blue-700",
    },
    children: [],
  },
]

export function DesignEditor() {
  const [elements, setElements] = useState(initialElements)
  const [selectedElement, setSelectedElement] = useState(null)
  const [isDesignMode, setIsDesignMode] = useState(true)

  const updateElement = (elementId, updates) => {
    setElements((prev) => prev.map((el) => (el.id === elementId ? { ...el, ...updates } : el)))
  }

  const updateElementStyles = (elementId, styleUpdates) => {
    setElements((prev) =>
      prev.map((el) => (el.id === elementId ? { ...el, styles: { ...el.styles, ...styleUpdates } } : el)),
    )
  }

  return (
    <div className="flex h-full dark">
      {/* Design Panel */}
      <div className="w-80 bg-gray-950 border-r border-gray-800 flex flex-col editor-panel">
        <div className="flex border-b border-gray-800">
          <button
            onClick={() => setIsDesignMode(false)}
            className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
              !isDesignMode ? "text-white bg-gray-800" : "text-gray-400 hover:text-white hover:bg-gray-800"
            }`}
          >
            Chat
          </button>
          <button
            onClick={() => setIsDesignMode(true)}
            className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
              isDesignMode ? "text-white bg-gray-800" : "text-gray-400 hover:text-white hover:bg-gray-800"
            }`}
          >
            Design
          </button>
        </div>

        {isDesignMode && (
          <DesignPanel
            selectedElement={selectedElement}
            onUpdateElement={updateElement}
            onUpdateStyles={updateElementStyles}
          />
        )}
      </div>

      {/* Preview Area */}
      <div className="flex-1 bg-white editor-preview">
        <PreviewArea
          elements={elements}
          selectedElement={selectedElement}
          onSelectElement={setSelectedElement}
          isDesignMode={isDesignMode}
        />
      </div>
    </div>
  )
}