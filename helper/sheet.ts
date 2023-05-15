import {
  SheetListType,
  SheetSizes,
  sheetRef,
} from "#/components/Sheet"

export function showSheet(
  modalName: SheetListType,
  size: SheetSizes = "sm"
) {
  sheetRef.current?.show(modalName, size)
}

export function closeSheet() {
  sheetRef.current?.close()
}
