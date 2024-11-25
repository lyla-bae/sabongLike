import axios from "axios";

const SetData = (props) => {
  const setDataHandler = () => {
    axios({
      url:`/info/set`,
      method:'get'

    }).then(response=>{
      console.log(response)
    })

  }

  return(
      <button onClick={setDataHandler}> 데이터 get(개발)</button>
  )
}
export default SetData