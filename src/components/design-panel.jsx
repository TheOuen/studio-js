"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Italic,
  Strikethrough,
  Underline,
  RotateCcw,
  Link,
  Maximize,
  Lock,
} from "lucide-react"

export function DesignPanel({ selectedElement, onUpdateElement, onUpdateStyles }) {
  if (!selectedElement) {
    return <div className="p-4 text-gray-300 text-sm">Select an element to edit its properties</div>
  }

  const { element } = selectedElement
  const styles = element.styles || {}

  const updateStyle = (property, value) => {
    onUpdateStyles(element.id, { [property]: value })
  }

  const updateContent = (content) => {
    onUpdateElement(element.id, { content })
  }

  return (
    <div className="flex-1 overflow-y-auto">
      {/* Selected Element Indicator */}
      <div className="p-4 border-b border-gray-800">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">{element.tagName}</div>
          <Button variant="ghost" size="sm" className="ml-auto text-gray-400">
            •••
          </Button>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Typography Section */}
        {(element.type === "heading" || element.type === "text") && (
          <div className="space-y-4">
            <h3 className="text-white font-medium">Typography</h3>

            <div className="space-y-3">
              <Select defaultValue="default">
                <SelectTrigger className="bg-gray-900 border-gray-700 text-white hover:bg-gray-800 transition-colors">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">Aa</span>
                    <SelectValue className="text-white" placeholder="Font Family" />
                  </div>
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-gray-700">
                  <SelectItem value="default" className="text-white hover:bg-gray-800 focus:bg-gray-800">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-normal">Aa</span>
                      <span>Default</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="inter" className="text-white hover:bg-gray-800 focus:bg-gray-800">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-normal" style={{ fontFamily: "Inter" }}>
                        Aa
                      </span>
                      <span>Inter</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="roboto" className="text-white hover:bg-gray-800 focus:bg-gray-800">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-normal" style={{ fontFamily: "Roboto" }}>
                        Aa
                      </span>
                      <span>Roboto</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>

              <div className="grid grid-cols-2 gap-2">
                <Select
                  value={styles.fontWeight?.replace("font-", "") || "normal"}
                  onValueChange={(value) => updateStyle("fontWeight", `font-${value}`)}
                >
                  <SelectTrigger className="bg-gray-900 border-gray-700 text-white hover:bg-gray-800 transition-colors">
                    <SelectValue className="text-white" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-900 border-gray-700">
                    <SelectItem value="light" className="text-white hover:bg-gray-800 focus:bg-gray-800">
                      <div className="flex items-center justify-between w-full">
                        <span>Light</span>
                        <span className="text-xs text-gray-400 font-light">300</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="normal" className="text-white hover:bg-gray-800 focus:bg-gray-800">
                      <div className="flex items-center justify-between w-full">
                        <span>Normal</span>
                        <span className="text-xs text-gray-400 font-normal">400</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="medium" className="text-white hover:bg-gray-800 focus:bg-gray-800">
                      <div className="flex items-center justify-between w-full">
                        <span>Medium</span>
                        <span className="text-xs text-gray-400 font-medium">500</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="semibold" className="text-white hover:bg-gray-800 focus:bg-gray-800">
                      <div className="flex items-center justify-between w-full">
                        <span>Semibold</span>
                        <span className="text-xs text-gray-400 font-semibold">600</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="bold" className="text-white hover:bg-gray-800 focus:bg-gray-800">
                      <div className="flex items-center justify-between w-full">
                        <span>Bold</span>
                        <span className="text-xs text-gray-400 font-bold">700</span>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>

                <Select
                  value={styles.fontSize?.replace("text-", "") || "base"}
                  onValueChange={(value) => updateStyle("fontSize", `text-${value}`)}
                >
                  <SelectTrigger className="bg-gray-900 border-gray-700 text-white hover:bg-gray-800 transition-colors">
                    <SelectValue className="text-white" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-900 border-gray-700">
                    <SelectItem value="xs" className="text-white hover:bg-gray-800 focus:bg-gray-800">
                      <div className="flex items-center justify-between w-full">
                        <span>Extra Small</span>
                        <span className="text-xs text-gray-400">12px</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="sm" className="text-white hover:bg-gray-800 focus:bg-gray-800">
                      <div className="flex items-center justify-between w-full">
                        <span>Small</span>
                        <span className="text-xs text-gray-400">14px</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="base" className="text-white hover:bg-gray-800 focus:bg-gray-800">
                      <div className="flex items-center justify-between w-full">
                        <span>Base</span>
                        <span className="text-xs text-gray-400">16px</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="lg" className="text-white hover:bg-gray-800 focus:bg-gray-800">
                      <div className="flex items-center justify-between w-full">
                        <span>Large</span>
                        <span className="text-xs text-gray-400">18px</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="xl" className="text-white hover:bg-gray-800 focus:bg-gray-800">
                      <div className="flex items-center justify-between w-full">
                        <span>Extra Large</span>
                        <span className="text-xs text-gray-400">20px</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="2xl" className="text-white hover:bg-gray-800 focus:bg-gray-800">
                      <div className="flex items-center justify-between w-full">
                        <span>2X Large</span>
                        <span className="text-xs text-gray-400">24px</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="3xl" className="text-white hover:bg-gray-800 focus:bg-gray-800">
                      <div className="flex items-center justify-between w-full">
                        <span>3X Large</span>
                        <span className="text-xs text-gray-400">30px</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="4xl" className="text-white hover:bg-gray-800 focus:bg-gray-800">
                      <div className="flex items-center justify-between w-full">
                        <span>4X Large</span>
                        <span className="text-xs text-gray-400">36px</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="5xl" className="text-white hover:bg-gray-800 focus:bg-gray-800">
                      <div className="flex items-center justify-between w-full">
                        <span>5X Large</span>
                        <span className="text-xs text-gray-400">48px</span>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <Label className="text-gray-300 text-xs">Line Height</Label>
                  <Input
                    className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-400 mt-1"
                    value={styles.lineHeight || "1.75rem"}
                    onChange={(e) => updateStyle("lineHeight", e.target.value)}
                  />
                </div>
                <div>
                  <Label className="text-gray-300 text-xs">Letter Spacing</Label>
                  <Input
                    className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-400 mt-1"
                    value={styles.letterSpacing || "0em"}
                    onChange={(e) => updateStyle("letterSpacing", e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <Label className="text-gray-300 text-xs">Alignment</Label>
                  <div className="flex mt-1 bg-gray-900 rounded border border-gray-700">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex-1 h-8 text-gray-300 hover:text-white hover:bg-gray-800"
                      onClick={() => updateStyle("textAlign", "text-left")}
                    >
                      <AlignLeft className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex-1 h-8 text-gray-300 hover:text-white hover:bg-gray-800"
                      onClick={() => updateStyle("textAlign", "text-center")}
                    >
                      <AlignCenter className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex-1 h-8 text-gray-300 hover:text-white hover:bg-gray-800"
                      onClick={() => updateStyle("textAlign", "text-right")}
                    >
                      <AlignRight className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex-1 h-8 text-gray-300 hover:text-white hover:bg-gray-800"
                      onClick={() => updateStyle("textAlign", "text-justify")}
                    >
                      <AlignJustify className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <div>
                  <Label className="text-gray-300 text-xs">Decoration</Label>
                  <div className="flex mt-1 bg-gray-900 rounded border border-gray-700">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex-1 h-8 text-gray-300 hover:text-white hover:bg-gray-800"
                    >
                      <Italic className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex-1 h-8 text-gray-300 hover:text-white hover:bg-gray-800"
                    >
                      <Strikethrough className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex-1 h-8 text-gray-300 hover:text-white hover:bg-gray-800"
                    >
                      <Underline className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex-1 h-8 text-gray-300 hover:text-white hover:bg-gray-800"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex-1 h-8 text-gray-300 hover:text-white hover:bg-gray-800"
                    >
                      <Link className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Color Section */}
        <div className="space-y-4">
          <h3 className="text-white font-medium">Color</h3>
          <Select value={styles.color || "text-white"} onValueChange={(value) => updateStyle("color", value)}>
            <SelectTrigger className="bg-gray-900 border-gray-700 text-white hover:bg-gray-800 transition-colors">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-white rounded-full border border-gray-600"></div>
                <SelectValue className="text-white" />
              </div>
            </SelectTrigger>
            <SelectContent className="bg-gray-900 border-gray-700">
              <SelectItem value="text-white" className="text-white hover:bg-gray-800 focus:bg-gray-800">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-white rounded-full border border-gray-600"></div>
                  <span>White</span>
                </div>
              </SelectItem>
              <SelectItem value="text-black" className="text-white hover:bg-gray-800 focus:bg-gray-800">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-black rounded-full border border-gray-600"></div>
                  <span>Black</span>
                </div>
              </SelectItem>
              <SelectItem value="text-gray-900" className="text-white hover:bg-gray-800 focus:bg-gray-800">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-gray-900 rounded-full border border-gray-600"></div>
                  <span>Gray 900</span>
                </div>
              </SelectItem>
              <SelectItem value="text-blue-600" className="text-white hover:bg-gray-800 focus:bg-gray-800">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-blue-600 rounded-full border border-gray-600"></div>
                  <span>Blue 600</span>
                </div>
              </SelectItem>
              <SelectItem value="text-red-600" className="text-white hover:bg-gray-800 focus:bg-gray-800">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-red-600 rounded-full border border-gray-600"></div>
                  <span>Red 600</span>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Background Section */}
        <div className="space-y-4">
          <h3 className="text-white font-medium">Background</h3>
          <Select
            value={styles.backgroundColor || "default"}
            onValueChange={(value) => updateStyle("backgroundColor", value === "default" ? "" : value)}
          >
            <SelectTrigger className="bg-gray-900 border-gray-700 text-white hover:bg-gray-800 transition-colors">
              <SelectValue className="text-white" />
            </SelectTrigger>
            <SelectContent className="bg-gray-900 border-gray-700">
              <SelectItem value="default" className="text-white hover:bg-gray-800 focus:bg-gray-800">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border border-gray-600 rounded bg-transparent"></div>
                  <span>Default</span>
                </div>
              </SelectItem>
              <SelectItem value="bg-white" className="text-white hover:bg-gray-800 focus:bg-gray-800">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-white rounded border border-gray-600"></div>
                  <span>White</span>
                </div>
              </SelectItem>
              <SelectItem value="bg-gray-900" className="text-white hover:bg-gray-800 focus:bg-gray-800">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-gray-900 rounded border border-gray-600"></div>
                  <span>Gray 900</span>
                </div>
              </SelectItem>
              <SelectItem value="bg-blue-600" className="text-white hover:bg-gray-800 focus:bg-gray-800">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-blue-600 rounded border border-gray-600"></div>
                  <span>Blue 600</span>
                </div>
              </SelectItem>
              <SelectItem value="bg-red-600" className="text-white hover:bg-gray-800 focus:bg-gray-800">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-red-600 rounded border border-gray-600"></div>
                  <span>Red 600</span>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Content Section */}
        {(element.type === "heading" || element.type === "text" || element.type === "button") && (
          <div className="space-y-4">
            <h3 className="text-white font-medium">Content</h3>
            <Input
              className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-400"
              value={element.content || ""}
              onChange={(e) => updateContent(e.target.value)}
              placeholder="Enter content..."
            />
          </div>
        )}
      </div>
    </div>
  )
}