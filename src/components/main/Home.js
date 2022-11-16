import React from 'react'
import Unmounting from '../pages/Unmounting'
import Updating from '../pages/Updating'
import Mounting from '../pages/Mounting'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div className="main">
      <h1>Component Life Cycle</h1>
      <div className='lists' style={{color:"aliceblue"}}>
        <Link to="mounting"><li>Mounting</li></Link>
        <Link to="updating"><li>Updating</li></Link>
        <Link to="unmounting"><li>UnMounting</li></Link>
        </div>
      
    


    </div>
  )
}

export default Home