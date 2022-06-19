import React from 'react';
import {Link} from 'react-router-dom'



function SliderGallery({projectData}) {

 


  function scrollToTop() {
    window.scrollTo({top:0, behavior:'smooth'} );
  }


  return (

    <section className='slider'>
   
      
        {projectData.map((slide, index) => {
          return(
            <Link className="slider-image-link" to={`/SingleProject/${slide.id}`} onClick={scrollToTop}>
              <img key={index}  src={slide._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url} alt={slide._embedded['wp:featuredmedia'][0].alt_text} />
              <p>{slide.title.rendered}</p>
            </Link>
          )
        })}
      

      
    </section>
   
  )
}

export default SliderGallery

