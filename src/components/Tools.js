import React from 'react'


function Tools({tool}) {

    

  return (
   

    <div className='tool-tile'>

        
        <img src={tool.tool_image.url} alt={tool.tool_image.alt} />
        <p>{tool.tool_title}</p>
        
        
    </div>


  )
}

export default Tools