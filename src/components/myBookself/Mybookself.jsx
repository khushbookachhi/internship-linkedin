import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const Mybookself = () => {
    const [books,setBooks]=useState([]);

    useEffect(()=>{
         let storageBooks=JSON.parse(localStorage.getItem('books')) || [];
         setBooks(storageBooks);
         console.log(books);
    },[setBooks])

    function deleteBook(book){
        console.log(book)
        let books = JSON.parse(localStorage.getItem('books')) || [];
        books = books.filter((item) => item.title !== book.title);
        console.log(books)
        localStorage.setItem('books', JSON.stringify(books));
        setBooks(books);
        toast.success("Book is deleted!")
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
      <button className="btn btn-outline-danger" onClick={()=>{deleteBook(book)}}>Delete Book</button>
    </div>
  </div>
   })}
   {(!books || books.length===0)? <h1 className='text-center'>Add Books from Home page !</h1>:null}

    </div>
   
   </div>
   </>
  )
}

export default Mybookself