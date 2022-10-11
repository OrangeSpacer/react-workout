import React from 'react'
import Header from '../Header/Header'
import { LayoutProps } from './Layout.props'

import './Layout.scss'
const Layout = ({children,...props}:LayoutProps):JSX.Element => {
  return (
    <div className='layout' {...props}>
        <Header/>
        <div className='layout__content'>
          {children}
        </div>
    </div>
  )
}

export default Layout