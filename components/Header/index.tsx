import { showSheet } from "#/helper/sheet"
import { cn } from "#/lib/utils"
import Container from "../Container"
import Logo from "../Logo"
import Navigations from "../Navigations"

export interface IHeaderProps {}
export default function Header() {
  return (
    <header
      className={cn(
        "border-b border-b-border fixed h-20 top-0 left-0",
        "z-30 w-full bg-background backdrop-blur-md",
        "transition-[transform,border-color] duration-300 translate-y-0"
      )}
    >
      <Container className="flex items-center h-full justify-between">
        <Logo size={28} />
        <div className="flex items-center space-x-10">
          <Navigations />
          <button
            onClick={() => {
              showSheet("drawer-menu", "sm")
            }}
            aria-label="sheet-button"
            className="fill-white bg-secondary w-12 h-12 rounded-xl center-center"
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.087 17.876L6.08912 18.1225"
                stroke="#CCD2E3"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M19.9989 12.8767L10.0005 13.0528"
                stroke="#CCD2E3"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M19.9109 7.87756L13.9118 7.98321"
                stroke="#CCD2E3"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </Container>
    </header>
  )
}
