import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  
    return (
        <div className="App-header">
            <h1>
            <Link to='/all'>
                All Info
            </Link>
            </h1>
            
        </div>
    )
}

export default Home
