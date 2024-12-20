import Menu from "../components/layout/Menu";
import Main from "../components/main/Main";
import {useEffect, useState} from "react";
import axios from "axios";

const MainPage = ({setPosition}) => {
  const [data, setData] = useState()
  const [page, setPage] = useState(1)
  const [contents, setContents] = useState(1)

  const [checkedList, setCheckedList] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [isOnline, setIsOnline] = useState(false)

  useEffect(() => {
    setPosition("main")
    const params = {
      // progrmSj: "봉사",
      // progrmBgnde: 20230101,
      // progrmEndde: 20231231,
      sidoCd: checkedList.join(","),
      isOnline: isOnline

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
      url:`/info/get?page=${page}`,
      method:"get",
      params:params

    }).then(res =>{
          console.log(res)
          setData(res.data.content)
          setContents(res.data.totalElements)
        }
    ).catch(
        err=>{
          console.log(err)
        }
    )
  }, [page,checkedList,isOnline]);




  return(<>
    <Menu setCheckedList = {setCheckedList}
          setIsChecked = {setIsChecked}
          isChecked = {isChecked}
          checkedList = {checkedList}
          setIsOnline={setIsOnline}
          isOnline = {isOnline}
    ></Menu>
    <Main data = {data} page = {page} setPage = {setPage} contents = {contents} />

  </>)

}
export default MainPage