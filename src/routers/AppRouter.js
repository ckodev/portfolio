import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Nav from '../components/Nav';
import SingleProject from '../components/SingleProject';
import PageHome from '../pages/PageHome';





function AppRouter() {

  return (
    <BrowserRouter >
        <div className='wrapper'>
            <Header />
            
            <Routes>
                <Route path='/PageHome' element={<PageHome />}/>
                <Route path='/SingleProject/:id' element={<SingleProject />}/>
            </Routes>
            <Nav />
        </div>
    </BrowserRouter>
  )
}

export default AppRouter