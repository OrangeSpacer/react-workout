import {useState} from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import { $api } from '../../components/api/api'
import Title from '../../components/Title/Title'

const ListWorkouts = () => {
  const [workouts,setWorkouts]:any = useState([])


  const { isSuccess } = useQuery('get wrkouts',() => $api({
    url:'/workouts'
  }),{
    onSuccess(data){
      setWorkouts(data)
    },
    refetchOnWindowFocus: false
  })

  return (
    <div>
      <Title tag='h2' side='c'>
        Workouts list
      </Title>
      <div>
          {isSuccess && 
            workouts.map((item:any) => 
              <Link to={`/workout/:${item._id}`}>
                  <div>
                    {item.name}
                  </div>
                  <div>
                    Exercises value: {item.exercises.length}
                  </div>
              </Link>
            )
          }
      </div>
    </div>
  )
}

export default ListWorkouts