import { BrowserRouter, useRoutes } from 'react-router-dom'
import { ArticleProvider } from '../../Context'
import Home from '../Home'
import MyOrders from '../MyOrders'
import MyOrder from '../MyOrder'
import MyAccount from '../MyAccount'
import SignIn from '../SignIn'
import NotFound from '../NotFound'
import NavBar from '../../Component/NavBar'
import Electrinic from '../Electronic'
import Costmetic from '../Cosmetic'
import { CheckOutSideMenu } from '../../Component/CheckOutSidemenu'

import '../../App.css'

const AppRoutes = ()=>{
  let routes = useRoutes([
    {path:"/", element: <Home />},
    {path:"/my-orders", element: <MyOrders />},
    {path:"/my-order", element: <MyOrder />},
    {path:"/my-account", element: <MyAccount />},
    {path:"/sign-in", element: <SignIn />},
    {path:"/my-electronic", element: <Electrinic />},
    {path:"/my-cosmetic", element: <Costmetic />},
    {path:"/*", element: <NotFound />},
  ])

  return routes
}

function App() {

  return (
    <>
    <ArticleProvider>
    <BrowserRouter>
       <AppRoutes />
       <NavBar />
      <CheckOutSideMenu />
      </BrowserRouter>
    </ArticleProvider>
   

    </>
  )
}

export default App
