import React from 'react'
import { useLocation } from "react-router-dom"
import {useState, useEffect} from 'react'




function Tools({tool}) {


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
        <div className={activeClass} dangerouslySetInnerHTML={{__html: tool.svg_text}}></div>
        <h3>{tool.tool_title}</h3> 
    </div>
    



        


  )
}

export default Tools