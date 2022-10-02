import React, {useState, useEffect} from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData.js'
import './Navbar.css';
import { IconContext } from 'react-icons'

export default function Navbar() {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar);

    useEffect(() => {
        showSidebar();
      }, [])
  return (
    <>
    <IconContext.Provider value={{ color: '#fff' }}>
        
    <div className='navbar'>
        <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
        </Link>
    </div>
    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items'>
       
            <li className='navbar-toggle'>
           
                <Link to="#" className='menu-bars'>
                <img src="300.png" className='logo_img' width="380px" />
                  

                </Link>
            </li>
            <br /><br /><br />
            {SidebarData.map((item, index)=>{
                return (
                    <li key={index} className={item.cName}>
                        <Link to = {item.path}>
                            {item.icon}
                            <span>{item.title}</span>
                        </Link>
                    </li>
                )
            })}
        </ul>
    </nav>
    </IconContext.Provider>
    </>
  );
}
