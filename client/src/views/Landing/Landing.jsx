//import style from "./Landing.module.css";
import { Link } from "react-router-dom";
import ImgSlider from "../../components/ImgSlider/ImgSlider";
import img1 from "../../Images/alpes.jpg";
import img2 from "../../Images/estados-unidos.jpg";
import img3 from "../../Images/rural.jpg";
import img4 from "../../Images/barcos.jpg";


const Landing = () => {
  const slides = [
    { url: img1, title: "alpes" },
    { url: img2, title: "ee-uu" },
    { url: img3, title: "rural" },
    { url: img4, title: "barcos" },
  ];

  return (
    <div name="landing" className="w-full min-h-screen bg-green-800">
      <h2 className="flex px-2 py-2 text-2xl text-white font-serif"> HuntTravel </h2>

      <div className="max-w-[9000px] mx-auto px-8 flex flex-col justify-center h-max">
        <h2 className="text-center text-4xl my-12 text-lime-200 font-serif">
          {" "}
          SEARCH YOUR ACTIVITY{" "}
        </h2>
        <ImgSlider className="justify-center p-3 h-max" slides={slides} />

        <div className="my-10">
          <Link to="/home">
            <button className=" font-serif bg-lime-700 text-white mt-4 border-2 px-6 py-3 my-8 flex items-center hover:bg-amber-400 hover:border-amber-400
            active:transform active:translate-y-1 transition-all">
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
