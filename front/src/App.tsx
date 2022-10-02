import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import NewWorkout from './pages/NewWorkout/NewWorkout'
const App = () => {
  return(
    <Layout>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/new-workout' element={<NewWorkout/>}/>
      </Routes>
    </Layout>
  )
}

export default App