import React from 'react'
import { useParams, Link} from 'react-router-dom'

const SingleCard = ({props}) => {
    const { index } = useParams();
    return (
        <div>
           <h1>{props[index].title}</h1>
            <Link to="/all">Back</Link>
        </div>
    )
}

export default SingleCard
