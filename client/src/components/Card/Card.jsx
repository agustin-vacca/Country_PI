import style from "./Card.module.css"
import { Link } from "react-router-dom";

const Card = (props) => {
    return (
        <div className={style.card}>
            <div>
                <img src={props.flag} alt={props.name} className={style.imgF} />
            </div>
            <p> Name:{props.name} </p>
            <p> Continents:{props.continents} </p>
            <Link to={`/countries/${props.id}`}>
                <button className={style.btnD}> Details </button>
            </Link>                
        </div>
    )
}

export default Card;