import { FieldProps } from './Field.props'

import './Field.scss'

const Field = ({type,changeValue,placeHolder,value}:FieldProps):JSX.Element => {
  return (
    <input className='field' type="text" placeholder={placeHolder} value={value} onChange={changeValue}/>
  )
}

export default Field