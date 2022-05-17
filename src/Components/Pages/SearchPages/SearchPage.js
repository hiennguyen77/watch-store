import {FiSearch} from 'react-icons/fi'


import "./SearchPage.scss";





export const SearchPage = () => {
  return (
    <>
      <div className="searchPage_wrap">
        <div className='inputSearch_container'>
            <input className='inputSearch' type='text' placeholder="Tìm kiếm..."/>
            <i className='searchPage_icon'>
                <FiSearch/>
            </i>
        </div>
      </div>
    </>
  );
};
