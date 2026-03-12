import { createContext, useContext, useState } from "react"

const SearchContext = createContext()

export const SearchProvider = ({ children }) => {

  const [searchText, setSearchText] = useState("")
  const [filters, setFilters] = useState({})

  return (
    <SearchContext.Provider value={{ searchText, setSearchText, filters, setFilters }}>
      {children}
    </SearchContext.Provider>
  )
}

export const useSearch = () => useContext(SearchContext)