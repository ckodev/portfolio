import React from 'react';
import {Link} from 'react-router-dom'



function SliderGallery({projectData}) {


  return (

    <section className='slider'>
        
        {projectData.map((slide, index) => {
          return(
            <Link key={index} to={`/SingleProject/${slide.id}`}>
              <img   src={slide.acf.project_card_thumbnail.url} alt={slide.acf.project_card_thumbnail.alt} />
              <p>{slide.title.rendered}</p>
            </Link>
          )
        })}
    </section>
   
  )
}

export default SliderGallery

