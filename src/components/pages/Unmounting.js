import React from 'react'
import Home from '../main/Home'

const Unmounting = () => {
    
  return (
    <div>
        <Home/>
        <div style={{textAlign:"center"}}>
        <h1>UnMounting</h1>
        <p>This is the final phase of the lifecycle of the component that is the phase of unmounting the component              from the DOM. The following function is the sole member of this phase.

componentWillUnmount() Function: This function is invoked before the component is finally unmounted from the DOM i.e. this function gets invoked once before the component is removed from the page and this denotes the end of the lifecycle.</p>
    </div>
    </div>
  )
}

export default Unmounting