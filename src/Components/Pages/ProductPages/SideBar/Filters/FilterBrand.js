import { Checkbox } from 'antd';
import 'antd/dist/antd.css';
import './FilterBrand.scss';
export const FilterBrand=()=> {
    function onChange(checkedValues) {
        console.log('checked = ', checkedValues);
      }
    return (
        <>
            <div className='filterBrand_wrap'>
                <h1 className='filterBrand_heading'>Nhãn hiệu -</h1>
                <div className='brand_name'>
                <Checkbox.Group onChange={onChange} style={{ width: '100%' }} >
                    <Checkbox value='1' style={{marginLeft: '7px'}}><p>OMEGA</p></Checkbox>
                    <Checkbox value='2'><p>LONGINES</p></Checkbox>
                    <Checkbox value='3'><p>CASIO</p></Checkbox>
                    <Checkbox value='4'><p>HUBLOT</p></Checkbox>
                    <Checkbox value='5'><p>APPLE WATCH</p></Checkbox>
                    <Checkbox value='6'><p>TAG HEUER</p></Checkbox>
                </Checkbox.Group>
                </div>
            </div>

        </>
    )
}