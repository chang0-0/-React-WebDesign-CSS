import React from "react";
import cn from "classnames";
import "../styles/Body.scss";
import pink_salt from "../images/pink_salt.jpg";

const Body = () => {
  return (
    <div className={cn("intro_section1")}>
      <div className={cn("main_title")}>
        디자이너에 의한,
        <br /> 디자이너를 위한,
      </div>
      <div className={cn("sub_title")}>Development Education for Designer</div>
    </div>
  );
};

export default Body;
