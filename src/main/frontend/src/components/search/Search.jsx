import Activites from "../main/Activites";
import SearchBar from "./SearchBar";
import { useState } from "react";

const Search = () => {
  const [keyword, setKeyword] = useState("비대면");
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
