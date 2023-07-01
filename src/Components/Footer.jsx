import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {


  return (
    <footer >
      <div className='footer-DH'>
        <p>Powered by</p>
        <img src="/images/DH.png" alt='DH-logo' width={150}/>
      </div>
      <div className='redes'>
        <Link><img src="/images/ico-instagram.png" alt="" width={30}/></Link>
        <Link><img src="../../public/images/ico-facebook.png" alt="imgFacebook" width={30}/></Link>
        <Link><img src="../../public/images/ico-tiktok.png" alt="imgTk" width={30}/></Link>
        <Link><img src="../../public/images/ico-whatsapp.png" alt="imgWap" width={30}/></Link>
      </div>
    </footer>
  )
}

export default Footer
