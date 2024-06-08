import { createContext, useContext, useState } from "react";


export const BookContext=createContext();

export const useBookContext=()=>{
    return useContext(BookContext);
}

export const BookContextProvider=({children})=>{
 const [books,setBooks]=useState(null)
 const [q,setQ]=useState("");
    return <BookContext.Provider value={{books,setBooks,q,setQ}}>
     {children}
    </BookContext.Provider>
}