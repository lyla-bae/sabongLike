import {useParams} from "react-router-dom";
import {useEffect} from "react";

const Detail = ({setPosition}) => {
  const {id} =useParams()

  useEffect(() => {
    setPosition("list_view")
  }, []);

  return(<>


          <main>
            <section className="top_wrap">
              <h1 className="tit">
                2024 모두예술극장 기획 프로그램 키아라 베르사니 활동 전시회
              </h1>
              <div className="btn_wrap">
                <a className="btn_like" href="#">
                  즐겨찾기 추가
                  <img src="/images/ic_bookmark.svg" alt="즐겨찾기 추가"
                       className="ic "/>
                </a>
                <a className="btn_submit" href="#">
                  신청하러 가기
                  <img src="/images/ic_arrowright.svg" alt="신청하러 가기"
                       className="ic"/>
                </a>
              </div>
              <dl className="label_wrap">
                <dt>기업형태</dt>
                <dd>비영리단체/협회/재단</dd>

                <dt>참여대상</dt>
                <dd><span className="label-box">청소년/성인</span></dd>

                <dt>접수기간</dt>
                <dd>
                  <dl className="date_label_wrap">
                    <dt>시작일</dt>
                    <dd>24.11.18</dd>

                    <dt>종료일</dt>
                    <dd>24.12.01</dd>
                  </dl>
                </dd>

                <dt>활동기간</dt>
                <dd>
                  <span>24.11</span>
                  ~
                  <span>24.12</span>
                </dd>

                <dt>모집인원</dt>
                <dd>0명</dd>

                <dt>활동지역</dt>
                <dd>서울 서대문구</dd>

                <dt>봉사대상</dt>
                <dd>
                  <span className="label-box">청소년/성인</span>
                </dd>

                <dt>리워드</dt>
                <dd>
                  3
                  어흥
                </dd>

                <dt>활동혜택</dt>
                <dd>교통비</dd>

                <dt>관심분야</dt>
                <dd><span className="label-box">디자인/사진/예술/영상</span></dd>
              </dl>
            </section>
            <section className="con_wrap">
              <h3>상세내용</h3>
              <div className="con">상세 내용 본문위치</div>
            </section>
            <section className="comment_wrap">
              <h3>댓글</h3>
              <div className="write_wrap">
                <textarea name="textrea_comment" id="textrea_comment"
                          placeholder="댓글을 작성해주세요."
                          style={{width: "100%", resize: "none"}}/>
                <button className="btn_register">등록</button>
              </div>
              <ul className="list_wrap">
                <li>
                  <strong>댓글 본문</strong>
                  <p>
                    <span className="date">2024.01.01</span>
                    <span className="name">풍핑이</span>
                  </p>
                </li>

              </ul>
            </section>
          </main>


          <aside>
            <h5>추천봉사활동</h5>
            <ul>
              <li>
                <a href="#">
                  <strong className="num">01</strong>
                  <p>추천봉사의 이름</p>
                </a>
              </li>

            </ul>
          </aside>

      </>

  )

}
export default Detail