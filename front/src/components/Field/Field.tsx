import { FieldProps } from './Field.props'

import './Field.scss'

const Field = ({type="text",changeValue,placeHolder,value,required}:FieldProps):JSX.Element => {
  return (
    <input className='field' required={required} type={type} placeholder={placeHolder} value={value} onChange={changeValue}/>
  )
}

export default Field