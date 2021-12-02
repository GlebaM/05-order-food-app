import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";

import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = (props) => {
  const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false);
  const { items } = useContext(CartContext);

  const numOfCartItems = items.reduce((currNum, item) => {
    return currNum + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${
    buttonIsHighlighted ? classes.bump : ""
  }`;

  const windowWidth = window.innerWidth;
  const windowOWidth = window.outerWidth;
  console.log(windowWidth, windowOWidth);

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setButtonIsHighlighted(true);
    const timer = setTimeout(() => {
      setButtonIsHighlighted(false);
    }, 300);
    return function cleanup() {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} {...props}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      {window.innerWidth >= 670 && <span>Your cart</span>}
      <span className={classes.badge}>{numOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
