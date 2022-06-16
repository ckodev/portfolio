import React from 'react'
import { useState, useEffect } from 'react'
import Loading from '../components/Loading'

function PageContact() {


    const [isLoaded, setLoaded] = useState(false)
    
    const restPath = 'http://ckodev.com/ckodev/wp-json/wp/v2/pages/102?_embed';
    const [restData, setData] = useState([])
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(restPath)
            if ( response.ok ) {
                const data = await response.json()
                setData(data)
                setLoaded(true)
            } else {
                setLoaded(false)
            }
        }
        fetchData()
    }, [])


    const copyToClipboard = (content) => {
        const el = document.createElement("textarea");
        el.value = content;
        el.setAttribute("readonly", "");
        el.style.position = "absolute";
        el.style.left = "-9999px";
        document.body.appendChild(el);
        el.select();
        el.setSelectionRange(0, 99999);
        document.execCommand("copy");
        document.body.removeChild(el);
        alert('Email Copied!');
    };

    const handleClick = () => {
        copyToClipboard(restData.acf.email);
    };
  
    // const imgPath = restData._embedded['wp:featuredmedia'][0].link;
    // console.log(imgPath);
  
    return (
      <>
  
  
        { isLoaded ?
           <div className="entry-content">
             <section className='contact-me' id='contact-me'>
                <h2>{restData.acf.title}</h2>
                {/* <img src={imgPath} alt="" /> */}
                <p className='display-linebreak'>{restData.acf.message}</p>
                <p onClick={handleClick}>{restData.acf.email}</p>
              </section>
           </div>
        : 
          <Loading />
        }
      </>
    )
  }
  
  export default PageContact