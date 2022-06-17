import React from 'react'


function SliderGallery({projectData}) {




console.log(projectData)

  return (
    <>
    <div className='more-projects-gallery'>
      {projectData.map(data => <img className="image-slides" src={data._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url} alt={data._embedded['wp:featuredmedia'][0].alt_text} />)}
    </div>

    </>
  )
}

export default SliderGallery