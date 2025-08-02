import React from 'react'
import footer from "../../static/footer.json"
import {MdPlace} from "react-icons/md";
import { CiMail } from "react-icons/ci";
import {TbMailPlus} from "react-icons/tb"
import { NavLink } from 'react-router-dom';

const Footer = () => {
    const footerIcon = {
        MdPlace: <MdPlace/>,
        IoCallSharp: <CiMail/>,
        TbMailPlus: <TbMailPlus/>
    }
  return (
    <footer className='footer-section'>
        <div className='container grid grid-three-cols'>
            {
                footer.map((cur,idx)=>{
                    const {icon,title,detils} = cur
                    return (
                        <div className='footer-contact' key={idx}>
                            <div className='icon'>{footerIcon[icon]}</div>
                            <div className='footer-contact'>
                                <p>{title}</p>
                                <p>{detils}</p>
                            </div>
                        </div>
                    )
                })
                
            }
        </div>

        <div className='copyright-area'>
            <div className='container'>
                <div className=' grid grid-two-col'>
                    <div className='copyright-text'>
                        <p>
                            Copyright &copy; 
                            <NavLink to="/">
                                tech

                            </NavLink>
                        </p>
                    </div>

                    <div className='footer-menu'>
                        <ul>
                            <li>
                                <NavLink to="/">
                                Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="contact">
                                    Contact

                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>


    </footer>
  )
}

export default Footer