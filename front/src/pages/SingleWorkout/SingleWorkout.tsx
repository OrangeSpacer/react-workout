import { info } from 'console'
import {useState} from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Alert from '../../components/Alert/Alert'
import { $api } from '../../components/api/api'
import Exercise from '../../components/Exercise/Exercise'
import Title from '../../components/Title/Title'

import './SingleWorkout.scss'

const SingleWorkout = () => {
    const [infoEx,setInfoEx]:any = useState([])
    let {id}:any = useParams()
    let newId = id.replace(':','')
    const {isSuccess,data:content} = useQuery('Get workout', () => $api({
        url: `workouts/${newId}`
    }),{
        onSuccess(data){
            setInfoEx(data.exercises)
        }
    })

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
                            <Link to={`/exercise/${item._id}`} key={item.name} className='singleWorkout__link'>
                                <Exercise imgPath={`../img/exercise/${item.imageId}.svg`} nameEx={item.name} times={item.times}/>
                            </Link>):
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