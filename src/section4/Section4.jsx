import "./section4.css";
import img1 from "./image1.png";
import img2 from "./image2.png";
import img3 from "./image3.png";

const Section4 = () => {
  return (
    <div className="section4">
      <div className="section4__container">
        <div className="section4__items1">NEW ARRIVAL</div>
        <div className="section4__items2">
         <span>
            {" "}
            <img src={img1} alt="" className="section4__items2_img" />
          </span>

          <span>
            <img src={img2} alt="" className="section4__items2_img" />
          </span>
          <span>
            <img src={img3} alt="" className="section4__items2_img" />
          </span>
        </div>
        <div className="section4__items3">
          <button>SHOP</button>
        </div>
      </div>
    </div>
  );
};

export default Section4;
