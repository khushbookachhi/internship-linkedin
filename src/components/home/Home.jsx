import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import useGetBooks from '../../hooks/useGetBooks'
import toast from 'react-hot-toast';

const Home = () => {
  const {loading,books}=useGetBooks();
  function addToStore(book){
    let books = JSON.parse(localStorage.getItem('books')) || [];
    const bookExists = books.some(existingBook => existingBook.title === book.title);
    if (!bookExists) {
      books.push(book);
      localStorage.setItem('books', JSON.stringify(books));
      toast.success("Book is added to Storage !");
  } else {
      toast.error("Book already exists in storage!");
  }
  }
  return (
   <>
   <div className='container-fluid mt-5 pt-3'> 
    <div className='container-fluid d-flex flex-wrap gap-3 justify-content-center px-5 mt-5'>
   {books && books.length>0 && books.map((book,index)=>{
    return  <div className="card shadow p-3 bg-body-tertiary rounded mb-3" key={index} style={{"width": "18rem"}}>
    <div className="card-body text-center">
      <h5 className="card-title text-center">{book.title}</h5>
      <p className="card-text mb-0"><span className='fw-semibold'>author_name:- </span>{book.author_name && book.author_name[0]}</p>
      <p className="card-text mb-0"><span className='fw-semibold'>publishedAt:- </span>{book.publish_year && book.publish_year[0]}</p>
      <p className="card-text mb-0"><span className='fw-semibold'>language:- </span>{book.language && book.language[0]}</p>
      <p className="card-text"><span className='fw-semibold'>Ratings:- </span>{book.ratings_average && book.ratings_average.toFixed(2)}</p>
      <button className="btn btn-outline-danger" onClick={()=>{addToStore(book)}}>Add to Store</button>
    </div>
  </div>
   })}
   {(!books || books.length===0)? <h1 className='text-center'>search books in search box !</h1>:null}

    </div>
   
   </div>
   </>
  )
}

export default Home