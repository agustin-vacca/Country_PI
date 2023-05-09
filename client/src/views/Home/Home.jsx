import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCountries,
  orderAlphabetical,
  orderByPop,
  orderByContinent,
  getActivities,
  filterByAct,
} from "../../redux/actions";
import Paginado from "../../components/Paginado/Paginado";
import Card from "../../components/Card/Card";
import style from "../Home/Home.module.css";

const Home = () => {
  const allCountries = useSelector((state) => state.allCountrys);

  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 10;

  const indexOfLastCountrie = currentPage * countriesPerPage;
  const indexOfFirstCountrie = indexOfLastCountrie - countriesPerPage;
  const currentCountries = allCountries.slice(
    indexOfFirstCountrie,
    indexOfLastCountrie
  );

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivities());
  }, [dispatch]);

  const [order, setOrder] = useState("");

  function handleFilteredCountrie(e) {
    dispatch(orderByContinent(e.target.value));
    setCurrentPage(1);
  }

  function handleSort(e) {
    e.preventDefault();
    dispatch(orderAlphabetical(e.target.value));
    setCurrentPage(1);
    setOrder(`Ordenado ${e.target.value}`);
  }

  function handleSortPop(e) {
    e.preventDefault();
    dispatch(orderByPop(e.target.value));
    setCurrentPage(1);
    setOrder(`Ordenado ${e.target.value}`);
  }

  const activities = useSelector((state) => state.allActivities);

  function handleFilterByAct(e) {
    e.preventDefault();
    e.target.value === "none"
      ? dispatch(getCountries())
      : dispatch(filterByAct(e.target.value));
    setCurrentPage(1);
  }

  // function cambio(){
  //     e.preventDefault()
  // }

  return (
    <>
      <div className={style.header}>
        <div className={style.filtros}>
          <div>
            Alphabetical order
            <select onChange={(e) => handleSort(e)} className={style.selects}>
              <option></option>
              <option value="asc"> Upward </option>
              <option value="des"> Falling </option>
            </select>
          </div>

          <div>
            Numbers of inhabitants
            <select
              onChange={(e) => handleSortPop(e)}
              className={style.selects}
            >
              <option></option>
              <option value="may"> major to minor </option>
              <option value="men"> minor to major </option>
            </select>
          </div>

          <div>
            Search per continents
            <select
              onChange={(e) => handleFilteredCountrie(e)}
              className={style.selects}
            >
              <option value={"All"}></option>
              <option value={"South America"}>South America</option>
              <option value={"North America"}>North America</option>
              <option value={"Africa"}>África</option>
              <option value={"Asia"}>Asia</option>
              <option value={"Europe"}>Europa</option>
              <option value={"Oceania"}>Oceanía</option>
              <option value={"Antarctica"}>Antárctica</option>
            </select>
          </div>

          <div>
            Search per activities
            <select
              className={style.selects}
              onChange={(e) => handleFilterByAct(e)}
            >
              {activities.length === 0 ? (
                activities
              ) : (
                <select>
                  <option value="none"></option>
                  {activities.map((e) => (
                    <option value={e.name} key={e.id}>
                      {" "}
                      {e.name}{" "}
                    </option>
                  ))}
                </select>
              )}
            </select>
          </div>

          <button> Filtro verano </button>
        </div>
      </div>

      <div className={style.containerCards}>
        {currentCountries.length ? (
          currentCountries.map((e) => {
            return (
              <div>
                <Card
                  flag={e.flag}
                  name={e.name}
                  continents={e.continents}
                  key={e.id}
                  id={e.id}
                />
              </div>
            );
          })
        ) : (
          <h1>no hay paises</h1>
        )}
      </div>

      <div className={style.paginado}>
        <Paginado
          countriesPerPage={countriesPerPage}
          allCountries={allCountries.length}
          paginado={paginado}
        />
      </div>
    </>
  );
};

export default Home;
