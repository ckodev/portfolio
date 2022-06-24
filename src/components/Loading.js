import loadingImg from "../images/lightning-gif.gif"

const Loading = () => {
    
    return (
       
            <div className="loading-container">
                 <img src={loadingImg} alt="Loading" className="loading" id="loading" />
            </div>
      
    )

}

export default Loading
