import { useNavigate } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import Title from '../../components/Title/Title'
import Button from '../../components/UI/Button/Button'
import Counter from '../../components/UI/Counter/Counter'

import './Home.scss'

const Home = ():JSX.Element => {

  const counters = {
    minutes: 7,
    workouts: 1,
    kgs: 5
  }

  const history = useNavigate()

  return (
    <Layout>
      <div className='home'>
        <Title tag='h1' side='c'>
          EXERCISES FOR THE SHOULDERS
        </Title>
        <Button className='btn__main' onClick={() => history('/new-workout')}>
          New
        </Button>
        <div className='home__counters'>
          {Object.entries(counters).map(item => <Counter key={item[0]} title={item[0]} value={item[1].toString()}/>)}
        </div>
      </div>
    </Layout>
  )
}

export default Home