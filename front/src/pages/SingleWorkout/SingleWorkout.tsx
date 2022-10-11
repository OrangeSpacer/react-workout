import {useEffect, useState} from 'react'
import { useMutation, useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Alert from '../../components/Alert/Alert'
import { $api } from '../../components/api/api'
import Exercise from '../../components/Exercise/Exercise'
import Title from '../../components/Title/Title'
import cn from "classnames"

import './SingleWorkout.scss'

const SingleWorkout = () => {
    const history = useNavigate()
    let {id}:any = useParams()
    let newId = id.replace(':','')
    
    const {isSuccess,data:content} = useQuery('Get workout', () => $api({
        url: `workouts/log/${newId}`
    }),{
        refetchOnWindowFocus:false
    })

    const {mutate:setWorkoutCompleted} = useMutation("Change log state", () => $api({
        url:'/workouts/log/completed',
        type: "PUT",
        body: {logId: newId}
    }), {
        onSuccess(){
            history(-1)
        }
    })

    useEffect(() => {
        if(isSuccess && content.exerciseLogs && 
            content.exerciseLogs.length === content.exerciseLogs.filter((log:any) => log.completed).length && content._id === newId) {
                setWorkoutCompleted()
            }
    },[content?.exerciseLogs])


    return (
        <div className='singleWorkout'>
            {isSuccess ?
                <>
                    <Title tag='h2' side='c'>
                        {content.workout.name}
                    </Title>
                    <div className='singleWorkout__time'>
                        {content.minutes + ' minutes training'}
                    </div>
                    <div className='singleWorkout__exercises'>
                        {content ? 
                            content.exerciseLogs.map((item:any,index:number) => 
                            <div onClick={() => history(`/exercise/:${item._id}`)}  key={index} className={cn('singleWorkout__link',{['singleWorkout__completed']: item.completed===true})}>
                                <Exercise imgPath={`../img/exercise/${item.exercise.imageId}.svg`} nameEx={item.exercise.name} times={item.exercise.times}/>
                            </div>):
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