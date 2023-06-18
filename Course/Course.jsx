

import React, { useState } from 'react';
import {GiCursedStar} from "react-icons/gi"


import "./Course.scss";



import Product from "./Json";

import { useNavigate } from "react-router-dom";
import Pagination from './Pagination/Pagination';





const Course = () => {

  const [currentPage,setCurrentPage] = useState(1)
  const [postsPerPage,setPostsPerPage] = useState(8)


  const lastPostIndex = currentPage * postsPerPage  
  const firstPostIndex = lastPostIndex - postsPerPage  

  const currentPosts = Product.slice(firstPostIndex,lastPostIndex)

  



 







  let navigate = useNavigate();

 
  return <div className="shop-by-category">

    <div className='headv'> 
    
      <h3>Courses Peovided</h3>
      <GiCursedStar/>
     
    </div>

    <div className="categories">

      {
        currentPosts.map((Item) => {
          return (
            <>


              <div className="category" key={Item.userid} >
                <img src={Item.student} alt="" onClick={() => navigate(Item.component)} />
                

              </div>
              




            </>





          )
        }

       
        )
      }





    </div>

    <Pagination totalPosts={Product.length}
    postsPerPage={postsPerPage}
    currentPage={currentPage}
    setCurrentPage={setCurrentPage}
    
    />
   
  </div>
 
};

export default Course;
