import { Checkbox } from "antd";
import "antd/dist/antd.css";
import "./FilterBrand.scss";

export const FilterBrand = (props) => {
  const { allProducts, setFilterProducts } = props;

  function onChange(checkedValues) {
    // nhung-product có: brandId-nằm-trong-checkValues
    // nhung-product-thỏa-điều-kiện: checkValues-chứa-brandId
    const filterProduct = allProducts.filter((product) => {
      return checkedValues.includes(product.brandId);
    });

    if (filterProduct.length > 0) {
      setFilterProducts(filterProduct);
    } else {
      setFilterProducts(allProducts);
    }
    // console.log(filterProduct, allProducts, checkedValues);
  }

  return (
    <>
      <div className="filterBrand_wrap">
        <h1 className="filterBrand_heading">Nhãn hiệu -</h1>
        <div className="brand_name">
          <Checkbox.Group onChange={onChange} style={{ width: "100%" }}>
            <Checkbox value="brand_1" style={{ marginLeft: "7px" }}>
              <p>OMEGA</p>
            </Checkbox>
            <Checkbox value="brand_2">
              <p>LONGINES</p>
            </Checkbox>
            <Checkbox value="brand_3">
              <p>CASIO</p>
            </Checkbox>
            <Checkbox value="brand_4">
              <p>HUBLOT</p>
            </Checkbox>
            <Checkbox value="brand_5">
              <p>APPLE WATCH</p>
            </Checkbox>
            <Checkbox value="brand_6">
              <p>TAG HEUER</p>
            </Checkbox>
          </Checkbox.Group>
        </div>
      </div>
    </>
  );
};
