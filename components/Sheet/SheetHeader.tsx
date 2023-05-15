import { X } from "lucide-react"
import Button from "../Button"
import { closeSheet } from "#/helper/sheet"

export interface ISheetHeaderProps {
  children?: React.ReactNode
}
export default function SheetHeader({ children }: ISheetHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <div>{children}</div>
      <Button
        onClick={() => {
          closeSheet()
        }}
        className="gap-x-1 items-center flex"
      >
        <X size={18} />
        Kapat
      </Button>
    </div>
  )
}
