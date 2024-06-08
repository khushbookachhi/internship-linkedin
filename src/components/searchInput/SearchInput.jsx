import React from 'react'
import { useBookContext } from '../../context/BookContext'

const SearchInput = () => {
  const {q,setQ}=useBookContext();
  function handleSubmit(){
    console.log(q);
  }
  return (
    <form className="d-flex" role="search" onSubmit={(e)=>{e.preventDefault(); handleSubmit()}}>
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"
          value={q}
          onChange={(e)=>{setQ(e.target.value)}}/>
          <button className="btn btn-outline-danger" type="submit">Search</button>
        </form>
  )
}

export default SearchInput