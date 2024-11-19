import axios from "axios";
import { useState, useEffect } from "react";

import DataTable from "./DataTable";
import SearchBar from "../search/SearchBar";
import { useParams } from "react-router-dom";

export default function Activites(props) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  let keyword = props.keyword
    ? props.keyword
    : params.keyword
    ? params.keyword
    : "정화";
  // keyword = ;

  const getData = async () => {
    const service = "/getVltrSearchWordList";
    let pageNo = 1;

    let searchKeyword = keyword; //검색 키워드
    let nanmmbyNm = ""; //기관 명
    let schCateGu = "all"; // 검색 방식

    // 전체/내용/제목
    // all/progrmCn/prormSj

    //search는 url로

    const serviceKey =
      "?serviceKey=vb52G3WJqnRQ7ECwTfXfSGQJY3AFx9yCfxGlDJGPgAiUVTu3g%2Bqmq%2B8wZNLRKenbUiuGfuLPwmJHpxMb9SbYow%3D%3D";

    const url = `&pageNo=${pageNo}&keyword=${searchKeyword}&schCateGu=${schCateGu}&nanmmbyNm=${nanmmbyNm}`;

    const response = await axios({
      method: "get",
      url: "/api" + service + serviceKey + url,
    });
    const result = response.data.response.body.items.item;
    const totalCount = response.data.response.body.totalCount;
    console.log(totalCount);
    console.log( service + serviceKey + url);

    setData(result);
    setLoading(false);

    console.log(service + serviceKey + url);
    console.log(response.data.response.body);
  };
  //
  // getData();
  //
  useEffect(() => {
    getData();
    return () => {
      setLoading(true);
    };
  }, [keyword]);

  if (loading)
    return (
      <>
        <div style={{ height: 100 + "vh" }}> </div>
      </>
    );

  return <DataTable items={data}></DataTable>;
}

export { Activites };
