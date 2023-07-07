import "./section.css";
import img from "./image4.png";
import img2 from "./vector2.png";
const Section3 = () => {
  return (
    <div className="section3">
      <div className="section3__container">
        <div className="section3__items1">
          <div className="item1__container">
            {" "}
            <div className="section3__item1">
              30% &nbsp;DISCOUNT <br />
              IN FIRST ORDER
            </div>
            <div className="section3__item2">
              GRAB YOURS
              <br /> SHAPED CANDLES
            </div>
          </div>
          <div className="section3__items1_2">
            <img src={img2} alt="" className="section3__items1_2_img" />
          </div>
        </div>
        <div className="section3__items2">
          <img src={img} alt="" className="section3__img" />
        </div>
      </div>
    </div>
  );
};

export default Section3;
