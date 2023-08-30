import './Navbar.css';
import {Link} from 'react-scroll';
import logo from './logo.png';
import contactImg from '../../assets/contact.png'
import menu from '../../assets/menu.png'
import { useState } from 'react';
import resume from '../../assets/resume.pdf'


const navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <nav className="navbar">
        <img src={logo} alt="" className="logo" />
    <div className="desktopMenu">
      <Link activeClass='active' to='intro' spy={true} smooth={true} duration={500} offset={-100} className="desktopMenuListItem">Home</Link>
      <Link activeClass='active' to='skills' spy={true} smooth={true} duration={500} offset={-60} className="desktopMenuListItem">About</Link>
      <Link activeClass='active' to='projects' spy={true} smooth={true} duration={500} offset={-45 } className="desktopMenuListItem">Projects</Link>
      <Link activeClass='active' to='contact' spy={true} smooth={true} duration={500} offset={15} className="desktopMenuListItem">Contact</Link>
    </div>
    <button className="desktopMenuBtn">
        <a href="../../assets/resume.pdf" download="resume.pdf" className='desktopMenuBtn'>Get Resume</a>
    </button>

    <img src={menu} alt="" className="mobMenu" onClick={() => setShowMenu(!showMenu)}/>
    <div className="navMenu" style={{display : showMenu? 'flex' : 'none'}}>
      <Link activeClass='active' to='intro' spy={true} smooth={true} duration={500} offset={-100} className="listItem" onClick={() => setShowMenu(false)}>Home</Link>
      <Link activeClass='active' to='skills' spy={true} smooth={true} duration={500} offset={-45} className="listItem" onClick={() => setShowMenu(false)}>About</Link>
      <Link activeClass='active' to='projects' spy={true} smooth={true} duration={500} offset={-45} className="listItem" onClick={() => setShowMenu(false)}>Projects</Link>
      <Link activeClass='active' to='contact' spy={true} smooth={true} duration={500} offset={10} className="listItem" onClick={() => setShowMenu(false)}>Contact</Link>
    </div>
  </nav>
  )
}

export default navbar