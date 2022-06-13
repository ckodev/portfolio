import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Nav from '../components/Nav';
import PageHome from '../pages/PageHome';





function AppRouter() {
  return (
    <BrowserRouter >
        <div className='wrapper'>
            <Header />
            <Nav />

            <Routes>
                <Route path='/' component={<PageHome/>}/>
            </Routes>

        </div>
    </BrowserRouter>
  )
}

export default AppRouter