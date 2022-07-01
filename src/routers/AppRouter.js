import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
// import Nav from '../components/Nav';
import SingleProject from '../components/SingleProject';
import PageAbout from '../pages/PageAbout';
import PageHome from '../pages/PageHome';
import PageProjects from '../pages/PageProjects';
import PageContact from '../pages/PageContact';
import {useState} from 'react'





function AppRouter() {

  const [projectData, setProjectData] = useState([])

const handleProjectData = (newData) => {
      setProjectData(newData);
}



  

  return (
    <BrowserRouter >
        <div className='wrapper'>
            <Header />
            
            <Routes>
                <Route path='/' element={<PageHome />}/>
                <Route path='/PageAbout' element={<PageAbout  />}/>
                <Route path='/PageProjects' element={<PageProjects handleProjectData={handleProjectData}/>}/>
                <Route path='/SingleProject/:id' element={<SingleProject projectData={projectData} />}/>
                <Route path='/PageContact' element={<PageContact  />}/>
            </Routes>
            
        </div>
    </BrowserRouter>
  )
}

export default AppRouter