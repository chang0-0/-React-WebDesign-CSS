import React from "react";
import cn from "classnames";
import "../styles/Body.scss";
import colorpaper from "../images/colorpaper.jpg";
import ice from "../images/ice.jpg";

const Body = () => {
  return (
    <div>
      <div className={cn("intro_section1")}>
        <div className={cn("logo")}>
          <img className={cn("logoImg")} src={colorpaper} alt="pinkSalt"></img>
        </div>
        <div className={cn("site_title")}> ColorPaper </div>
        <div className={cn("main_title")}>
          디자이너에 의한,
          <br /> 디자이너를 위한,
        </div>
        <div className={cn("sub_title")}>
          Development Education for Designer
        </div>
        <div className={cn("copyright")}>
          Copyright(c) 2021 ColorPaper. All rights reserved
        </div>
      </div>
      <div className="sns_section">
        <span className="sns_deco"></span>
        <ul className={cn("sns_section_ul")}>
          <li className={cn("sns_section_li")}>
            <a href="https://www.instagram.com/_chang0_0/">In</a>
          </li>
          <li className={cn("sns_section_li")}>
            <a href="https://velog.io/@lifeisbeautiful">Ve</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Body;
