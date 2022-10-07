import {useState} from 'react'
import { useMutation, useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { $api } from '../../components/api/api'
import cn from 'classnames'
import Title from '../../components/Title/Title'

import './Exercises.scss'
import Alert from '../../components/Alert/Alert'

const Exercises = () => {
    let {id}:any = useParams()
    const [exInfo,setExInfo]:any = useState()

    const newId = id.replace(":","")

    const {isSuccess,refetch} = useQuery('get Exercise', () => $api({
        url:`/exercises/log/${newId}`
    }),{
        onSuccess(data){
            setExInfo(data)
        },
        refetchOnWindowFocus:false
    })


    const {mutate:changeState,error} = useMutation('Change log state', ({timeIndex,key,value}:any) => $api({
        url: '/exercises/log',
        type: "PUT",
        body: {timeIndex,key,value, logId: newId}
    }),{
        onSuccess(data){
            refetch()
        }
    })



    const tableRowsName = [
        {name:"Previous"},
        {name:"Repeat & weight"},
        {name: "Completed"}
    ]
    console.log(exInfo)
    return (
        <div className='exerciseInfo'>
            {isSuccess &&
            <>
                <Title tag='h2'>
                    {exInfo.exercise.name}
                </Title>
                {error &&
                    <div>
                            <Alert type="error" text={error}/>
                    </div>
                }
                <div className='exTable'>
                    <div className='exTable__names'>
                        {tableRowsName.map(item => 
                            <div key={item.name} className='exTable__name'>
                                {item.name}
                            </div>
                        )}
                    </div>
                    <div>
                        {exInfo.times.map((item:any,index:number) => 
                            <div key={index} className='exTable__info'>
                                <div className={cn('exTable__item','exTable__multi')}>
                                    <input value={item.prevWeight} 
                                        className={cn('exTable__item_input',{'exTable__item_completed': item.completed===true})} 
                                        disabled={true}
                                    />
                                    <i className={cn({'exTable__item_completed': item.completed===true})}>
                                        kg/
                                    </i>
                                    <input value={item.prevRepeat} 
                                        className={cn('exTable__item_input',{'exTable__item_completed': item.completed===true})} 
                                        disabled={true}
                                    />
                                </div>
                                <div className={cn('exTable__item','exTable__multi')}>
                                    <input 
                                        value={item.weight} 
                                        onChange={e => changeState({
                                            timeIndex: index,
                                            key: "weight",
                                            value:e.target.value
                                        })} 
                                        className={cn('exTable__item_input',{'exTable__item_completed': item.completed===true})} 
                                        disabled={item.completed}
                                    />
                                    <i className={cn({'exTable__item_completed': item.completed===true})}>
                                        kg/
                                    </i>
                                    <input 
                                            value={item.repeat} 
                                            onChange={e => changeState({
                                                timeIndex: index,
                                                key: "repeat",
                                                value:e.target.value
                                            })} 
                                            className={cn('exTable__item_input',{'exTable__item_completed': item.completed===true})} 
                                            disabled={item.completed}
                                    />
                                </div>
                                <div className={cn('exTable__item','exTable__complete')} onClick={() => changeState({
                                            timeIndex: index,
                                            key: "completed",
                                            value:!item.completed
                                        })}>
                                    {item.completed ? <img src="../img/extable/checkTrue.svg" alt=""/>: <img src="../img/extable/checkFalse.svg" alt="" />}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </>}
        </div>
    )
}

export default Exercises