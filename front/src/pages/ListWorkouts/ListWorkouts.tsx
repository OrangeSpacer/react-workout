import {useState} from 'react'
import { useMutation, useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { $api } from '../../components/api/api'
import Title from '../../components/Title/Title'

import './ListWorkouts.scss'


const ListWorkouts = () => {
  const [workouts,setWorkouts]:any = useState([])
  const history = useNavigate()

  const { isSuccess } = useQuery('get wrkouts',() => $api({
    url:'/workouts'
  }),{
    onSuccess(data){
      setWorkouts(data)
    },
    refetchOnWindowFocus: false
  })



  const {mutate: createWorkoutLog, isSuccess:isSuccessMutate, error} = useMutation('Create new workout log', ({workoutId}:any) => $api({
    url:'/workouts/log',
    type:"POST",
    body: {workoutId}
  }),{
    onSuccess(data){
      history(`/workout/:${data._id}`)
    }
  })  


  return (
    <div className='ListWorkouts'>
      <Title tag='h2' side='c'>
        Workouts list
      </Title>
      <div>
          {isSuccess && 
            workouts.map((item:any) => 
              <div key={item.name} onClick={() => createWorkoutLog({workoutId:item._id})} className="ListWorkouts__item">
                  <div>
                    {item.name}
                  </div>
                  <div>
                    Exercises value: {item.exercises.length}
                  </div>
              </div>
            )
          }
      </div>
    </div>
  )
}

export default ListWorkouts