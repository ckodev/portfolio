import React from 'react'


function ProjectHighlights({highlight}) {



  return (
   

    <div className='project-highlights'>
        <div className="highlight-container">
          {/* <img src={highlight.highlight_image.url} alt={highlight.highlight_image.alt} /> */}
            <video src={highlight.highlight_video_mp4.url} type="video/mp4" autoPlay muted loop playsInline >
                {/* <source src={highlight.highlight_video_mp4.url} type="video/mp4" />
                <source src={highlight.highlight_video.url} type="video/webm" /> */}
                Sorry, your browser doesn't support this particular embedded video type.
            </video>
            <div className="highlight-text-container">
              <h3>{highlight.title}</h3>
              {/* <p className='display-linebreak'>{highlight.highlight_description}</p> */}
              <div className='display-linebreak' dangerouslySetInnerHTML={{__html:  highlight.highlight_wysi}}></div>
            </div>
        </div>
    </div>


  )
}

export default ProjectHighlights