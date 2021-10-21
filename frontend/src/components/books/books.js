import React , {useEffect}from "react";
import "./books.css";
import Book from "./book";
import {useSelector , useDispatch} from 'react-redux'
import { fetchBooksAction } from "../../redux/actions/bookActions";

const Books = () => {
  const booksList = useSelector(state => state.booksList)
  const {allBooks}= booksList
  console.log(allBooks)
  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch (fetchBooksAction())
 }, [dispatch])
 
  
  return (
    <div className="products">
     {allBooks && allBooks
    /* .filter((val)=>{
              if(search ==""){return val}
              else if (val.title.toLowerCase().includes(search.toLowerCase()) || 
              (val.author.toLowerCase().includes(search.toLowerCase())) ||  
              (val.category.toLowerCase().includes(search.toLowerCase())))
    {return val}})*/
     .map((product) => (
      
        <Book key={product._id}  product={product}
           /*   bookId={product._id}
              title ={product.title} 
              author ={product.author} 
              language ={product.language} 
              category ={product.category} 
              bookCover ={product.bookCover} 
              pages ={product.pages} 
              price={product.price}*//>
      ))}
    </div>
    
  );
};


export default Books