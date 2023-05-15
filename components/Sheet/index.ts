import { createRef } from "react"
import SheetPages from "./pages"

export type SheetListType = keyof typeof SheetPages
export type SheetSizes = "sm" | "lg" | "xl"
export type SheetPositionType = "center" | "top"
export type SheetRefType = {
  show(modalName: SheetListType, size?: SheetSizes): void
  close(): void
}

export const sheetRef = createRef<SheetRefType>()

export { default } from "./Sheet"
