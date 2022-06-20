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
            <Link to={`/SingleProject/${slide.id}`} onClick={scrollToTop}>
              <img key={index}  src={slide.acf.project_card_thumbnail.url} alt={slide.acf.project_card_thumbnail.alt} />
              <p>{slide.title.rendered}</p>
            </Link>
          )
        })}
      

      
    </section>
   
  )
}

export default SliderGallery

