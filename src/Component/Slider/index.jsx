import React from "react";
import img1 from '../../assets/SliderImg/img1.png'
import img2 from '../../assets/SliderImg/img2.png'
import img3 from '../../assets/SliderImg/img3.png'
import img4 from '../../assets/SliderImg/img4.png'
import './slider.css'

const ImagenSlider = [
{"img": img1},
{"img": img2},
{"img": img3},
{"img": img4},
]

const Sliders = () =>{

    return(
        <>
        <div className="slider-container mt-20"> 
            <div className="slider"> 
           

              <ul> 
                <li>
                <img src= {ImagenSlider[0].img} alt="" loading="lazy" />
                </li>
                <li>
                  <img src= {ImagenSlider[1].img} alt="" loading="lazy" />
                </li>
                <li>
                  <img src= {ImagenSlider[2].img} alt="" loading="lazy" />
                </li>
                <li>
                  <img src= {ImagenSlider[3].img} alt="" loading="lazy" />
                </li>
              </ul>

            
            </div>

        </div>
        </>
    )
}

export { Sliders}
