/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const ReadingListContext = createContext();

export function ReadingListProvider({ children }) {
    const [readingList, setReadingList] = useState([])

    const addToReadingList = item => {        
        const itemInReadingList = readingList.find((element) => element.ISBN === item.ISBN)        
        if(itemInReadingList) {
            return
        }
        setReadingList(prevState => ([
            ...prevState,
            {
                ...item,                
                quantity: 1
            }
        ]))        
    }

    const removeFromReadingList = item => {}
    const ClearReadingList = () => {
        setReadingList([])
    }

    return (
        <ReadingListContext.Provider value={{
            readingList,
            addToReadingList,
            removeFromReadingList,
            ClearReadingList
        }}>
        {children}
        </ReadingListContext.Provider>
    )
}