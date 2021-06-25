import React from "react";
import cn from "classnames";
import "../styles/Body.scss";
import colorpaper from "../images/colorpaper.jpg";
import sunset from "../images/sunset.jpg";

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
      <div className={cn("intro_section2")}>
        <img src={sunset} alt="sunset"></img>
        <div className={cn("img_deco_copy")}>WEB DEVELOPMENT</div>
      </div>
      <div className={cn("intro_section3")}>
        <div className={cn("sub_title2")}>Tutor introduction</div>
        <div className={cn("main_title2")}>
          UX/UI DESIGNER & FORNT-END DEVELOPER
        </div>
        <div className={cn("section_desc")}>
          10년간 프리랜서로 활동하면서 주로 웹디자인, 퍼블리싱, 프론트개발 을
          진행하였습니다.
          <br /> 그동안 각종 해외 글로벌 어워드에서 위너로 선정되었으며, MUZ등
          다양한 해외 디자인 매체사에 포트폴리오가 소개되었습니다.
        </div>
        <div className={cn("career_list_section")}>
          <div className={cn("carrer_list_t")}>
            UX/UI DESIGNER FOR 10YEARS
            <br />
            FRONT-DEVELOPER FOR 10YEARS
            <br />
            AWWARDS HM(Hornarable mention) x4
            <br />
            CSS DESIGN AWARDS Special Kudo x3 <br />
            CSS WINNER SOTD(Site Of The Day) x2 <br />
            CSS WINTER STAR <br />
            MUZ EDITOR PICK x2
          </div>
          <div className={cn("career_deco")}>DE</div>
        </div>
      </div>
      <div className={cn("intro_section4")}>
        <div className={cn("main_title3")}>WHAT IS FOR DESIGNER</div>
        <div className={cn("main_desc")}>
          <div className={cn("text_b")}>
            디자이너의 시각에서 출발하는 디자이너를 위한 개발교육 <br />
            <p>
              개발역량을 가진 디자이너는 현업에서 좋은 대우를 받을 수 있습니다.
              <br />
              개발메커니즘을 이해하고 UX/UI를 기획 or 디자인하는 것<br />
              1px, 2px의 차이를 이해하고 직접 퍼블리싱을 하는 것은 분명 작업
              능률뿐만 아니라
              <br />
              프로젝트 퀄리티에서 큰 차이를 만들 수 있습니다.
            </p>
            <p></p>
            하지만, 많은 디자이너들이 개발 공부를 어려워합니다. <br />
            일반적으로 대부분의 개발 공부 자료들은 디자이너만을 타깃으로 하지
            않기 때문에
            <br />
            디자이너에겐 필요 이상의 정보들이 담겨 있습니다. <br />
            비주얼부터 압도적인 두꺼운 개발 서적들.
            <br />
            디자이너는 무엇을 공부해야 하고, 과연 어디까지 공부해야 적절한
            수준인지,
            <br />그 이외에도 다양한 요소들이 개발 공부에 대한 진입장벽을 높게
            만들고 있습니다.
            <p></p>
            넘쳐나는 정보들 속에 필요한 정보만을 접할 수 있도록 <br />
            '더' 알려주기보다 '덜' 알려주는 것에 집중했습니다.
            <br />
            제대로 된 공부를 하기 위해서는 양보다는 질과 방향이 중요합니다.
            <br />
            10년 동안 실무 디자인 및 개발 일을 진행하며 쌓인 경험으로
            <br />
            디자이너가 개발 공부를 쉽게 접근할 수 있도록 도와드립니다.
          </div>
        </div>
      </div>
      <div className={cn("intro_section5")}>
        <div className={cn("main_section_tl")}>
          <div className={cn("img_section")}>
            <img src={sunset} alt="img" />
          </div>
        </div>
      </div>
      <div className="sns_section">
        <span className="sns_deco"></span>
        <ul className={cn("sns_section_ul")}>
          <li className={cn("sns_section_li")}>
            <a href="https://www.instagram.com/">In</a>
          </li>
          <li className={cn("sns_section_li")}>
            <a href="https://velog.io">Ve</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Body;
