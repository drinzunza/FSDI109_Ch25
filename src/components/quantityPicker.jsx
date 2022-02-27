import { useState } from "react";
import "./quantityPicker.css";

const QuantityPicker = (props) => {
  let [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    let value = quantity + 1;
    setQuantity(value);
    props.onChange(value); // call the fn from the parent
  };

  const handleDecrease = () => {
    let value = quantity - 1;
    if (value > 0) {
      setQuantity(value);
      props.onChange(value);
    }
  };

  return (
    <div className="quantity-picker">
      <button className="btn btn-sm btn-info" onClick={handleIncrease}>
        +
      </button>

      <label>{quantity}</label>

      <button className="btn btn-sm btn-info" disabled={quantity === 1} onClick={handleDecrease}>
        -
      </button>
    </div>
  );
};

export default QuantityPicker;
