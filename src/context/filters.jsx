import { createContext, useState } from "react";

// 1. Create context
export const FiltersContext = createContext()

// 2. Create provider for access to the context
export function FiltersProvider({children}){
    const [filters, setFilters] = useState({
        priority: 'all'
    })
    return(
        <FiltersContext.Provider value={{
            filters,
            setFilters
        }}>
            {children}
        </FiltersContext.Provider>
    )
}