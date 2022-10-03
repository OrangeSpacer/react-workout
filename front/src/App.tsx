import { Route, Routes } from 'react-router-dom'
import {useState} from 'react'
import Layout from './components/Layout/Layout'
import { AuthContext } from './Context/AuthContext'
import Auth from './pages/Auth/Auth'
import Home from './pages/Home/Home'
import NewWorkout from './pages/NewWorkout/NewWorkout'
const App = () => {
  const [isAuth,setIsAuth] = useState(false)
  return(
    <Layout>
      <AuthContext.Provider value={{isAuth,setIsAuth}}>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/new-workout' element={<NewWorkout/>}/>
          <Route path='/auth' element={<Auth/>}/>
        </Routes>
      </AuthContext.Provider>
    </Layout>
  )
}

export default App