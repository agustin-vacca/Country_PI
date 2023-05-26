import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getCountries } from "../../redux/actions";
import { FaBars, FaTimes } from "react-icons/fa";
import SearchBar from "../SearchBar/SearchBar";
import { useLocation } from "react-router-dom";
import Filters from "../../components/Filters/Filters";

const NavBar = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const [filter, SetFilter] = useState(false);

  const clickHandler = () => {
    SetFilter(!filter);
  };

  return (
    <div
      name="navBar "
      className=" bg-gradient-to-r from-green-800 to-lime-200 justify-around flex pt-1 "
    >
      <Link to="/home" className="md:text-2xl font-serif text-white">
        {" "}
        Home{" "}
      </Link>
      {location.pathname === "/home" && <SearchBar />}

      {/* Hamburger */}
      <div
        onClick={() => clickHandler()}
        className=" bg-green-800 xl:p-4 p-2 z-10 -translate-y-1 xl:translate-x-14"
      >
        {!filter ? <FaBars className="text-white"/> : <FaTimes className="text-white"/>}
      </div>

      {/* Filters */}

      <ul
        className={
          !filter
            ? "hidden"
            : "absolute top-0 left-0 w-9/12 h-screen bg-lime-700 flex flex-col justify-center items-center active:transform active:transition-opacity active:bg-opacity-80 active:duration-200"
        }
      >
        <li className="py-6 sm:text-4xl text-xl text-amber-400">
          {" "}
          <Link to="/create">
            {" "}
            Create Activity{" "}
          </Link>
        </li>
        <li className="sm:pt-6 pt-4 sm:text-4xl text-xl text-amber-400">
            Filters
        </li>
        <li className="sm:pt-2 pt-1 sm:text-xl text-sm text-white" >
          <Filters />
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
