import {useState} from "react";
import {Link} from "react-router-dom";

const Menu = ({setIsChecked, setCheckedList, checkedList, isChecked}) => {
  const sidoCode = {"세종":"5690000","서울":"6110000","부산":"6260000","대구":"6270000","인천":"6280000","광주":"6290000","대전":"6300000","울산":"6310000","경기":"6410000","강원":"6420000","충북":"6430000","충남":"6440000","전북":"6450000","전남":"6460000","경북":"6470000","경남":"6480000","제주":"6500000"}
  const keyList = Object.keys(sidoCode);


  const checkedItemHandler = (value, isChecked) => {
    if (isChecked) {
      setCheckedList((prev) => [...prev, value]);

      return;
    }

    if (!isChecked && checkedList.includes(value)) {
      setCheckedList(checkedList.filter((item) => item !== value));

      return;
    }

    return;
  };

  const checkHandler = (e, value) => {
    setIsChecked(!isChecked);
    checkedItemHandler(value, e.target.checked);
  };




  return (

      <nav>
        {console.log(checkedList)}
        <div id="side_menu">
          <section id="" className="banner_wrap hidden-mo">
            <Link to={"/reward_shop"}>
              <div className="ic">
                <img src="/images/ic_gnb04.svg" alt="리워드 샵"/>
              </div>
              <p className="">리워드 샵</p>
            </Link>
            <Link to="/certification">
              <div className="ic">
                <img src="/images/ic_gnb02.svg" alt="봉사 인증"/>
              </div>
              <p className="">물품 나눔</p>
            </Link>
            <a href="#">
              <div className="ic">
                <img src="/images/ic_gnb03.svg" alt="데일리 목표"/>
              </div>
              <p className="">데일리 목표</p>
            </a>
          </section>

          <section className="">
            <h6 className="tab_tit">활동지역</h6>
            <div className="tab_wrap">
              {keyList.map((sidoKey,index) => {
                return(<>
                <input type="checkbox"
                       key={sidoKey+"input"}
                       id={"checkbox_local"+index}
                       value={sidoCode[sidoKey]}
                       onChange={(e)=>checkHandler(e, sidoCode[sidoKey])}
                       checked={checkedList.includes(sidoCode[sidoKey])}
                />
                <label   key={sidoKey+"label"} htmlFor={"checkbox_local"+index}>{sidoKey}</label></>)
              })}



            </div>
          </section>

          <section>
            <h6 className="tab_tit">선호 활동</h6>
            <div className="tab_wrap">
              <input type="checkbox" id="checkbox_like01" />
              <label htmlFor="checkbox_like01">OA</label>

              <input type="checkbox" id="checkbox_like02"/>
              <label htmlFor="checkbox_like02">마케팅</label>

              <input type="checkbox" id="checkbox_like03"/>
              <label htmlFor="checkbox_like03">개발</label>

              <input type="checkbox" id="checkbox_like04"/>
              <label htmlFor="checkbox_like04">정리</label>

              <input type="checkbox" id="checkbox_like05"/>
              <label htmlFor="checkbox_like05">교육</label>

              <input type="checkbox" id="checkbox_like06"/>
              <label htmlFor="checkbox_like06">디자인</label>

              <input type="checkbox" id="checkbox_like07"/>
              <label htmlFor="checkbox_like07">공예</label>

              <input type="checkbox" id="checkbox_like08"/>
              <label htmlFor="checkbox_like08">언어</label>

              <input type="checkbox" id="checkbox_like09"/>
              <label htmlFor="checkbox_like09">법률</label>

              <input type="checkbox" id="checkbox_like10"/>
              <label htmlFor="checkbox_like10">상담</label>

            </div>
          </section>

          <section>
            <h6 className="tab_tit">봉사 대상</h6>
            <div className="select_wrap">
              <select name="select_target" id="">
                <option value="선택하세요">선택하세요</option>
                <option value="아동/청소년">아동/청소년</option>
                <option value="아동/청소년">아동/청소년</option>
                <option value="아동/청소년">아동/청소년</option>
              </select>
            </div>
          </section>

          <section>
            <div className="radio_wrap">
              <input type="radio" id="radio_all" name="radio_onoff"/>
              <label htmlFor="radio_all">오프라인/온라인</label>

              <input type="radio" id="radio_offline" name="radio_onoff"/>
              <label htmlFor="radio_offline">오프라인</label>

              <input type="radio" id="radio_online" name="radio_onoff"/>
              <label htmlFor="radio_online">온라인</label>
            </div>
          </section>
        </div>
      </nav>

  )
}

export default Menu