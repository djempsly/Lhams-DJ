import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { Context } from "../../Context"
import { ShoppingCartIcon } from '@heroicons/react/24/solid'


const NavBar = ()=>{
   const context = useContext(Context)
   const ActiveStyle = 'underline underline-offset-4 bg-blue-100'
   return(
      <>
      <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-7 px-7 h-3'>
      <ul className= 'flex items-center gap-4'>
          <li>
             <NavLink 
             to='/'
             className={({isActive})=> isActive? ActiveStyle: undefined }
             >
              Home
             </NavLink>
              
          </li>
          <li>
             <NavLink to='/deporte'>
              Deporte
             </NavLink>
              
          </li>
          <li>
             <NavLink to='/my-electronic'>
              Electrónica
             </NavLink>
              
          </li>
          <li>
             <NavLink to='/my-cosmetic'>
              Cosmetico
             </NavLink>
              
          </li>
      </ul>

      <input placeholder="Busca en tu buscador" />

      <ul className='flex items-center gap-4'>
          <div className='text-black/60'>
              jeff@gmail.com
          </div>
          <li>
             <NavLink to='/sign-in'>
             SignIn
             </NavLink>
              
          </li>
          <li>
             <NavLink 
             to='/my-account'
            className={({isActive})=> 
            isActive? ActiveStyle: undefined }
             >
              My Account
             </NavLink>
              
          </li>
          <li>
             <NavLink to='/my-orders'>
              My Orders
             </NavLink>
              
          </li>
          <li>
             <NavLink to='/my-order'>
              My Order
             </NavLink>
              
          </li>
          <li className='flex'>
            <ShoppingCartIcon className= 'h-6 w-6 text-black cursor-pointer'/> 
            <div className='bg-black text-white rounded-full h-6 w-6 items-center'>
            {context.count}   

            </div>

          </li>
      </ul>
  </nav>
      </>
     
   )
   
}

export default NavBar