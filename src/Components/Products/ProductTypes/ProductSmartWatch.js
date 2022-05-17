import './ProductSmartWatch.scss';
import {SmartWatchCard} from '../ProductCards/ProductCard';



export function ProductSmartWatch() {
    return (
        <>
            <div className="productSmartWatch_wrap">
                <div className='productSmartWatch_heading'>
                        <h1 className='productSmartWatch_name'>Đồng hồ thông minh</h1> 
                </div>
                <div className='productSmartWatch_type'>
                    <button>Đồng hồ nam</button>
                    <button>Đồng hồ nữ</button>
                </div>
                <div className='productSmartWatch_container grid wide'>
                    <div className='productSmartWatch_item row '>
                        <div className='col l-3 m-4 c-12 '>
                            <SmartWatchCard/>
                        </div>
                        <div className='col l-3 m-4 c-12 '>
                            <SmartWatchCard/>
                        </div>
                        <div className='col l-3 m-4 c-12 '>
                            <SmartWatchCard/>
                        </div>
                        <div className='col l-3 m-4 c-12 '>
                            <SmartWatchCard/>
                        </div>
                        <div className='col l-3 m-4 c-12 '>
                            <SmartWatchCard/>
                        </div>
                        <div className='col l-3 m-4 c-12 '>
                            <SmartWatchCard/>
                        </div>
                        <div className='col l-3 m-4 c-12 '>
                            <SmartWatchCard/>
                        </div>
                        <div className='col l-3 m-4 c-12 '>
                            <SmartWatchCard/>
                        </div>
                        <div className='col l-3 m-4 c-12 '>
                            <SmartWatchCard/>
                        </div>
                        <div className='col l-3 m-4 c-12 '>
                            <SmartWatchCard/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}