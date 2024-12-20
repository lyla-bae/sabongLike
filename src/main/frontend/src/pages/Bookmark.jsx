import React, {useEffect, useState} from 'react';
import Main from "../components/main/Main";
import axios from "axios";
import "../style/bookmark.css"

const Bookmark = ({setPosition}) => {
  const [data, setData] = useState()
  const [page, setPage] = useState(1)
  const [contents, setContents] = useState(1)

  useEffect(() => {
    setPosition("bookmark")

    axios({
      url:"/bookmark/list/1",
      method:"get"

    }).then(res=>{

      setData(res.data.volunteeringList)
      setContents(res.data.count)
    })

  }, []);
  return (
      <div>

        <h2 className={"bookmark-title"}> 북마크 추가된 활동</h2>
        <Main data = {data} page = {page} setPage = {setPage} contents = {contents} />
      </div>
  );
};

export default Bookmark;