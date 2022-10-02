import { useState } from 'react'
import Field from '../../components/Field/Field'
import Title from '../../components/Title/Title'
import Button from '../../components/UI/Button/Button'
import Select from 'react-select'
import './NewWorkout.scss'

const NewWorkout = ():JSX.Element => {
  const [name,setName] = useState('')
  const [exercises,setExercises] = useState()

  const options: {value:string,label:string}[] = [
    { value: 'ertehg56gre', label: 'Push-ups' },
    { value: 'trtfeg1123grg', label: 'Pull-ups' },
  ]

 
  const handleSubmit = () => {
    console.log('submit')
  }

  const nameHandler = (e: any) => {
    setName(e.target.value)
  }
  return (
    <div className='newWorkout'>
        <div>
          <Title tag='h2' side='c'>
            Create new Exercise
          </Title>
        </div>
        <form onSubmit={handleSubmit} className="newWorkout__form">
          <Field placeHolder='Name' type='text' value={name} changeValue={nameHandler}/>
          <Select classNamePrefix='newWorkout__select' placeholder='Exercises' isMulti={true} value={exercises} onChange={() => console.log(1)} options={options}/>
          <Button onClick={() => console.log('Действие')}>
            Create
          </Button>
        </form>
    </div>
  )
}

export default NewWorkout