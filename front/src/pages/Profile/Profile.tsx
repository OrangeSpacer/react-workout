import {useEffect, useState} from 'react'
import { useQuery } from 'react-query'
import { $api } from '../../components/api/api'
import Counter from '../../components/UI/Counter/Counter'

import './Profile.scss'

const Profile = () => {
  const [profileInfo,setProfileInfo]:any = useState(0)
  const [name,setName] = useState('')

  const handleName = (e:any) => {
      setName(e.target.value)
      localStorage.setItem('name',e.target.value)
  }

  const {refetch} = useQuery('Profile',() => $api(
    {url:'/users/profile',
  }),{
      onSuccess(data){
          setProfileInfo(data)
          if(name === ''){
            setName(data.email)
          }
      },
      refetchOnWindowFocus: false,
      enabled: false
  })

  useEffect(() => {
    refetch()
    const value:any = localStorage.getItem('name')
    if(value!=null){
      setName(value)
    }
  },[profileInfo])

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




  return (
    <div className='profile'>
      <img src="/img/profile/profile.svg" alt="profileImg" className='profile__img'/>
      <div className='profile__name'>
        <input type="text" placeholder='Set your name(Click me)' value={name} onChange={(e) => handleName(e)} className="profile__name_input"/>
      </div>
      <div className='home__counters'>
        {profileResults.map((item,index) => <Counter key={index} title={item.title} value={item.value}/>)}
      </div>
  </div>
  )
}

export default Profile