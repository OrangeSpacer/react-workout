import React from 'react'
import { CounterProps } from './Counter.props'

import './Counter.scss'

const Counter = ({title,value = 0,otherValue}:CounterProps):JSX.Element => {
  return (
    <div className='counter'>
        <div className='counter__title'>
          {title}
        </div>
        <div className='counter__value'>
            {value}
        </div>
    </div>
  )
}

export default Counter