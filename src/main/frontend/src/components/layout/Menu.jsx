const Menu = (props) => {

  return (

      <nav>
        <div id="side_menu">
          <section id="" className="banner_wrap hidden-mo">
            <a href="#">
              <div className="ic">
                <img src="/images/ic_gnb04.svg" alt="리워드 샵"/>
              </div>
              <p className="">리워드 샵</p>
            </a>
            <a href="#">
              <div className="ic">
                <img src="/images/ic_gnb02.svg" alt="물품 나눔"/>
              </div>
              <p className="">물품 나눔</p>
            </a>
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
              <input type="checkbox" id="checkbox_local01" checked/>
              <label htmlFor="checkbox_local01">서울</label>

              <input type="checkbox" id="checkbox_local02"/>
              <label htmlFor="checkbox_local02">경기</label>

              <input type="checkbox" id="checkbox_local03"/>
              <label htmlFor="checkbox_local03">인천</label>

              <input type="checkbox" id="checkbox_local04"/>
              <label htmlFor="checkbox_local04">강원</label>

              <input type="checkbox" id="checkbox_local05"/>
              <label htmlFor="checkbox_local05">충남</label>

              <input type="checkbox" id="checkbox_local06"/>
              <label htmlFor="checkbox_local06">대전</label>

              <input type="checkbox" id="checkbox_local07"/>
              <label htmlFor="checkbox_local07">충북</label>

              <input type="checkbox" id="checkbox_local08"/>
              <label htmlFor="checkbox_local08">세종</label>

              <input type="checkbox" id="checkbox_local09"/>
              <label htmlFor="checkbox_local09">부산</label>

              <input type="checkbox" id="checkbox_local10"/>
              <label htmlFor="checkbox_local10">울산</label>

              <input type="checkbox" id="checkbox_local11"/>
              <label htmlFor="checkbox_local11">대구</label>

              <input type="checkbox" id="checkbox_local12"/>
              <label htmlFor="checkbox_local12">경북</label>

              <input type="checkbox" id="checkbox_local13"/>
              <label htmlFor="checkbox_local13">경남</label>

              <input type="checkbox" id="checkbox_local14"/>
              <label htmlFor="checkbox_local14">전남</label>

              <input type="checkbox" id="checkbox_local15"/>
              <label htmlFor="checkbox_local15">광주</label>

              <input type="checkbox" id="checkbox_local16"/>
              <label htmlFor="checkbox_local16">전북</label>

              <input type="checkbox" id="checkbox_local17"/>
              <label htmlFor="checkbox_local17">제주</label>

              <input type="checkbox" id="checkbox_local_all"/>
              <label htmlFor="checkbox_local_all">전국</label>

            </div>
          </section>

          <section>
            <h6 className="tab_tit">선호 활동</h6>
            <div className="tab_wrap">
              <input type="checkbox" id="checkbox_like01" checked/>
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