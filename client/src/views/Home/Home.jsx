import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, getActivities } from "../../redux/actions";
import Paginado from "../../components/Paginado/Paginado";
import Card from "../../components/Card/Card";
//import style from "../Home/Home.module.css";


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



  return (
    <div name="home" className="max-w-[9000px] h-screen bg-gradient-to-r from-green-800 to-lime-200">
      

      <div className="inline-flex row flex-wrap justify-center bg-gradient-to-r from-green-800 to-lime-200">
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
          <h1 className="absolute top-0 left-0 w-full h-screen bg-lime-700 flex flex-col justify-center items-center">Loading...</h1>
        )}
      </div>

      <div className=" flex justify-center xl:translate-y-32 p-2 bg-green-800">
        <Paginado
          countriesPerPage={countriesPerPage}
          allCountries={allCountries.length}
          paginado={paginado}
        />
      </div>
    </div>
  );
};

export default Home;
