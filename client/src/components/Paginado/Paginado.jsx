import React from "react";
import style from "../Paginado/Paginado.module.css"

const Paginado = ({countriesPerPage, allCountries, paginado}) => {

    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(allCountries/countriesPerPage); i++) {
        pageNumbers.push(i)
    }

    return(
        <nav>
            <ul>
                {
                    pageNumbers &&
                    pageNumbers.map(number => (
                        
                        <button className={style.btnPag} key={number} onClick={() => paginado(number)}>{number}</button>
                        
                    ))
                }
            </ul>
        </nav>
    )

}

export default Paginado;