import React from "react";
import { FiX } from "react-icons/fi";
import madre from '../../Assets/image.png'
import './Oferta.css'

function Oferta (props){
  const cerrar = ()=>{
    props.setOpenModal(false)
  } 
    return (
      <>
            <div className="component-container">
                <img src={madre} alt="" className="imagen-oferta" loading="lazy" />
              
              <div className="cierra-oferta">
                <FiX onClick={cerrar} className="cierra" />
              </div>
            </div>
    
        </>
    )
}

export {Oferta}