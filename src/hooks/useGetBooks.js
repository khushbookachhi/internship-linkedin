import React, { useEffect, useState } from 'react'
import {useBookContext } from '../context/BookContext';
import axios from 'axios';

const useGetBooks = () => {
 const [loading,setLoading]=useState(false);
 const {q,books,setBooks}=useBookContext();
 
 useEffect(()=>{
const getBooks=async()=>{
    setLoading(true);
    try{
        const res=await axios.get('https://openlibrary.org/search.json',{
            params:{
                q: q,
                limit: 10,
                page: 1
            }
        });
        const data=await res.data.docs;
        if(data.error){
            throw new Error(data.error);
        }
        console.log(data);
        setBooks(data);
    }catch (error) {
        console.error(error.message);
    }finally{
        setLoading(false);
    }
}
getBooks()
 },[q])
      
 return {loading,books};
}

export default useGetBooks