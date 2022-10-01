import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
const App = () => {
  return (
    <Layout>
        <Home/>
    </Layout>
  )
}

export default App