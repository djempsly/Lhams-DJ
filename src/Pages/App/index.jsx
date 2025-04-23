import React from 'react'
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
import { Modal } from '../../Component/Modal'
import { Oferta } from '../../Component/Oferta'

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
  const [openModal, setOpenModal] = React.useState(true)

  return (
    <>
    {openModal && (
    <Modal>
      <Oferta setOpenModal ={setOpenModal} />
    </Modal>

  )}
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
