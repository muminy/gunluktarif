"use client"

import { AnimatePresence, Variants, motion } from "framer-motion"
import {
  useImperativeHandle,
  forwardRef,
  useRef,
  useState,
  useEffect,
} from "react"
import { SheetListType, SheetRefType, SheetSizes } from "."
import Modals from "./pages"
import { cn } from "#/lib/utils"
import { cva } from "class-variance-authority"

const Sheet = forwardRef<SheetRefType>(({}, ref) => {
  const modalRef = useRef<SheetListType>()
  const modalSizeRef = useRef<SheetSizes>("sm")
  const [showModal, setShowModal] = useState(false)

  const Modal = () => {
    if (!modalRef.current) {
      return null
    }
    const SheetContent = Modals[modalRef.current]
    return <SheetContent />
  }
  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "auto"
  }, [showModal])

  const SheetDrawer = cva(
    "bg-background max-w-2xl w-full h-full z-40 rounded-xl",
    {
      variants: {
        size: {
          sm: "max-w-xl",
          xl: "max-w-2xl",
          lg: "max-w-4xl",
        },
      },
      defaultVariants: {
        size: modalSizeRef.current,
      },
    }
  )

  useImperativeHandle(ref, () => ({
    show: (modalName: SheetListType, size: SheetSizes = "sm") => {
      modalRef.current = modalName
      modalSizeRef.current = size
      setShowModal(true)
    },
    close: () => {
      setShowModal(false)
    },
  }))

  const variables: Variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  }

  const sheetVars: Variants = {
    initial: {
      x: "100%",
    },
    animate: {
      x: 0,
      transition: {
        type: "just",
        duration: 0.25,
      },
    },
    exit: {
      x: "100%",
    },
  }

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          {...variables}
          className={cn(
            "fixed top-0 overflow-y-auto left-0 w-full h-full z-50",
            "bg-black bg-opacity-30 backdrop-blur-xl",
            "flex justify-end lg:p-5 p-2 overflow-hidden"
          )}
        >
          <button
            onClick={() => {
              setShowModal(false)
            }}
            className="absolute left-0 z-10 top-0 h-full w-full "
          />
          <motion.div
            {...sheetVars}
            className={cn(
              SheetDrawer({ size: modalSizeRef.current })
            )}
          >
            <Modal />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
})

Sheet.displayName = "Sheet"
export default Sheet
