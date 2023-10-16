import React from 'react'
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom'

function MountNavbar() {
  return (
    <div>
        <Link to='/'><li>Home</li></Link>
        <Link to='/'><li>ContactUs</li></Link>
      
    </div>
  )
}

export default MountNavbar
