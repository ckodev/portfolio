import React from 'react'
import {NavLink} from 'react-router-dom'

function ProjectCard({project}) {

    const imgPath = project._embedded['wp:featuredmedia'][0].source_url
    const imgAltText = project._embedded['wp:featuredmedia'][0].alt_text

  return (
   

    <div className='project-card'>
      <NavLink to={`/SingleProject/${project.id}`}>
        <img src={imgPath} alt={imgAltText} />
        <h2>{project.title.rendered}</h2>
        <p>{project.acf.custom_excerpt}</p>
        <button>{project.acf.button}</button>
      </NavLink>
    </div>


  )
}

export default ProjectCard