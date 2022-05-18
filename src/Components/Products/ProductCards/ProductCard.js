import './ProductCard.scss';
import {Link} from 'react-router-dom';

export const ProductCard=(props)=> {
const { name, URL, price, salePrice } = props;

    
    return (
        <>
            <div className='product_card_wrap'>
            <div className='product_card_container'>
                <Link to='/product' className='product_card_link'>
                    <img className='product_card_img'
                     src={URL}
                     alt='' />
                    <h6 className='product_card_name'>{name}</h6>
                </Link>
                <div className='product_card_price'>
                    <h4>{price}</h4>
                    <p>{salePrice}</p>
                </div>
                </div>
            </div>
        </>
    )
}
