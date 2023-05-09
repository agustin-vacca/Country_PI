import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getCountries, getCountryByName } from "../../redux/actions";
import style from "./NavBar.module.css"

const NavBar = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCountries())
    },[dispatch])

    const [name,setName] = useState("");

    const inputChangeHandler = (name) => {              
        dispatch(getCountryByName(name))
    }

    const clickHandler = (event) => {
        event.preventDefault();
        dispatch(getCountries());
    }

    return(
        <div className={style.mainCointeiner}>
            <Link to = "/home" className={style.btnNav} > Home </Link>
            <div className={style.searchBar}>
                <input type="text" value={name} placeholder="Find your new destination" 
                onChange={ (e) => {setName(e.target.value); inputChangeHandler(e.target.value) } } />
            </div>
            <Link to = "/create" className={style.btnNav} > Create Activity </Link>
        </div>
    )
}

export default NavBar;