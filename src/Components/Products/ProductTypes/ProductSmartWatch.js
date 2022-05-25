// import './ProductSmartWatch.scss';
// import {ProductCard} from '../ProductCards/ProductCard';
// import {useState, useEffect} from 'react'
// import axios from 'axios';

// export function ProductSmartWatch() {

//     const [productSmartWatchs, setProductSmartWatch] = useState([])
//     useEffect(()=> {
//         const getProductSmartWatch =async()=>{
//             try {
//                 const res = await axios.get(
//                     'https://62846a5ca48bd3c40b6ef9ba.mockapi.io/smartWatchs'
//                 )
//                     setProductSmartWatch(res.data)
//             } catch (error) {
//                 console.log(error.message)
//             }
//         }
//         getProductSmartWatch()
//     },[])
//     return (
//         <>
//             <div className="productSmartWatch_wrap">
//                 <div className='productSmartWatch_heading'>
//                         <h1 className='productSmartWatch_name'>Đồng hồ thông minh</h1>
//                 </div>
//                 <div className='productSmartWatch_type'>
//                     <button>Đồng hồ nam</button>
//                     <button>Đồng hồ nữ</button>
//                 </div>
//                 <div className='productSmartWatch_container grid wide'>
//                     <div className='productSmartWatch_item row '>
//                         {productSmartWatchs.map((productSmartWatch, index)=>

//                         <div className='col l-3 m-4 c-12 ' key={index}>
//                             <ProductCard
//                                 name={productSmartWatch.name}
//                                 URL ={productSmartWatch.URL}
//                                 price ={productSmartWatch.price}
//                                 salePrice ={productSmartWatch.salePrice}
//                             />
//                         </div>
//                         )}

//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }
