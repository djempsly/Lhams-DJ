import React, { useContext } from "react";
import { XMarkIcon } from '@heroicons/react/24/solid'
import { Context } from "../../Context";


const OrderCard = props =>{
    const {id, title, imageUrl, price, handleProduct} = props

    const context = useContext(Context)
  

    return(
        <div className='flex items-center justify-between my-4'>
            <div className='flex items-center px-4 gap-2'>
                <figure className='w-20 h-20'>
                    <img className='w-full h-full rounded-lg' src={imageUrl} alt={title} />
                </figure>
                <p> {title} </p>

            </div>
            <div className='flex items-center'>
                <p> {price} </p>
                <p> <XMarkIcon className= 'h-6 w-6 text-black cursor-pointer'
                onClick={()=>handleProduct(id)}
                /> </p>
            </div>
        </div>
    )
}

export default OrderCard
