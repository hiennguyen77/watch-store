import { useState,useEffect} from 'react'
import axios from 'axios';
import '../../../Grid/Grid.css'
import './ProductPage.scss';
import {ProductForMenCard,
        ProductForWomenCard,
         SmartWatchCard
    } from '../../Products/ProductCards/ProductCard'
import {FilterBrand} from './SideBar/Filters/FilterBrand';  
import {FilterPrice} from './SideBar/Filters/FilterPrice';  
import { message } from 'antd';

    

function ProductPage(props) {
   
    const [products, setProduct] = useState()

    

    // useEffect(() => {
    //     const getProduct = async()=>{
    //           try {
    //               const res = await axios.get(
    //                   `https://6273e9663d2b5100742474a5.mockapi.io/brands/${brands.id}/products`
    //               )
    //             //   console.log(res.data)
    //           } catch (error) {
    //               console.log(message.error)
    //           }  
    //     }
    //     getProduct()
    // }, [])
    return (
        <>
            <div className='productPage_wrap'>
             <div className='productPage_breadCrum'>
                

                
                
             </div>
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
                            <FilterBrand/>
                            <FilterPrice/>
                        </div>
                        <div className='col l-10'>
                            <div className='productPage_product row no-gutters'>
                                <div className='col l-3 m-3 c-12'>
                                   <ProductForMenCard/>
                                    
                                </div>
                                <div className='col l-3 m-3 c-12'>
                                   <ProductForWomenCard/>
                                    
                                </div>
                                <div className='col l-3 m-3 c-12'>
                                   <SmartWatchCard/>
                                    
                                </div>
                                <div className='col l-3 m-3 c-12'>
                                   <SmartWatchCard/>
                                    
                                </div>
                                <div className='col l-3 m-3 c-12'>
                                   <SmartWatchCard/>
                                    
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProductPage;