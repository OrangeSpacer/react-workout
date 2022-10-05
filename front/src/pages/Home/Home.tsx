import { useState,useEffect } from 'react'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { $api } from '../../components/api/api'
import Title from '../../components/Title/Title'
import Button from '../../components/UI/Button/Button'
import Counter from '../../components/UI/Counter/Counter'
import { useAuth } from '../../hooks/useAuth'

import './Home.scss'


const Home = ():JSX.Element => {
  const {isAuth} = useAuth()
  const [profileInfo,setProfileInfo]:any = useState(0)

  const {isSuccess} = useQuery('Home',() => $api(
    {url:'/users/profile',
  }),{
      onSuccess(data){
          setProfileInfo(data)
      },
      refetchOnWindowFocus: false,
      enabled: isAuth
  })

  const profileResults = [
    {
      title: 'minutes',
      value:profileInfo.minutes
    },
    {
      title: 'workouts',
      value:profileInfo.workouts
    },
    {
      title: 'kgs',
      value:profileInfo.kgs
    },
  ]

  const history = useNavigate()

  return (
    <div className='home'>
      <Title tag='h1' side='c'>
        Start training
      </Title>
      <Button className='btn__main' onClick={() => history('/new-workout')}>
        New
      </Button>
      {(isSuccess && isAuth) && 
        <div className='home__counters'>
          {profileResults.map((item,index) => <Counter key={index} title={item.title} value={item.value}/>)}
        </div>
      }
    </div>
  )
}

export default Home