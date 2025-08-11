"use client"
import React from "react"

export function PreviewArea({ elements, selectedElement, onSelectElement, isDesignMode }) {
  const renderElement = (element) => {
    const { id, type, tagName, content, styles } = element
    const className = [
      styles?.backgroundColor,
      styles?.color,
      styles?.fontSize,
      styles?.fontWeight,
      styles?.textAlign,
      styles?.borderRadius,
      styles?.transition,
      styles?.hover,
    ]
      .filter(Boolean)
      .join(" ")

    const style = {
      padding: styles?.padding,
      minHeight: styles?.minHeight,
      display: styles?.display,
      flexDirection: styles?.flexDirection,
      alignItems: styles?.alignItems,
      justifyContent: styles?.justifyContent,
      gap: styles?.gap,
      lineHeight: styles?.lineHeight,
      letterSpacing: styles?.letterSpacing,
      maxWidth: styles?.maxWidth,
      cursor: styles?.cursor,
      border: styles?.border,
    }

    const commonProps = {
      key: id,
      className: `${className} ${selectedElement?.element?.id === id ? 'ring-2 ring-blue-500' : ''}`,
      style,
      onClick: isDesignMode ? (e) => { e.stopPropagation(); onSelectElement({ element }) } : undefined,
    }

    if (type === 'section') return React.createElement(tagName, commonProps)
    if (type === 'heading' || type === 'text') return React.createElement(tagName, commonProps, content)
    if (type === 'button') return React.createElement('button', commonProps, content)
    return null
  }

  return (
    <div className="min-h-screen p-8" onClick={() => isDesignMode && onSelectElement(null)}>
      {elements.map((el) => renderElement(el))}
    </div>
  )
}


