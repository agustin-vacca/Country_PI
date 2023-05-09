import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getActivities, getCountry } from "../../redux/actions";
import style from "../Detail/Detail.module.css";
import { Link } from "react-router-dom";

const Detail =  (props) => {

    const dispatch = useDispatch();
    const {id} = useParams()
    const country = useSelector( (state) => state.detail);

    useEffect( () => {
        dispatch(getCountry(id))
        dispatch(getActivities())
    },[dispatch,id])

    const activities = useSelector((state) => state.allActivities)

    useEffect( () => {
        console.log(activities)
        console.log(country)
    })

    return (
        <div className={style.card}>
            {
                country ?
                <div className={style.pais}>
                    <img className={style.flag} src={country.flag} alt="Images not found" />
                    <h2 className={style.name}>{country.name}</h2>
                    <h4 className={style.cont}>{country.continents}</h4>
                    <h4 className={style.id}>{country.id}</h4>
                    <h4 className={style.detalles}>Capital: {country.capital}</h4>
                    <h4 className={style.detalles}>Región: {country.subregion}</h4>
                    <h4 className={style.detalles}>Área: {country.area} km²</h4>
                    <h4 className={style.detalles}>Población: {country.population} Hab.</h4>
                </div> : <p>Loading ...</p>
            }

            <div className={style.act}>
                <h2 className={style.title}> Activities per Country </h2>
                {
                    //country.Activities && country.Activities.length ?
                    //country.Activities.map (e => {

                        activities ? 
                        activities.map (e => {
                        return(
                            <div>
                                <h4> {e.name} </h4>
                                <p> Difficulty: {e.difficulty} </p>
                                <p> Duration: {e.duration} </p>
                                <p> Season: {e.season} </p>
                            </div>
                        )
                    }) : <p> Activities not Found </p>
                } 
                <Link  to="/create"> <button className={style.btnA}> Create Activitie </button> </Link>
            </div>
                
        </div>
    )
}

export default Detail;