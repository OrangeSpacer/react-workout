import {useState} from 'react'
import { useMutation, useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Alert from '../../components/Alert/Alert'
import { $api } from '../../components/api/api'
import Exercise from '../../components/Exercise/Exercise'
import Title from '../../components/Title/Title'
import Button from '../../components/UI/Button/Button'

import './SingleWorkout.scss'

const SingleWorkout = () => {
    const [infoEx,setInfoEx]:any = useState([])
    const history = useNavigate()
    let {id}:any = useParams()
    let newId = id.replace(':','')
    
    const {isSuccess,data:content} = useQuery('Get workout', () => $api({
        url: `workouts/${newId}`
    }),{
        onSuccess(data){
            setInfoEx(data.exercises)
        }
    })

    const {mutate} = useMutation("Create exercise log", ({ exId, times }:any) => $api({
        url:'/exercises/log',
        type: "POST",
        body: {exerciseId: exId, times}
    }), {
        onSuccess(data){
            console.log(data)
            history(`/exercise/:${data._id}`)
        }
    }
    )

    return (
        <div className='singleWorkout'>
            {isSuccess && infoEx!==undefined ?
                <>
                    <Title tag='h2' side='c'>
                        {content.name}
                    </Title>
                    <div className='singleWorkout__time'>
                        {content.minutes + ' minutes training'}
                    </div>
                    <div className='singleWorkout__exercises'>
                        {content ? 
                            infoEx.map((item:any) => 
                            <Button onClick={() => mutate({exId:item._id, times:item.times})}  key={item.name} className='singleWorkout__link'>
                                <Exercise imgPath={`../img/exercise/${item.imageId}.svg`} nameEx={item.name} times={item.times}/>
                            </Button>):
                            <Alert type="error" text="Exercises not found"/>
                        }
                    </div>
                </>:
                <Alert type="error" text="Exercises not found"/>
            }
        </div>
    )
}

export default SingleWorkout