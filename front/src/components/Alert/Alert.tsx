import { AlertProps } from './Alert.props'
import cn from 'classnames'

import './Alert.scss'

const Alert = ({type,text}:AlertProps):JSX.Element => {
  return (
    <div className={cn('alert',{
        ['alert__success']: type === 'success',
        ['alert__warning']: type === 'warning',
        ['alert__error']: type === 'error'
    })}>
        {text}
    </div>
  )
}

export default Alert