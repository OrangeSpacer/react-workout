import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { useOutsideAlerter } from '../../hooks/useOutsideAlerter'
import Button from '../UI/Button/Button'

import './Hamburger.scss'
import { menu } from './HamburgerMenu'

const Hamburger = () => {
    const {ref, isComponentVisible, setIsComponentVisible} = useOutsideAlerter(false)
    const {setIsAuth} = useAuth()
    const showHandler = () => {
        setIsComponentVisible(!isComponentVisible)
    }

    const handleLogout = () => {
        localStorage.removeItem('token')
        setIsAuth(false)
        setIsComponentVisible(false)
    }

  return (
    <div className='hamburger' ref={ref}>
        <Button onClick={showHandler} className="hamburger__button">
            {isComponentVisible ? <img src="img/header/close.svg" alt="closeHamburger" style={{height:'24px'}}/> : <img src="img/header/hamburger.svg" alt="openhamburger" style={{height:'24px'}}/>}
        </Button>
        <nav className='hamburger__menu' style={isComponentVisible ? {opacity:1,transform: 'translateY(0)'}: {opacity:0,transform: 'translateY(-200%)'}}>
            <ul className='hamburger__menu_list'>
                {menu.map(item => 
                    <li className='hamburger__menu_item' key={item.title}>
                        <Link to={item.link} className='hamburger__link'>
                            {item.title}
                        </Link>
                    </li>
                )}
                <li className='hamburger__menu_item'>
                    <Button onClick={handleLogout}>
                        Logout
                    </Button>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Hamburger