import './HeaderMenuPr.scss';
import {Link} from 'react-router-dom';
export function HeaderMenuPr(props){ 
    const { menuScroll } = props;
    
    return (
        <>
            <div className={
          menuScroll
            ? "menu_wrap menu_wrapScroll"
            : "menu_wrap menu_wrapDefault"
        }>
               <div className='menu_container'>
                   <ul className='menu_list'>
                       <li className='menu_item border_top'>
                            <Link className='menu_link' to='/product'>
                                <h6>Đồng hồ nam</h6>
                            </Link>
                       </li>   
                       <li className='menu_item'>
                            <Link className='menu_link' to='/product'>
                                <h6>Đồng hồ nữ</h6>
                            </Link>
                       </li>   
                       <li className='menu_item'>
                            <Link className='menu_link' to='/product'>
                                <h6>Phụ kiện</h6>
                            </Link>
                       </li>   
                       <li className='menu_item'>
                            <Link className='menu_link' to='/product'>
                                <h6>Đồng hồ thông minh</h6>
                            </Link>
                       </li>   
                   </ul>
               </div>
            </div>
        </>
    )

}