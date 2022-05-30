import "./AmountCounter.scss";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useContext } from "react";
import { productContext } from "../../../Contexts/ProductContext";

export const AmountCounter = () => {
  const { amount, setAmount } = useContext(productContext);
  console.log(amount);
  return (
    <>
      <div className="counter_wrap">
        <div className={amount <= 1 ? "disable" : "minus-btn"}>
          <i onClick={() => setAmount(amount - 1)}>
            <AiOutlineMinus />
          </i>
        </div>
        <h5>{amount}</h5>
        <div className="plus-btn">
          <i onClick={() => setAmount(amount + 1)}>
            <AiOutlinePlus />
          </i>
        </div>
      </div>
    </>
  );
};
