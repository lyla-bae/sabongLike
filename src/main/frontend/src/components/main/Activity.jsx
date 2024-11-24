import {Link} from "react-router-dom";

const Activity = ({data}) => {


  return(
      <>
        <Link className="board_con" to={`/detail/${data["progrmRegistNo"]}`}>
          <div className="txt_wrap visible-mo">
            <span className="txt-loacl">부산</span>
            <span className="dot"></span>
            <span className="txt-onoff">온라인/오프라인</span>
          </div>
          <div className="tit">{data.progrmSj}</div>
          <div className="date date01">
            <span className="txt-date01 visible-mo">활동기간 : </span>
            <span>{data.progrmBgnde}</span> ~ <span>{data.progrmEndde}</span>
          </div>
          <div className="date date02">
            <span className="txt-date01 visible-mo">활동시간 : </span>
            <span>2개월</span><span>(15:00~18:00)</span>
          </div>
          <div className="reward">
            <span className="num">5</span><span
              className="ic_lion">어흥</span>
          </div>
        </Link>
      </>
  )
}
export default Activity