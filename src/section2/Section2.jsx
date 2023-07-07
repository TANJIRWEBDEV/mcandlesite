import "./section2.css";
import img1 from "./section2img1.png";
import img2 from "./section2img2.png";
const Section2 = () => {
  return (
    <div className="section2">
      <div className="section2__container">
        <div className="section__items1">
          <img src={img1} alt="" className="section2__item1_img1" />

          <img src={img2} alt="" className="section2__item1_img2" />
        </div>
        <div className="section__items2">
          <h2>ABOUT US</h2>
          <div className="section__items2-2">
            HAVING NEW SHAPE <br /> IN LIFE <br />
            IS
            <br /> NECESSESARY
          </div>
          <div className="section__items2-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
            esse a. Molestiae nostrum accusantium minus quas quod consectetur
            est consequatur
          </div>
          <div className="section__items2-4">EXPLORE</div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
