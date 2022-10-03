import { Route, Routes, useLocation } from 'react-router-dom'
import {useState} from 'react'
import Layout from './components/Layout/Layout'
import { AuthContext } from './Context/AuthContext'
import { routes } from './routes'
import NotFound from './pages/404/NotFound'
const App = () => {
  const [isAuth,setIsAuth] = useState(false)
  const location = useLocation()

  return(
    <AuthContext.Provider value={{isAuth,setIsAuth}}>
      <Layout>
          <Routes>
              {routes.map((item:any) => {
                  if(item.auth && !isAuth){
                    return false
                  }
                  return(
                    <Route key={item.path} path={item.path} element={<item.component/>}/>
                  )
                }
              )}
              <Route path={location.pathname} element={<NotFound/>}/>
          </Routes>
      </Layout>
    </AuthContext.Provider>
  )
}

export default App