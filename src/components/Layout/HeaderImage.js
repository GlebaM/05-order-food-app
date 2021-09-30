import React from "react";
import mealsImage from "../../assets/meals.jpg";

const HeaderImage = (props) => {
  return (
    <div className={props.classes["main-image"]}>
      <img src={mealsImage} alt="Table full of delicious food!!!" />
    </div>
  );
};

export default HeaderImage;
