"use client"

import "#/styles/global.css"

import Layout from "#/components/Layout"
import Sheet, { sheetRef } from "#/components/Sheet"
import { SiteProvider } from "#/context/Site"
import { Inter } from "next/font/google"
import { use } from "react"
import { getCategories } from "#/service/category"

const inter = Inter({ subsets: ["latin"] })

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const categories = await getCategories()

  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} h-screen`}>
        <SiteProvider value={{ categories }}>
          <Layout>{children}</Layout>
          <Sheet ref={sheetRef} />
        </SiteProvider>
      </body>
    </html>
  )
}
