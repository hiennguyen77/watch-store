import "./SortProduct.scss";

export const SortProduct = (props) => {
  const { allProducts, setFilterProducts } = props;

  // const handleSorting = () => {
  //   const sorting = allProducts.sort((a, b) => {
  //     return a.price - b.price;
  //   });
  //   console.log(sorting);
  // };

  return (
    <>
      <select className="productPage_sort">
        <option>Tất cả</option>
        <option>Giá : Tăng dần</option>
        <option>Giá : Giảm dần</option>
        <option>Từ : A-Z</option>
        <option>Từ : Z-A</option>
      </select>
    </>
  );
};
