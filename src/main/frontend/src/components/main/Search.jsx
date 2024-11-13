import Activites from "./Activites";
import SearchBar from "../search/SearchBar";
import { useState } from "react";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const event = (data) => {
    setKeyword(data);
  };
  return (
    <>
      <SearchBar event={event}></SearchBar>
      <Activites keyword={keyword} />
    </>
  );
};

export default Search;
