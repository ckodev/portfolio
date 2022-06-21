import React from 'react'
import { useLocation } from "react-router-dom"
import {useState, useEffect} from 'react'


function Tools({tool}) {

  console.log(tool.tool_image.ID)

  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  const [activeClass, setActiveClass] = useState('')

  useEffect(() => {

      const changeAccentColor = () => {
          if (splitLocation[2] === '15') {
              setActiveClass('flower-box')
          } else if (splitLocation[2] === '14') {
              setActiveClass('portfolio')
          } else if (splitLocation[2] === '13') {
              setActiveClass('ghost-bomber')
          } else if (splitLocation[2] === '12') {
              setActiveClass('mustard')
          } else {
              setActiveClass('')
          }
      }
      changeAccentColor()
  }, [splitLocation])
    

  return (
   

    <div className='tool-tile'>
        <img className={activeClass} src={tool.tool_image.url} alt={tool.tool_image.alt} />
        <h3>{tool.tool_title}</h3> 
    </div>


  )
}

export default Tools