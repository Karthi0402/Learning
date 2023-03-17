import React from 'react'
import logo from '../Img/logo1.png';
const SideBar = () => {
  return (
    <div className='sidebar fixed'>
        <a href='#' className='logo bl'><img src={logo} className='bl'/></a>
    </div>
  )
}

export default SideBar