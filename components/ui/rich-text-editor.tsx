"use client"

import React, { useRef, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Bold, Italic, Underline, Link, Type, AlignLeft, AlignCenter, AlignRight, List, ListOrdered } from "lucide-react"
import { cn } from "@/lib/utils"

interface RichTextEditorProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
}

export function RichTextEditor({ value, onChange, placeholder = "Tulis konten di sini...", className }: RichTextEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null)
  const [isFocused, setIsFocused] = useState(false)

  useEffect(() => {
    if (editorRef.current && editorRef.current.innerHTML !== value) {
      editorRef.current.innerHTML = value
    }
  }, [value])

  const handleInput = () => {
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML)
    }
  }

  const execCommand = (command: string, value?: string) => {
    document.execCommand(command, false, value)
    editorRef.current?.focus()
    handleInput()
  }

  const insertLink = () => {
    const url = prompt("Masukkan URL:")
    if (url) {
      execCommand("createLink", url)
    }
  }

  const formatText = (command: string) => {
    execCommand(command)
  }

  const changeFontSize = (size: string) => {
    execCommand("fontSize", "7") // This creates a <font size="7"> tag
    // Then we'll replace it with proper CSS styling
    setTimeout(() => {
      if (editorRef.current) {
        const fontElements = editorRef.current.querySelectorAll('font[size="7"]')
        fontElements.forEach((element) => {
          const span = document.createElement('span')
          span.style.fontSize = size
          span.innerHTML = element.innerHTML
          element.parentNode?.replaceChild(span, element)
        })
        handleInput()
      }
    }, 0)
  }

  const alignText = (alignment: string) => {
    execCommand("justify" + alignment.charAt(0).toUpperCase() + alignment.slice(1))
  }

  const insertList = (ordered: boolean = false) => {
    execCommand(ordered ? "insertOrderedList" : "insertUnorderedList")
  }

  const clearFormatting = () => {
    execCommand("removeFormat")
  }

  const isCommandActive = (command: string) => {
    return document.queryCommandState(command)
  }

  return (
    <div className={cn("border border-gray-300 rounded-lg overflow-hidden", className)}>
      {/* Toolbar */}
      <div className="border-b border-gray-200 bg-gray-50 p-2 flex flex-wrap gap-1">
        {/* Text Formatting */}
        <div className="flex gap-1 border-r border-gray-300 pr-2 mr-2">
          <Button
            type="button"
            variant={isCommandActive("bold") ? "default" : "ghost"}
            size="sm"
            onClick={() => formatText("bold")}
            className="h-8 w-8 p-0"
          >
            <Bold className="h-4 w-4" />
          </Button>
          <Button
            type="button"
            variant={isCommandActive("italic") ? "default" : "ghost"}
            size="sm"
            onClick={() => formatText("italic")}
            className="h-8 w-8 p-0"
          >
            <Italic className="h-4 w-4" />
          </Button>
          <Button
            type="button"
            variant={isCommandActive("underline") ? "default" : "ghost"}
            size="sm"
            onClick={() => formatText("underline")}
            className="h-8 w-8 p-0"
          >
            <Underline className="h-4 w-4" />
          </Button>
        </div>

        {/* Font Size */}
        <div className="flex gap-1 border-r border-gray-300 pr-2 mr-2">
          <select
            onChange={(e) => changeFontSize(e.target.value)}
            className="h-8 px-2 text-sm border border-gray-300 rounded bg-white"
            defaultValue=""
          >
            <option value="">Ukuran</option>
            <option value="12px">Kecil</option>
            <option value="14px">Normal</option>
            <option value="16px">Sedang</option>
            <option value="18px">Besar</option>
            <option value="20px">Sangat Besar</option>
            <option value="24px">Extra Besar</option>
          </select>
        </div>

        {/* Alignment */}
        <div className="flex gap-1 border-r border-gray-300 pr-2 mr-2">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => alignText("left")}
            className="h-8 w-8 p-0"
          >
            <AlignLeft className="h-4 w-4" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => alignText("center")}
            className="h-8 w-8 p-0"
          >
            <AlignCenter className="h-4 w-4" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => alignText("right")}
            className="h-8 w-8 p-0"
          >
            <AlignRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Lists */}
        <div className="flex gap-1 border-r border-gray-300 pr-2 mr-2">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => insertList(false)}
            className="h-8 w-8 p-0"
          >
            <List className="h-4 w-4" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => insertList(true)}
            className="h-8 w-8 p-0"
          >
            <ListOrdered className="h-4 w-4" />
          </Button>
        </div>

        {/* Link */}
        <div className="flex gap-1">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={insertLink}
            className="h-8 w-8 p-0"
          >
            <Link className="h-4 w-4" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={clearFormatting}
            className="h-8 px-2 text-xs"
          >
            Clear
          </Button>
        </div>
      </div>

      {/* Editor */}
      <div
        ref={editorRef}
        contentEditable
        onInput={handleInput}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={cn(
          "min-h-[200px] p-4 focus:outline-none",
          isFocused ? "ring-2 ring-blue-500 ring-opacity-50" : "",
          value ? "" : "text-gray-400"
        )}
        style={{ minHeight: "200px" }}
        data-placeholder={placeholder}
        suppressContentEditableWarning={true}
      />
    </div>
  )
}

// CSS for placeholder
const styles = `
  [contenteditable]:empty:before {
    content: attr(data-placeholder);
    color: #9ca3af;
    pointer-events: none;
  }
`

// Inject styles
if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style")
  styleSheet.textContent = styles
  document.head.appendChild(styleSheet)
}
