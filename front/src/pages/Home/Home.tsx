import Button from '../../components/UI/Button/Button'

import './Home.scss'

const Home = ():JSX.Element => {
  return (
    <div className='header'>
      <Button className='btn__main' onClick={() => console.log(1)}>
        Test
      </Button>
    </div>
  )
}

export default Home