import React from 'react';
import {useState} from 'react';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'

import {Link} from 'react-router-dom'



function SliderGallery({projectData}) {

  const [current, setCurrent] = useState(0);
  const length = projectData.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length -1 : current -1)
  }

  if (!Array.isArray(projectData) || projectData.length <= 0) {
    return null;
  }


  function scrollToTop() {
    window.scrollTo({top:0, behavior:'smooth'} );
  }
  console.log(current)

  return (

    <section className='slider'>
   
      <FaArrowAltCircleLeft className='arrow-left' onClick={prevSlide}/>
        {projectData.map((slide, index) => {
          return(

            
            <Link className={index === current ? "slide-active" : "slide"} key={index} onClick={scrollToTop} to={`/SingleProject/${slide.id}`}>
            {index === current && (<img className="slider-image" src={slide._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url} alt={slide._embedded['wp:featuredmedia'][0].alt_text} />)}
            </Link>
          )
        })}
      <FaArrowAltCircleRight className='arrow-right' onClick={nextSlide}/>

      
    </section>
   
  )
}

export default SliderGallery

