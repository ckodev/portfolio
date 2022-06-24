import React from 'react'
import {NavLink} from 'react-router-dom'


function ProjectCard({project}) {

    const imgPath = project.acf.project_card_thumbnail.sizes.thumbnail
    const imgAltText = project.acf.project_card_thumbnail.alt

  return (
   

    <div className='project-card'>
      <NavLink to={`/SingleProject/${project.id}`}>
        <div className='card-left'>
            <img src={imgPath} alt={imgAltText} />
        </div>
        <h2>{project.title.rendered}</h2>
        <span>
          <p className='display-linebreak'>{project.acf.custom_excerpt}</p>
          <button >{project.acf.button}</button>
        </span>
      </NavLink>
    </div>


  )
}

export default ProjectCard











