import { Link, useLocation } from 'react-router-dom';

import {useState} from 'react';
import Sidebar from './sidebar';
import { faHome, faList, faCog } from '@fortawesome/free-solid-svg-icons';
export default function Navbar () {
    const [sidebar,setSidebar] = useState(false);
    const location = useLocation();
    const links = [
        {
            name: 'Home',
            path: "/",
            icon: faHome
        },
        {
            name: 'Recpies',
            path: "/recipes",
            icon: faList
        },
        {
            name: 'Settings',
            path: "/settings",
            icon: faCog
        }
    ]
    function showSidebar() {
        setSidebar(!sidebar);
    }
    return (
        <>
            <div className='navbar container'>
                <a href='#!' className="logo">kitchen<span>wizz</span>ard</a>
                <div className='nav-links'>
                    { links.map(link => (
                        <Link className={location.pathname == link.path ? "active" : ""} 
                            to={link.path} 
                            key={link.name}> 
                                    {link.name} 
                        </Link>
                    ))}
                    
                </div>
                <div onClick={() => setSidebar(true)} className={sidebar ? "sidebar-btn active" : "sidebar-btn"}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
            {sidebar && <Sidebar close={showSidebar} links={links} /> }
        </>
    );
}