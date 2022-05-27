export const prices = [
  {
    key: "key_1",
    label: "Tất cả",
    value: 1,
    callback: (props, setValue) => {
      const { allProducts, setFilterProducts } = props;
      setValue(1);

      setFilterProducts(allProducts);
    },
  },
  {
    key: "key_2",
    label: "Dưới 500,000đ",
    value: 2,
    callback: (props, setValue) => {
      const { allProducts, setFilterProducts } = props;
      setValue(2);

      const filterPrice = allProducts.filter((product) => {
        const finalPrice = product.salePrice
          ? product.salePrice
          : product.price;
        return finalPrice < 500000;
      });
      setFilterProducts(filterPrice);
    },
  },
  {
    key: "key_3",
    label: "500,000- 1,000,000đ",
    value: 3,
    callback: (props, setValue) => {
      const { allProducts, setFilterProducts } = props;
      setValue(3);
      const filterPrice = allProducts.filter((product) => {
        const finalPrice = product.salePrice
          ? product.salePrice
          : product.price;
        return finalPrice >= 500000 && finalPrice < 1000000;
      });
      setFilterProducts(filterPrice);
    },
  },
  {
    key: "key_4",
    label: "1,000,000- 2,000,000đ",
    value: 4,
    callback: (props, setValue) => {
      const { allProducts, setFilterProducts } = props;
      setValue(4);
      const filterPrice = allProducts.filter((product) => {
        const finalPrice = product.salePrice
          ? product.salePrice
          : product.price;
        return finalPrice >= 1000000 && finalPrice < 2000000;
      });
      setFilterProducts(filterPrice);
    },
  },
  {
    key: "key_5",
    label: "2,000,000- 3,000,000đ",
    value: 5,
    callback: (props, setValue) => {
      const { allProducts, setFilterProducts } = props;
      setValue(5);
      const filterPrice = allProducts.filter((product) => {
        const finalPrice = product.salePrice
          ? product.salePrice
          : product.price;
        return finalPrice >= 2000000 && finalPrice <= 3000000;
      });
      setFilterProducts(filterPrice);
    },
  },
  {
    key: "key_6",
    label: "Trên 5,000,0000đ",
    value: 6,
    callback: (props, setValue) => {
      const { allProducts, setFilterProducts } = props;
      setValue(6);
      const filterPrice = allProducts.filter((product) => {
        const finalPrice = product.salePrice
          ? product.salePrice
          : product.price;
        return finalPrice >= 5000000;
      });
      setFilterProducts(filterPrice);
    },
  },
];

export const sorting = [
  {
    key: "key_1",
    value: 1,
    label: "Sản phẩm nổi bật",
    callback: (props) => {
      const { allProducts, setFilterProducts } = props;
      const sorting = allProducts.sort((a, b) => {
        return 0;
      });

      setFilterProducts(sorting);
    },
  },
  {
    key: "key_2",
    value: 2,
    label: "Giá: Tăng dần",
    callback: (props) => {
      const { allProducts, setFilterProducts } = props;
      const sorting = allProducts.sort((a, b) => {
        return a.price - b.price;
      });

      setFilterProducts(sorting);
    },
  },
  {
    key: "key_3",
    value: 3,
    label: "Giá: Giảm dần",
    callback: (props) => {
      const { allProducts, setFilterProducts } = props;
      const sorting = allProducts.sort((a, b) => {
        return b.price - a.price;
      });

      setFilterProducts(sorting);
    },
  },
  {
    key: "key_4",
    value: 4,
    label: "Từ: A - Z",
    callback: (props) => {
      const { allProducts, setFilterProducts } = props;
      const sorting = allProducts.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });

      setFilterProducts(sorting);
    },
  },
  {
    key: "key_5",
    value: 5,
    label: "Từ: Z - A",
    callback: (props) => {
      const { allProducts, setFilterProducts } = props;
      const sorting = allProducts.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });

      setFilterProducts(sorting);
    },
  },
];
