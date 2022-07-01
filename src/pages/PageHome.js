import React from 'react'


import MustacheLeft from '../svgs/MustacheLeft'
import MustacheRight from '../svgs/MustacheRight'
import Cko from '../svgs/Cko'
import Dev from '../svgs/Dev'
import Dot from '../svgs/Dot'
import EyeBrowLeft from '../svgs/EyeBrowLeft'
import EyeBrowRight from '../svgs/EyeBrowRight'


function PageHome() {



  return (
    <>
            <div className="logo-container">
              <MustacheLeft />
              <MustacheRight />
              <Cko/>
              <Dev/>
              <Dot/>
              <EyeBrowLeft/>
              <EyeBrowRight/>
            </div>
    </>
  )
}

export default PageHome