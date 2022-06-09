import React from "react"
import { Button } from "react-bootstrap"


export default function ItemCounter({count, setCount, stock, onSubmit}) {

  const onAdd = () => {
    if(count < stock) {
      setCount(count + 1)
    }
  }

  const onDecrease = () => {
    if(count > 1) {
      setCount(count - 1)
    }
  }
  
  const StockButton = ({ handleOnClick, text }) => {
    return <Button className="stock-button" variant="outline-primary" onClick={() => handleOnClick()}>{text}</Button>;
  };


  const AddButton = ({handleOnSubmit}) => {
    return <Button className="btn add-button" variant="success" onClick={() => handleOnSubmit()}>Add to cart</Button>;
  };

  return (
    <div className="add-button-container">
      <StockButton text="-" handleOnClick={onDecrease}/>
      <span className="add-button-count">{count}</span>
      <StockButton text="+" handleOnClick={onAdd}/>
      <AddButton handleOnSubmit={onSubmit} />
    </div>
  );
}