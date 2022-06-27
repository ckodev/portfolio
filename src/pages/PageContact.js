import React from 'react'
import { useState, useEffect } from 'react'
import Loading from '../components/Loading'
import { FaEnvelope, FaCopy, FaWaveSquare } from 'react-icons/fa';

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

    function scrollToTop() {
      window.scrollTo({top:0, behavior:'smooth'} );
    }
    
  
    return (
      <>
  
  
        { isLoaded ?
           <div className="entry-content">
             <section className='contact-me-container' id='contact-me'>
                <h1 className='header-heading' onClick={scrollToTop}>{restData.acf.h1}</h1>
                <div className="h2-container-1">
                  <h2 className='page-heading'>{restData.acf.h2}</h2>
                  <FaWaveSquare/>
                </div>
                <div className="contact-message-container">
                  <img src={restData._embedded['wp:featuredmedia'][0].source_url} alt={restData._embedded['wp:featuredmedia'][0].alt_text} />
                  <div className="content-right-container">
                    <div className="h2-container-2">
                      <h2 className='page-heading'>{restData.acf.h2}</h2>
                      <FaWaveSquare/>
                    </div>
                    <p className='display-linebreak text-content'>{restData.acf.message_1} </p>
                  </div>
                </div>


                <div className="buttons-container">
                  <button onClick={handleClick}><p className='button-text'>Copy email address</p><FaCopy/></button>
                  <p className='email-address' onClick={handleClick}>{restData.acf.email}</p>
                  <a href={`mailto:${restData.acf.email}?subject=The%20Matrix%20was%20a%20documentary&body=I%20look%20forward%20to%20hearing%20from%20you!`}><button><p className='button-text'>Open email client</p><FaEnvelope/></button></a>
                </div>
               
               
              </section>
           </div>
        : 
          <Loading />
        }
      </>
    )
  }
  
  export default PageContact