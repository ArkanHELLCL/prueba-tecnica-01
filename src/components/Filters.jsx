/* eslint-disable react/prop-types */
import { useId } from 'react';
import  { useLibraryStat } from  '../hooks/useLibraryStat.jsx'
import { useFilters } from '../hooks/useFilters.jsx'

export function Filters () {
    const { filters, setFilters } = useFilters()
    const { itemAuthor, itemGenre, itemType } = useLibraryStat()

    const today = new Date();
    const genres = itemGenre.type    
    const authors = itemAuthor.type    
    const types = itemType.type

    const typeFilterId = useId()
    const genreFilterId = useId()
    const authorFilterId = useId()
    const yearFilterId = useId()    
    const pageSizeFilterid = useId()

    const handleChangeMinYear = () => (e) => {         
        setFilters(prevState => ({
            ...prevState, 
            year: e.target.value
        }))
    }

    const handelChangeGenre = () => (e) => {        
        setFilters(prevState => ({
            ...prevState,
            genre: e.target.value
        }))
    }
    const handelChangeAuthor = () => (e) => {        
        setFilters(prevState => ({
            ...prevState, 
            author: e.target.value
        }))
    }
    const handelChangeType = () => (e) => {        
        setFilters(prevState => ({
            ...prevState, 
            type: e.target.value
        }))
    }
    const handelChangepageSize = () => (e) => {        
        setFilters(prevState => ({
            ...prevState, 
            pageSize: e.target.value,
            page: 1
        }))
    }
    
    return(        
        <section className="list-none grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 min-w-fit pt-4 grid-col items-center">
            <div className="mb-2 grid">                
                <label htmlFor={typeFilterId} className="block mb-2 text-gray-900 dark:text-gray-100">Tipo :</label>
                <select id={typeFilterId} onChange={handelChangeType()} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-100 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option key="all" value="all" selected>Selecciona un Tipo</option>
                    {types.map((type) => (
                        <option key={type} value={type}>{type}</option>
                    ))}
                </select>
            </div>
            <div className="mb-2 grid">                
                <label htmlFor={authorFilterId} className="block mb-2 text-gray-900 dark:text-gray-100">Autor :</label>
                <select id={authorFilterId} onChange={handelChangeAuthor()} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-100 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option key="all" value="all" selected>Selecciona un Autor</option>
                    {authors.map((author) => (
                        <option key={author} value={author}>{author}</option>
                    ))}
                </select>
            </div>
            <div className="mb-2 grid">                
                <label htmlFor={genreFilterId} className="block mb-2 text-gray-900 dark:text-gray-100">Género :</label>
                <select id={genreFilterId} onChange={handelChangeGenre()} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-100 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option key="all" value="all" selected>Selecciona un Género</option>
                    {genres.map((genre) => (
                        <option key={genre} value={genre}>{genre}</option>
                    ))}
                </select>
            </div>
            <div className="mb-2 grid">
                <label htmlFor={yearFilterId} className="block mb-2 text-gray-900 dark:text-gray-100">Año desde:</label>
                <input
                    type='range'
                    id={yearFilterId}
                    onChange={handleChangeMinYear()}
                    min={1800}
                    max={today.getFullYear()}
                    step={1}
                    value={filters.year}
                />
                <span className="block text-gray-900 dark:text-gray-100 text-right">{filters.year}</span>                
            </div>            
            <div className="mb-2 grid">
                <label htmlFor={pageSizeFilterid} className="block mb-2 text-gray-900 dark:text-gray-100">Items por página</label>
                <input
                    type='range'
                    id={pageSizeFilterid}
                    onChange={handelChangepageSize()}
                    min={1}
                    max={12}
                    step={1}
                    value={filters.pageSize}
                />
                <span className="block text-gray-900 dark:text-gray-100 text-right">{filters.pageSize}</span>                
            </div> 
        </section>        
    )
}