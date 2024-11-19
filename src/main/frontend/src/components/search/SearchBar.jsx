import { useEffect, useState } from "react";
import Activites from "../main/Activites";

const SearchBar = (props) => {
  const [temp, setTemp] = useState("비대면");
  const onChangeIpt = (e) => {
    setTemp(e.target.value);
  };
  const onClickBtn = () => {
    console.log(temp);
    props.event(temp);
  };
  // const query = formData.get("query");

  const onclickEnter = (e) => {
    if (e.key === "Enter") {
      console.log(temp);
      props.event(temp);
    }
  };

  return (
    <>
      <input onChange={onChangeIpt} onKeyDown={(e) => onclickEnter(e)} />
      <button onClick={onClickBtn}>Search</button>
    </>
  );
};

export default SearchBar;
