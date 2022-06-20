import React from 'react'


function Tools({tool}) {

    

  return (
   

    <div className='tool-tile'>
        <img src={tool.tool_image.url} alt={tool.tool_image.alt} />
        <h3>{tool.tool_title}</h3> 
    </div>


  )
}

export default Tools