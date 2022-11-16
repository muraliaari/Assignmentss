import React from 'react'
import {Link} from "react-router-dom"
import Home from '../main/Home'

const Mounting = () => {
  return (
    <div>
        <Home/>
        <div style={{textAlign:"center"}}>
        <h1>Mounting</h1>
        <p>Mounting is the phase of the component lifecycle when the initialization of the component is completed and the component is mounted on the DOM and rendered for the first time on the webpage. Now React follows a default procedure in the Naming Conventions of these predefined functions where the functions containing “Will” represents before some specific phase and “Did” represents after the completion of that phase. The mounting phase consists of two such predefined functions as described below.</p>
    </div>
    </div>
  )
}

export default Mounting