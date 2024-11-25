import axios from "axios";
import {useEffect, useState} from "react";
import Card from "./Card";
import Pagination from "../Pagination";
import SetData from "../SetData";

const AllActivities = (props)=>{
  const [data, setData] = useState();
  const [page, setPage] = useState(1);
  const [totalPost, setTotalPost] = useState()

  useEffect(() => {

    axios({
      url:`/info/get?page=${page}`,
      method:"get"
    }).then(response =>{
          console.log(response)
          console.log(response.data.content)
          setData(response.data.content)
          setTotalPost(response.data.totalElements);

        }
    )
  }, [page]);


  return (<>
    <SetData/>


    {data&&data.map(item=>{
      return(<>
            <Card key= {item["progrmRegistNo"]} item = {item}/>
        </>
        )


    })}
    {data && <Pagination currentPage={page} handlePageChange={setPage}
                         totalPost={totalPost}/>
    }
  </>)
}
export default AllActivities