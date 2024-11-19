const Activity = (props) => {

  return(
      <>
        <a className="board_con" href="#">
          <div className="txt_wrap visible-mo">
            <span className="txt-loacl">부산</span>
            <span className="dot"></span>
            <span className="txt-onoff">온라인/오프라인</span>
          </div>
          <div className="tit">새희망공동희망가정 청소 및 아동돌봄 보조</div>
          <div className="date date01">
            <span className="txt-date01 visible-mo">모집기간 : </span>
            <span>24.10.13</span> ~ <span>24.10.27</span>
          </div>
          <div className="date date02">
            <span className="txt-date01 visible-mo">봉사기간 : </span>
            <span>2개월</span><span>(15:00~18:00)</span>
          </div>
          <div className="reward">
            <span className="num">5</span><span
              className="ic_lion">어흥</span>
          </div>
        </a>
      </>
  )
}
export default Activity