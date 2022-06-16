import React from 'react'


function ProjectHighlights({highlight}) {

    

  return (
   

    <div className='project-highlights'>

        <h3>{highlight.title}</h3>
        <img src={highlight.highlight_image.sizes.medium} alt={highlight.highlight_image.alt} />
        <p className='display-linebreak'>{highlight.highlight_description}</p>
        
    </div>


  )
}

export default ProjectHighlights