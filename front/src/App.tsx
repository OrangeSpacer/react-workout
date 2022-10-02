import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Auth from './pages/Auth/Auth'
import Home from './pages/Home/Home'
import NewWorkout from './pages/NewWorkout/NewWorkout'
const App = () => {
  return(
    <Layout>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/new-workout' element={<NewWorkout/>}/>
        <Route path='/auth' element={<Auth/>}/>
      </Routes>
    </Layout>
  )
}

export default App