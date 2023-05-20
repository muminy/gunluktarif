"use client"

import "#/styles/global.css"

import Layout from "#/components/Layout"
import Sheet, { sheetRef } from "#/components/Sheet"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} h-screen`}>
        <Layout>{children}</Layout>
        <Sheet ref={sheetRef} />
      </body>
    </html>
  )
}
