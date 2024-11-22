import Header from "./Header";
import Menu from "./Menu";
import Main from "../main/Main";
import Pagination from "../Pagination";
import {useEffect, useState} from "react";
import axios from "axios";


const Layout = () => {

  const [data, setData] = useState()
  const [page, setPage] = useState(1)
  const [contents, setContents] = useState(1)

  const [checkedList, setCheckedList] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const params = {
      // progrmSj: "봉사",
      // progrmBgnde: 20230101,
      // progrmEndde: 20231231,
        sidoCd: checkedList.join(","),
        // isOnline: true

      // 배열로 전달
      // gugunCd: 12345,
      // actBeginTm: 900,
      // actEndTm: 1800,
      // adultPosblAt: "Y",
      // yngbgsPosblAt: "N",
      // page: 0,
      // size: 10,
      // sortField: "progrmBgnde",
      // direction: "ASC",
    };

    axios({
      url:`http://localhost:8080/info/get?page=${page}`,
      method:"get",
      params:params

    }).then(res =>{
          console.log(res)
          setData(res.data)
          setContents(res.data.totalElements)
        }
    ).catch(
        err=>{
          console.log(err)
        }
    )
  }, [page,checkedList]);


  return (
      <div className="container" id="main">
        <Header></Header>
        <Menu setCheckedList = {setCheckedList}
              setIsChecked = {setIsChecked}
              isChecked = {isChecked}
              checkedList = {checkedList}></Menu>
        <Main data = {data} page = {page} setPage = {setPage} contents = {contents} />
      </div>
  );
};

export default Layout;
