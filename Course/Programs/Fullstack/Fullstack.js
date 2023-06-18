import React from 'react'
import "./Fullstack.scss"
import frontb from "../../../../../../assets/Fullstack/front back.jpg"
import {FiDownload} from "react-icons/fi"
import { Button } from '@mui/material'
import Fullpdf from "../../../../../../assets/pdf/Fullstack.pdf"



const Fullstack = () => {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch(Fullpdf).then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'fullstack.pdf';
            alink.click();
        })
    })
}
  return (


   <div class="grid-container">
  <div class="item1">Full Stack Developement</div>
  <div class="item2">
  
  <ul>
    <li>Frontend Developement</li>
    <li>Html</li>
   <li>Css</li>
   <li>Bootstrap</li>
   <li>Javascript</li>

  </ul>
  
  </div>
  <div class="item3">
  <ul>
    <li>Frontend Developement</li>
    <li>Html</li>
   <li>Css</li>
   <li>Bootstrap</li>
   <li>Javascript</li>

  </ul>
  </div>
  
</div>
  )
}

export default Fullstack