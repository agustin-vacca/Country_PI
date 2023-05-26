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

const Filters = (paginad) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivities());
  }, [dispatch]);

  const [order, setOrder] = useState("");

  function handleFilteredCountrie(e) {
    dispatch(orderByContinent(e.target.value));

  }

  function handleSort(e) {
    e.preventDefault();
    dispatch(orderAlphabetical(e.target.value));
    setOrder(`Ordenado ${e.target.value}`);
  }

  function handleSortPop(e) {
    e.preventDefault();
    dispatch(orderByPop(e.target.value));
    setOrder(`Ordenado ${e.target.value}`);
  }

  const activities = useSelector((state) => state.allActivities);

  function handleFilterByAct(e) {
    e.preventDefault();
    e.target.value === "none"
      ? dispatch(getCountries())
      : dispatch(filterByAct(e.target.value));
  }

  return (
    <div className="flex justify-around">
      <div className="m-2 align-center border-2 bg-lime-700">
        <div>
          Alphabetical order
          <select onChange={(e) => handleSort(e)} className="border-4 p-2 m-2 sm:text-sm text-xs text-amber-400">
            <option></option>
            <option value="asc"> Upward </option>
            <option value="des"> Falling </option>
          </select>
        </div>

        <div>
          Numbers of inhabitants
          <select onChange={(e) => handleSortPop(e)} className="border-4 p-2 m-2 sm:text-sm text-xs text-amber-400">
            <option></option>
            <option value="may"> major to minor </option>
            <option value="men"> minor to major </option>
          </select>
        </div>

        <div>
          Search per continents
          <select
            onChange={(e) => handleFilteredCountrie(e)}
            className="border-4 p-2 m-2 sm:text-sm text-xs text-amber-400 "
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
            className="border-4 p-2 m-2 sm:text-sm text-xs text-amber-400 "
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
      </div>
    </div>
  );
};

export default Filters;
