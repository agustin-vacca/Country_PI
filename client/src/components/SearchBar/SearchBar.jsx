import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getCountryByName } from "../../redux/actions";

const SearchBar = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");

  const inputChangeHandler = (name) => {
    dispatch(getCountryByName(name));
  };

  return (
    <div className="flex xl:-translate-y-0 -translate-y-1">
      <input
      className=" rounded px-3 sm:px-20 xl:px-48"
        type="text"
        value={name}
        placeholder="Find your new destination"
        onChange={(e) => {
          setName(e.target.value);
          inputChangeHandler(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchBar;
