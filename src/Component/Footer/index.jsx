import React from "react";
import instagramlogo from '../../Assets/Img-footer/instagramlogo.jpeg';
import whatsApp from '../../Assets/Img-footer/whatsApp.jpg';
import logo from '../../Assets/Img-footer/logo.png';
import logofacebook from '../../Assets/Img-footer/logofacebbok.png';
import './footer.css'

function Footer(){
    return(
        <>
        <div className="footer-container">
            <div className="div-logo-footer">
                <li>
                    <a href="/">
                        <img className="logo-footer-lhams" src={logo} alt="" />
                    </a>
                </li>

            </div>


            <div className="div-link">
        
                <nav className="nav-footer">
                    <ul className="link-left">
                        <li> <a href='/'> Inicio </a> </li>
                        <li> <a href='/sublimable'> Productos Sublimables </a> </li>
                        <li> <a href= '/vinil'> Productos con Vinil</a> </li>
                        <li> <a href='/servicio'> Servicios</a> </li>
                        <li> <a href='/sobreNosotros'> Sobre Nosotros </a> </li>
                        <li> <a href='/contactos'> Contactos </a> </li>
                        <li> <a href='/otros'> Otros</a> </li>
                    </ul>
                
                    <ul className="link-right">
                        <li> <a href='/cuenta'>Cuenta</a> </li>
                        <li> <a href="/pedido">Pedido</a> </li>
                        <li> <a href="/pedidos"> Pedidos</a> </li>
                    
                    </ul>
                </nav>
            </div>


            <div className="container-logo-redes">
                <div> <span className="span-letra">Siguenos en</span> </div>
                <div className="redes">
                    <div>
                        <li>
                            <a target="_blank" href="#" rel="noreferrer noopener">
                            <img className="img-instagram" src={logofacebook} alt="" /> 
                            </a>
                        </li>
                    </div>
                    <div>
                        <li>
                            <a  href="https://www.instagram.com/lhamsdj/" rel="noreferrer noopener">
                            <img className="img-instagram" src={instagramlogo} alt="" /> 
                            </a>
                        </li>
                    </div>
                
                </div>
                <div className="div-contactos">
                    <span className="contactos">Contactos</span>

                    <div>
                        <span className="descripcion">🎯 Calle San Martin,  parte atrás, # 7, <br /> D.M. Palo Verde,  Montecristi, R.D.
                            
                        </span>
                    </div>

                    <div className="div-numero">
                        <li>
                            <a target="_blank"  rel="noreferrer noopener">
                            <img className="img-instagram-whatsApp" src={whatsApp} alt="" />  
                            </a>
                        </li>
                        <span className="numero"> 809-254-5239 </span>
                    </div>

                </div>
            </div>
            {/* <span className="nombre-negocio"> Lhams-DJ</span> */}
        </div>
        <div className="copyright">
            <span>© 2024 Lhams-DJ, todos los derechos reservado <br /> </span>
        <span className="hija">Jemaya & Mayasa</span>
        </div>
        </>
    )
}

export { Footer}