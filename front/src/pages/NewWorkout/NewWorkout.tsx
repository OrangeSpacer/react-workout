import { useEffect, useState } from 'react'
import Field from '../../components/Field/Field'
import Title from '../../components/Title/Title'
import Button from '../../components/UI/Button/Button'
import Select from 'react-select'
import './NewWorkout.scss'
import { useMutation, useQuery } from 'react-query'
import { $api } from '../../components/api/api'
import { useAuth } from '../../hooks/useAuth'
import Alert from '../../components/Alert/Alert'

const NewWorkout = ():JSX.Element => {
  const {isAuth} = useAuth()
  const [name,setName] = useState('')
  const [exercisesId,setExercisesId]:any = useState([])
  const [currentExercise,setCurrentExercise]:any= useState([])

  const {isSuccess} = useQuery('Get exercise', () => $api({
    url:'/exercises',
    type: "GET"
  }
  ),{
    onSuccess(data){
      setExercisesId(data)
    },
    enabled: isAuth,
    refetchOnWindowFocus: false
  })

  const {mutate,error, isSuccess: postSuccess} = useMutation('Create new Workout', ({exIds}:any) => $api({
    url:'/workouts',
    type: "POST",
    body: {name,exerciseIds: exIds}
  }),{
    onSuccess(){
      setName('')
      setCurrentExercise([])
    }
  })

  const options: {value:string,label:string}[] = exercisesId.map((item:any) => ({value:item._id,label:item.name}))
 
  const handleSubmit = (e:any) => {
    e.preventDefault()
    const exIds = currentExercise.map((item:any) => item.value)
    mutate({
      exIds
    })
  }

  const handleExercise = (e:any) => {
    setCurrentExercise(e)
  }

  const nameHandler = (e: any) => {
    setName(e.target.value)
  }
  return (
    <div className='newWorkout'>
        <div>
          <Title tag='h2' side='c'>
            Create new Workout
          </Title>
        </div>
          <>
            {error && <Alert type="error" text={error}/>}
          </>
          <>
            {postSuccess && <Alert type="success" text="Workoute create success"/>}
          </>
        <form onSubmit={handleSubmit} className="newWorkout__form">
          <Field placeHolder='Name' type='text' value={name} changeValue={nameHandler}/>
          {isSuccess && exercisesId && 
            <Select 
              classNamePrefix='newWorkout__select' 
              placeholder='Exercises' 
              isMulti={true} 
              value={currentExercise}
              onChange={(e) => handleExercise(e)} 
              options={options}
            />}
          <Button onClick={() => console.log('Действие')}>
            Create
          </Button>
        </form>
    </div>
  )
}

export default NewWorkout