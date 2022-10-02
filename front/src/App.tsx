import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import NewWorkout from './pages/NewWorkout/NewWorkout'
const App = () => {
  return(
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/new-workout' element={<NewWorkout/>}/>
    </Routes>
  )
}

export default App