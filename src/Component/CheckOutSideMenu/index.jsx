import React from "react";
import { useContext } from "react";
import { XMarkIcon } from '@heroicons/react/24/solid'
import { Context } from "../../Context";
import OrderCard from "../OrderCard";
import { totalPrice } from "../Stils";

import './CheckSideMenu.css'


export const CheckOutSideMenu = ()=>{

    const context = useContext(Context)

    const handleProduct = (id) =>{
        const filteredProduct = context.showCart.filter(product => product.id != id)
        context.setShowCart(filteredProduct)
        context.setCount(context.count - 1)

    }

    return(
        <aside className={`${context.checkOutSideMenu ? 'flex' : 'hidden'} check-out-side-menu border border-black rounded-lg  flex-col  fixed  right-0 bg-white`}>
            <div className='p-4 flex justify-between items-center'>
                <h2>My orders</h2>
                <div>
                    <XMarkIcon className= 'h-6 w-6 text-black cursor-pointer'
                    onClick={()=>context.closeCheckOutSideMenu()}
                    />
                </div>
            </div>

            <div className='mt-4 overflow-y-scroll' >
            {
            context.showCart.map( product =>(
                
                <OrderCard 
                key={product.id}
                id={product.id}
                title={product.title}
                imageUrl = {product.images}
                price = {product.price}
                handleProduct = {handleProduct}

                />
            ))
           }

            </div>

            <div>
                <p>Total:</p>
                <p>$ {totalPrice(context.showCart)} </p>
            </div>
      
        
        </aside>
    )
}