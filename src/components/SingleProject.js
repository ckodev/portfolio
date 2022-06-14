import React from 'react'
import {useParams} from 'react-router-dom'

function SingleProject() {

    const { id } = useParams();
    const restPath = `https://ckodev.com/ckodev/wp-json/wp/v2/ckodev-project/${id}?_embed`
    const [restData, setData] = useState([])
    const [isLoaded, setLoadStatus] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(restPath)
            if ( response.ok ) {
                const data = await response.json()
                setData(data)
                setLoadStatus(true)
            } else {
                setLoadStatus(false)
            }
        }
        fetchData()
    }, [restPath])

  return (
    <div>
        
    </div>
  )
}

export default SingleProject