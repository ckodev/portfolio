import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Nav from '../components/Nav';
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

const featuredImage = ( featuredImageObject ) => {
  let imgWidth = featuredImageObject.media_details.sizes.full.width;
  let imgHeight = featuredImageObject.media_details.sizes.full.height;
  let img = `<img src="${featuredImageObject.media_details.sizes.full.source_url}" 
      width="${imgWidth}"
      height="${imgHeight}"
      alt="${featuredImageObject.alt_text}"
      srcset="${featuredImageObject.media_details.sizes.full.source_url} ${imgWidth}w, 
      ${featuredImageObject.media_details.sizes.large.source_url} 1024w,
      ${featuredImageObject.media_details.sizes.medium_large.source_url} 768w,
      ${featuredImageObject.media_details.sizes.medium.source_url} 300w"
      sizes="(max-width: ${imgWidth}) 100vw, ${imgWidth}px">`;
  return {__html: img}
}

  

  return (
    <BrowserRouter >
        <div className='wrapper'>
            <Header />
            
            <Routes>
                <Route path='/' element={<PageHome />}/>
                <Route path='/PageAbout' element={<PageAbout featuredImage={featuredImage}  />}/>
                <Route path='/PageProjects' element={<PageProjects handleProjectData={handleProjectData} featuredImage={featuredImage}/>}/>
                <Route path='/SingleProject/:id' element={<SingleProject projectData={projectData} featuredImage={featuredImage} />}/>
                <Route path='/PageContact' element={<PageContact featuredImage={featuredImage}  />}/>
            </Routes>
            
            <Nav projectData={projectData}/>
        </div>
    </BrowserRouter>
  )
}

export default AppRouter