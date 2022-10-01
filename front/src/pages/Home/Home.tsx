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

  return (
    <div className='home'>
      <Title tag='h1' side='c'>
      EXERCISES FOR THE SHOULDERS
      </Title>
      <Button className='btn__main' onClick={() => console.log(1)}>
        New
      </Button>
      <div className='home__counters'>
        {Object.entries(counters).map(item => <Counter title={item[0]} value={item[1].toString()}/>)}
      </div>
    </div>
  )
}

export default Home