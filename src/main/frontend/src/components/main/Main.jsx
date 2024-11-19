import Pagination from "../Pagination";
import axios from "axios";
import {useEffect, useState} from "react";

const Main = (props) => {
  const [data, setData] = useState()

  useEffect(() => {
    axios({
      url:"http://localhost:8080/info/get",
      method:"get"

    }).then(res =>{
      console.log(res)
      // setData(res)
        }
    )
  }, []);




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
              {/*여기 activty*/}
              </div>
            </div>
          </main>
        <Pagination/>
      </>
          )
}
export default Main