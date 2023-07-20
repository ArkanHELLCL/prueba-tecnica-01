/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const FiltersContext = createContext();

export function FiltersProvider({ children }) {
    const [filters, setFilters] = useState({
        page: 1,
        pageSize: 10,        
        genre:'all',
        author:'all',
        year:1800,
        type:'all'
    })
    return (
        <FiltersContext.Provider value={{
            filters,
            setFilters
        }}>
        {children}
        </FiltersContext.Provider>
    )
}