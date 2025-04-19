import React from "react";
import { useContext } from "react";
import { XMarkIcon } from '@heroicons/react/24/solid'
import { Context } from "../../Context";
import './style.css'


export const ProductDetail = ()=>{

    const context = useContext(Context)

    return(
        <aside className={`${context.openShoppingCart ? 'flex' : 'hidden'} product-detail border border-black rounded-lg  flex-col  fixed  right-0 bg-white`}>
            <div className='p-4 flex justify-between items-center'>
                <h2>Detail</h2>
                <div>
                    <XMarkIcon className= 'h-6 w-6 text-black cursor-pointer'
                    onClick={()=>context.closeOpenShoppingCart()}
                    />
                </div>
            </div>
           
                 <figure className=' px-4'>
                    <img className='w-full h-full rounded-lg' src={context.showProductCart.images} alt={context.showProductCart.tittle} />

                </figure>
                <p className='flex px-4 flex-col'>
                    <div className='flex justify-between'>
                    <span className='font-medium text-md px-4'> {context.showProductCart.title} </span>
                    <span className='font-medium text-2xl mt-4'> ${context.showProductCart.price} </span>
                    </div>
                    <span className=' font-light mt-4'> {context.showProductCart.description} </span>
                </p>
        </aside>
    )
}