import "./HeaderMenuBrand.scss";
import { Link } from "react-router-dom";

export const brands = [
  { brandName: "Tag Heuer", brandId: "brand_1", brandURL: "" },
  { brandName: "Omega", brandId: "brand_2", brandURL: "" },
  { brandName: "Longines", brandId: "brand_3", brandURL: "" },
  { brandName: "Casio", brandId: "brand_4", brandURL: "" },
  { brandName: "Hublot", brandId: "brand_5", brandURL: "" },
  { brandName: "Apple Watch", brandId: "brand_6", brandURL: "" },
];

export function HeaderMenuBrand(props) {
  const { menuScroll } = props;
  return (
    <>
      <div
        className={
          menuScroll
            ? "menuBrand_wrap menuBrandScroll"
            : "menuBrand_wrap menuBrandDefault"
        }
      >
        <div className="menuBrand_container">
          <ul className="menuBrand_list">
            {brands.map((brand) => (
              <li className="menuBrand_item " key={brand.brandId}>
                <Link className="menuBrand_link" to="/brand/brandId">
                  <h6>{brand.brandName}</h6>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
