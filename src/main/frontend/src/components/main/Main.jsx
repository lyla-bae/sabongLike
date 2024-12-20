import Pagination from "../Pagination";
import axios from "axios";
import {useEffect, useState} from "react";
import Activity from "./Activity";

const Main = ({data, page , setPage, contents}) => {
  


  return (<>
      <main>
        <div className="board_wrap">
          <div className="board_tit">
            <div>봉사활동</div>
            <div>모집기간</div>
            <div>봉사기간</div>
            <div>리워드</div>
          </div>
              <div className="board_con_wrap">
                {data&&data.map(
                    data=>{
                      return <Activity key={data.progrmRegistNo} data={data}/>
                    }
                )}

                {data?console.log(data):""}
              </div>
            </div>
        <Pagination currentPage={page} totalPost={contents} handlePageChange={setPage}/>

      </main>
      </>
          )
}
export default Main