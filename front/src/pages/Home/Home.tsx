import Title from '../../components/Title/Title'
import Button from '../../components/UI/Button/Button'

import './Home.scss'

const Home = ():JSX.Element => {
  return (
    <div className='home'>
      <Title tag='h1' side='c'>
      EXERCISES FOR THE SHOULDERS
      </Title>
      <Button className='btn__main' onClick={() => console.log(1)}>
        New
      </Button>
    </div>
  )
}

export default Home