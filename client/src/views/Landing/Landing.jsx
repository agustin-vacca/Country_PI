//import style from "./Landing.module.css";
import { Link } from "react-router-dom";
import ImgSlider from "../../components/ImgSlider/ImgSlider";
import img1 from "../../Images/alpes.jpg";
import img2 from "../../Images/estados-unidos.jpg";
import img3 from "../../Images/rural.jpg";

const Landing = () => {
  const slides = [
    { url: img1, title: "alpes" },
    { url: img2, title: "ee-uu" },
    { url: img3, title: "rural" },
  ];

  return (
    <div name="landing" className="w-full h-screen bg-green-800">
      <h2 className="flex px-2 py-2 text-2xl text-white font-serif"> HuntTravel </h2>

      <div className="max-w-[9000px] mx-auto px-8 flex flex-col justify-center h-full">
        <h2 className="text-center text-4xl m-3 text-lime-200 font-serif">
          {" "}
          SEARCH YOUR ACTIVITY{" "}
        </h2>
        <ImgSlider className="justify-center p-3" slides={slides} />

        <div>
          <Link to="/home">
            <button className=" font-serif bg-lime-700 text-white mt-4 border-2 px-6 py-3 my-8 flex items-center hover:bg-amber-400 hover:border-amber-400">
              {" "}
              Welcome{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
