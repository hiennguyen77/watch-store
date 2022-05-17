import './HeaderMenuBrand.scss';
import {Link} from 'react-router-dom';
export function HeaderMenuBrand(props){ 
        const {menuScroll} = props
    return (
        <>
            <div class={
          menuScroll
            ? "menuBrand_wrap menuBrandScroll"
            : "menuBrand_wrap menuBrandDefault"
        }>
               <div className='menuBrand_container'>
                   <ul className='menuBrand_list'>
                       <li className='menuBrand_item borderBrand_top'>
                            <Link className='menuBrand_link' to='/product'>
                                <h6>Tag Heuer</h6>
                            </Link>
                       </li>   
                       <li className='menuBrand_item'>
                            <Link className='menuBrand_link' to='/product'>
                                <h6>Omega</h6>
                            </Link>
                       </li>   
                       <li className='menuBrand_item'>
                            <Link className='menuBrand_link' to='/product'>
                                <h6>Longines</h6>
                            </Link>
                       </li>   
                       <li className='menuBrand_item'>
                            <Link className='menuBrand_link' to='/product'>
                                <h6>Casio</h6>
                            </Link>
                       </li>   
                       <li className='menuBrand_item'>
                            <Link className='menuBrand_link' to='/product'>
                                <h6>Hublot</h6>
                            </Link>
                       </li>   
                       <li className='menuBrand_item'>
                            <Link className='menuBrand_link' to='/product'>
                                <h6>Apple Watch</h6>
                            </Link>
                       </li>   
                   </ul>
               </div>
            </div>
        </>
    )

}