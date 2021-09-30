import React, { Fragment, useContext } from "react";

import HeaderImage from "./HeaderImage";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React meals</h1>
        <HeaderCartButton onClick={props.addShowCart}></HeaderCartButton>
      </header>
      <HeaderImage classes={classes} />
    </Fragment>
  );
};

export default Header;
