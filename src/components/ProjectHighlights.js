import React from 'react'


function ProjectHighlights({highlight}) {

    console.log(highlight)

  return (
   

    <div className='project-highlights'>

        
        <div className="highlight-container">
          <img src={highlight.highlight_image.url} alt={highlight.highlight_image.alt} />
            <div className="highlight-text-container">
              <h3>{highlight.title}</h3>
              <p className='display-linebreak'>{highlight.highlight_description}</p>
            </div>
        </div>
        
    </div>


  )
}

export default ProjectHighlights