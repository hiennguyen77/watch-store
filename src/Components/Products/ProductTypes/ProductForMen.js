import './ProductForMen.scss';
import {ProductCard} from '../ProductCards/ProductCard';
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react'
import axios from 'axios';



export function ProductForMen() {
    const [productForMens, setProductForMens] = useState([])
    useEffect(()=> {
        const getProductMen =async()=>{
            try {
                const res = await axios.get(
                    'https://6273e9663d2b5100742474a5.mockapi.io/productForMens'
                )
                setProductForMens(res.data)
                
            } catch (error) {
                console.log(error.message)
            }
        }
        getProductMen()
    },[])

    
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
                        {productForMens.map((productForMen, index)=>
                        <div className='col l-3 m-4 c-12 ' key={index}>
                            <ProductCard 
                                name={productForMen.name}
                                URL ={productForMen.URL}
                                price={productForMen.price}
                                salePrice ={productForMen.salePrice}
                            />
                        </div>
                        
                        )}
                       
                    </div>
                </div>
            </div>
        </>
    )
}