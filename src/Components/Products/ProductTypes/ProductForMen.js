import './ProductForMen.scss';
import {ProductForMenCard} from '../ProductCards/ProductCard';
import {Link} from 'react-router-dom';



export function ProductForMen() {
    return (
        <>
            <div className="productForMen_wrap">
                <div className='productForMen_heading'>
                        <h1 className='productForMen_name'>Đồng hồ nam</h1> 
                </div>
                <div className='productForMen_container grid wide'>
                    <div className='productForMen_item row '>

                        <div className='col l-12 m-0 c-0 '>
                            <Link to=''>
                            <div className='productForMen_img_container'>
                                <img className='productForMen_img'
                                 alt='' 
                                 src='https://sc02.alicdn.com/kf/HTB1x6VmQMDqK1RjSZSyq6yxEVXaY.jpg'/>
                            </div>
                            </Link>
                        </div>
                     
                    </div>
                    <div className='productForMen_row row '>
                        <div className='col l-3 m-4 c-12 '>
                            <ProductForMenCard/>
                        </div>
                        <div className='col l-3 m-4 c-12 '>
                            <ProductForMenCard/>
                        </div>
                        <div className='col l-3 m-4 c-12 '>
                            <ProductForMenCard/>
                        </div>
                        <div className='col l-3 m-4 c-12 '>
                            <ProductForMenCard/>
                        </div>
                        <div className='col l-3 m-4 c-12 '>
                            <ProductForMenCard/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}