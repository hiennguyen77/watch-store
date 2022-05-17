import './ProductAccessories.scss';
import {ProductAccessoriesCard} from '../ProductCards/ProductCard';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



export function ProductAccessories() {

    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        
      };

    return (
        <>
            <div className="productAccessories_wrap">
                <div className='productAccessories_heading'>
                        <h1 className='productAccessories_name'>Phụ kiện đồng hồ</h1> 
                </div>
                <div className='productAccessories_container grid wide'>
                    <div className='productAccessories_item row '>
                        <div className='col l-12 m-12 c-0'>
                        <Slider {...settings}>
                             <ProductAccessoriesCard/>
                             <ProductAccessoriesCard/>
                             <ProductAccessoriesCard/>
                             <ProductAccessoriesCard/>
                             <ProductAccessoriesCard/>
                             <ProductAccessoriesCard/>
                             <ProductAccessoriesCard/>
                             <ProductAccessoriesCard/>
                             <ProductAccessoriesCard/>
                             
                        </Slider>   
                        </div>

                       




                        
                       
                    </div>
                </div>
            </div>
        </>
    )
}