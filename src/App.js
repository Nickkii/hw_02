// import { useEffect, useState } from 'react';
import Book from './Components/Book';
import Music from './Components/Music';
import Recipe from './Components/Recipe';
import HeaderMenu from './Components/HeaderMenu';
import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
   return(
      <>
       <HeaderMenu/>
       
       <BrowserRouter >            
         <Routes>
               <Route  exact path ='/' element={<Music/>}></Route>
               <Route exact path ='/book' element={<Book/>}></Route>
               <Route  exact path ='/recipe' element={<Recipe/>}></Route>

         </Routes>
      </BrowserRouter>   
      </>
   )
  }




export default App;