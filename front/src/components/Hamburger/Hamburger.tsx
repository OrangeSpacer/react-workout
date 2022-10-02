import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../UI/Button/Button'

import './Hamburger.scss'
import { menu } from './HamburgerMenu'

const Hamburger = () => {
    const [show,setShow] = useState(false)

    const showHandler = () => {
        setShow(!show)
    }
  return (
    <div className='hamburger'>
        <Button onClick={showHandler} className="hamburger__button">
            {show ? <img src="img/header/close.svg" alt="closeHamburger" style={{height:'24px'}}/> : <img src="img/header/hamburger.svg" alt="openhamburger" style={{height:'24px'}}/>}
        </Button>
        <nav className='hamburger__menu' style={show ? {opacity:1,transform: 'translateY(0)'}: {opacity:0,transform: 'translateY(-200%)'}}>
            <ul className='hamburger__menu_list'>
                {menu.map(item => 
                    <li className='hamburger__menu_item' key={item.title}>
                        <Link to={item.link} className='hamburger__link'>
                            {item.title}
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    </div>
  )
}

export default Hamburger