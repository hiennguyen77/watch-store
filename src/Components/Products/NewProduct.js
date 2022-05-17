import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './NewProduct.scss';
import { NewProductCard } from './ProductCards/ProductCard';
export function NewProduct() {

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
            <div className="new_product_wrap grid wide">
                <div className='new_product_container '>
                    <div className='new_product_heading'>
                        <h1 className='heading_name'>Sản phẩm mới</h1>
                    </div>
                    <div className='row '>

                    <div className="new_product_body col l-12 m-12 c-0">
                        <div className='new_product_item'>
                        <Slider {...settings}>
                             <NewProductCard/>
                             <NewProductCard/>
                             <NewProductCard/>
                             <NewProductCard/>
                             <NewProductCard/>
                             <NewProductCard/>
                             <NewProductCard/>
                             <NewProductCard/>
                             <NewProductCard/>
                        </Slider>   
                        </div>
                    </div>
                    </div>

                </div>
            </div>
        </>
    )
}