import { useId } from "react";
import { ReadingBookIcon, ClearReadingList, DelIcon } from "./icons.jsx";
import { useReadingList } from "../hooks/useReadingList"

export function ReadingList() {
    const realingListChkboxId = useId();
    const { readingList } = useReadingList()
    return (
        <>
            <label className="text-white bg-cyan-500 block w-8 h-8 justify-center transition-all cursor-pointer z-10 fixed top-20 right-6 py-1 px-1 rounded-full hover:scale-125" htmlFor={realingListChkboxId}>
                <ReadingBookIcon />
                <div className={`${readingList.length ? 'inline-flex' : 'hidden'} absolute items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900`}>{readingList.length}</div>
            </label>
            <input id={realingListChkboxId} type="checkbox" className="hidden peer/listReading" />
            <aside className="block top-28 w-52 -mr-44 p-8 pl-1 h-full fixed right-0 peer-checked/listReading:mr-0 peer-checked/listReading:p-8 dark:bg-gray-900 bg-gray-100 transition-all text-center dark:bg-opacity-90 bg-opacity-90 hover:mr-0 hover:p-8">
                <ul>
                    <li className="first:m-auto -mt-36">
                        <button className="dark:text-gray-100 text-gray-900 hover:scale-125 absolute right-8 transition-all">
                            <DelIcon />
                        </button>
                        <img
                            className="w-36 h-52 rounded-lg shadow-2xl dark:shadow-slate-400 shadow-slate-800" 
                            src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg" 
                            alt="" 
                        />
                    </li>
                    <li className="first:m-auto -mt-36 border-t-black border-t-8">
                        <button className="dark:text-gray-100 text-gray-900 hover:scale-125 absolute right-8 transition-all">
                            <DelIcon />
                        </button>
                        <img
                            className="w-36 h-52 rounded-lg shadow-2xl  shadow-black" 
                            src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1273763400i/8189620.jpg" 
                            alt="" 
                        />
                    </li>
                </ul>
                <button className="dark:text-gray-100 text-gray-900 hover:scale-125 pt-5 transition-all">
                    <ClearReadingList />
                </button>
            </aside>
        </>
    )
}