import { cn } from "#/lib/utils"

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({
  className,
  ...props
}: IButtonProps) {
  return (
    <button
      className={cn(
        "px-4 py-2.5 rounded-2xl duration-300",
        "border border-white border-opacity-10 hover:border-green-500",
        "hover:ring-4 hover:ring-green-500 hover:ring-opacity-20",
        "font-medium text-sm",
        className
      )}
      {...props}
    />
  )
}
