import { CategoryType } from "#/types"
import { createContext, useContext } from "react"

export type SiteContextType = {
  categories: CategoryType[]
}

export const SiteContext = createContext<SiteContextType>(
  {} as SiteContextType
)
export const SiteProvider = SiteContext.Provider
export const useSiteContext = () => useContext(SiteContext)
