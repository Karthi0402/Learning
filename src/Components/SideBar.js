import React from 'react'
import logo from '../Img/logo1.png';
import Upload from './upload';
const SideBar = () => {
  return (
    <div className='sidebar fixed'>
        <a href='#' className='logo bl'><img src={logo} className='bl'/></a>
        <Upload/>
    </div>
  )
}

export default SideBar