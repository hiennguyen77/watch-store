import './HotProduct.scss';
import {HotProductCard} from './ProductCards/ProductCard';
export function HotProduct() {
    return (
        <>
            <div className="HotProduct_wrap">
                <div className='HotProduct_heading'>
                        <h1 className='HotProduct_name'>Sản phẩm bán chạy</h1> 
                </div>
                <div className='HotProduct_type'>
                    <button>Đồng hồ nam</button>
                    <button>Đồng hồ nữ</button>
                    <button>Phụ kiện</button>
                </div>
                <div className='HotProduct_container grid wide'>
                    <div className='HotProduct_item row'>
                        <div className='col l-3 m-4 c-12 '>
                            <HotProductCard/>
                        </div>
                        <div className='col l-3 m-4 c-12 '>
                            <HotProductCard/>
                        </div>
                        <div className='col l-3 m-4 c-12 '>
                            <HotProductCard/>
                        </div>
                        <div className='col l-3 m-4 c-12 '>
                            <HotProductCard/>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </>
    )
}