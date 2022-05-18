
import '../../../Grid/Grid.css'
import './ProductPage.scss';
import { ProductCard } from '../../Products/ProductCards/ProductCard';
import {FilterBrand} from './SideBar/Filters/FilterBrand';  
import {FilterPrice} from './SideBar/Filters/FilterPrice';  
import axios from 'axios';
import { useState, useEffect} from 'react'



    

function ProductPage(props) {
//    const {products}= props;
 
   const [products, setProducts] = useState([])

   useEffect(()=> {
     const getProduct = async ()=> {
       try {
         const res = await axios.get(
           'https://6273e9663d2b5100742474a5.mockapi.io/products'
         )
         setProducts(res.data)
        
       } catch (error) {
         console.log(error.message)
       }
     }
     getProduct()
   }, [])

    
    return (
        <>
            <div className='productPage_wrap'>
                <div className></div>
                    <div className='productPage_heading'>
                        <h1 className='productPage_heading_content'>
                            Tất Cả Sản Phẩm
                        </h1>
                    </div>
                        <select className='productPage_sort'>
                            <option>Tất cả</option>
                            <option>Giá :  Tăng dần</option>  
                            <option>Giá :  Giảm dần</option>
                            <option>Từ  :  A-Z</option>
                            <option>Từ  :  Z-A</option>
                        </select>
                <div className='productPage_container grid wide'>
                    <div className='productPage_body row no-gutters'>
                        <div className='col l-2'>
                           
                            <FilterBrand />
                           
                            <FilterPrice/>
                        </div>
                        <div className='col l-10'>
                            <div className='productPage_product row no-gutters'>
                                
                                {products.map((product, index)=>
                                
                                <div  className='col l-3 m-3 c-12' key={index} >
                                   <ProductCard 
                                   name={product.name}
                                   URL ={product.URL}
                                   price={product.price}
                                   salePrice={product.salePrice}
                                   
                                   />
                                    
                                </div>
                                )}
                                
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProductPage;