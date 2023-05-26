//import style from "./Card.module.css"
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="w-[270px] h-[300px] bg-white rounded-lg shadow m-5 justify-center flex-col" >
      <img src={props.flag} alt={props.name} className="rounded-t-lg w-full max-h-40" />

      <div className="pb-5">
        <h5 className="mb-1 text-2xl font-serif tracking-tight text-lime-700"> Name: {props.name} </h5>
        <p className="mb-2 font-normal text-lime-700"> Continents: {props.continents} </p>
        <Link to={`/countries/${props.id}`}>
          <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-amber-400 rounded-lg hover:bg-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200"> Details </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
