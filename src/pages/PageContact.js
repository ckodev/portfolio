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

 
    
  
    return (
      <>
  
  
        { isLoaded ?
           <div className="entry-content">
             <section className='contact-me-container' id='contact-me'>
                <h1 className='contact-me'>{restData.acf.h1}</h1>
                <h2 className=''>{restData.acf.h2}</h2>
                <p className='display-linebreak'>{restData.acf.message_1}</p>
                <img src={restData._embedded['wp:featuredmedia'][0].source_url} alt={restData._embedded['wp:featuredmedia'][0].alt_text} />
                <button onClick={handleClick}>Copy email address</button>
                <p onClick={handleClick}>{restData.acf.email}</p>
                <a href={`mailto:${restData.acf.email}?subject=The%20Matrix%20Doc?&body=I%20look%20forward%20to%20hearing%20from%20you!`}><button>Open email client</button></a>
               
                <p className='display-linebreak'>{restData.acf.message_2}</p>
              </section>
           </div>
        : 
          <Loading />
        }
      </>
    )
  }
  
  export default PageContact