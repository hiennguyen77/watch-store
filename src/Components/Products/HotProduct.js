import './HotProduct.scss';
import {ProductCard} from './ProductCards/ProductCard'
export function HotProduct(props) {
    const {products} = props;
    const hotProducts = products.slice(4, 8);

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
                        {hotProducts.map((hotProduct, index)=>
                        
                        <div className='col l-3 m-4 c-12 ' key={index}>
                            <ProductCard 
                                name={hotProduct.name}
                                URL ={hotProduct.URL}
                                price ={hotProduct.price}
                                salePrice ={hotProduct.salePrice}
                            />
                        </div>
                        
                        )}
                        
                    </div>
                </div>
            </div>
        </>
    )
}
