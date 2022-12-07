import React from 'react'
import style from '../../styles/Footer.module.css'

const Footer = () => {
  return (
    <div className={style.warna}>
    <h1 className={style.judul}>Eat,Cook,Repeat</h1>
    <br />
    <h3 className={style.isi1}>Share Your Best Recipe By Uploading Here !</h3>
    <div className={style.bawah}>
        <div className={style.merah}>
        <h5 className={style.jarak}>Product</h5>
        </div>
        
        <h5 className={style.jarak}>Company</h5>
        <h5 className={style.jarak}>Learn More</h5>
        <h5 className={style.jarak} >Get In Touch</h5>

    </div>
    </div>
  )
}

export default Footer
