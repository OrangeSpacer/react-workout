import { useState } from 'react'
import Field from '../../components/Field/Field'
import Title from '../../components/Title/Title'
import Button from '../../components/UI/Button/Button'
import cn from 'classnames'
import './NewExercise.scss'
import { useMutation } from 'react-query'
import { $api } from '../../components/api/api'
import Alert from '../../components/Alert/Alert'

const data = [1,2,3,4]

const NewExercise = ():JSX.Element => {
  const [name,setName] = useState('')
  const [times,setTimes] = useState('')
  const [imageId,setImageId] = useState(1)

  const {mutate, error, isLoading, isSuccess} = useMutation('Create new exercise',() => $api({
    url:'/exercises',
    type:'POST',
    body: { name, times,  imageId}
  }),{
    onSuccess(){
      setName('')
      setTimes('')
      setImageId(1)
    }
  })

  
  const handleSubmit = (e:any) => {
    e.preventDefault()
    if(name && times && imageId){
      mutate()
    }
    else{
      console.log('Заполни все поля')
    }
  }

  const timesHandler = (e: any) => {
    if(e.target.value > 0){
      setTimes(e.target.value)
    }
    else{
      setTimes('')
    }
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
        <>
          {error && <Alert type="error" text={error}/>}
          {isSuccess && <Alert type="success" text='Exercise success create'/>}
        </>
        <form onSubmit={handleSubmit} className="newWorkout__form">
          <Field placeHolder='Name exercise' type='text' value={name} changeValue={nameHandler}/>
          <Field placeHolder='Times(number)' type='number' value={times} changeValue={timesHandler}/>
          <div className="newWorkout__form_types">
            {data.map((item,index) => <img key={index} src={`/img/exercise/${item}.svg`} alt="type" onClick={() => setImageId(item)} className={cn({['activeImg']: imageId === item})}/>)}
          </div>
          <Button onClick={() => console.log('Действие')} className={cn("btn","btn__main")}>
            Create
          </Button>
        </form>
    </div>
  )
}

export default NewExercise