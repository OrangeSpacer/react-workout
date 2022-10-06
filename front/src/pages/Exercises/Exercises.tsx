import {useState} from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { $api } from '../../components/api/api'

const Exercises = () => {
    let {id}:any = useParams()
    const [exInfo,setExInfo] = useState()

    const newId = id.replace(":","")

    const {} = useQuery('get Exercise', () => $api({
        url:`/exercises/log/${newId}`
    }),{
        onSuccess(data){
            setExInfo(data)
        },
        refetchOnWindowFocus:false
    })
    console.log(exInfo)
    return (
        <div>Exercises</div>
    )
}

export default Exercises