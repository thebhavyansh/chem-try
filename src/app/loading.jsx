import React from 'react'
import Image from 'next/image'
import logo from "../assets/logo.png"
import './loading.css'
function loading() {
  return (
    <div className='cntr'><Image src={logo} /></div>
  )
}

export default loading