import React from 'react'
import footerData from "../static/footer.json"
import { MdPlace } from "react-icons/md"
import { CiMail } from "react-icons/ci"
import { TbMailPlus } from "react-icons/tb"

const Footer = () => {
  const footerIcon = {
    MdPlace:<MdPlace/>,
    IoCallSharp:<CiMail/>,
    TbMailPlus:<TbMailPlus/>

  }
  return (
   <footer className='footer-section'>
    <div className='container grid grid-three-cols'>
      {
        footerData.map((cur,idx)=>{
          const {icon,title,details} = cur
          return (
            <div className='footer-contact' key ={idx}>
              <div className='icon'>{footerIcon[icon]}</div>
              <div className='footer-contact'>
                <p>{title}</p>
                <p>{details}</p>
              </div>

            </div>
          )
        })
      }
    </div>
   </footer>
  )
}

export default Footer