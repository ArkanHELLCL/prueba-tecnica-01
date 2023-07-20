/* eslint-disable react/prop-types */
import { useReadingList } from "../hooks/useReadingList"

export function Library({ library }) {
    const { addToReadingList, readingList } = useReadingList()

    const pagedLibraryData = library.map(item => item[Object.keys(item)[0]])
    const aviableReadingList = pagedLibraryData.filter(e => readingList.ISBN === e.ISBN ? false : true);
    console.log(aviableReadingList)

    return (        
        <ul className="list-none grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 min-w-fit pt-20 grid-col items-center content-center">
            {library.map(item => (
                <li key={item[Object.keys(item)[0]].ISBN} className="w-full flex items-center justify-between">
                    <img 
                        src={item[Object.keys(item)[0]].cover}
                        alt={item[Object.keys(item)[0]].title}                        
                        className="hover:scale-110 transition duration-0 hover:duration-500 cursor-pointer rounded-lg object-cover h-72 shadow-2xl w-48 dark:shadow-slate-400 shadow-slate-800"
                        onClick={() => addToReadingList(item[Object.keys(item)[0]])}
                        />
                </li>
                )
            )}            
        </ul>      
    )
  }