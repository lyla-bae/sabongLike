import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import Comment from "./Comment";

const Detail = ({setPosition}) => {
  const {id} =useParams()
  const [data, setData] = useState()

  useEffect(() => {
    setPosition("list_view")

    axios({
      url:`/info/detail/${id}`,
      method:"get",
    }).then(res=>{
      setData(res.data)
      console.log(res.data)
    }).catch(err=>{
      console.log(err)
    })


  }, []);

  const textFormmater =(originalText)=> {
    console.log(JSON.stringify(data.progrmCn));
    return  originalText.replace(/\r/g, '\n');
  }




  return(<>
        {data&&<>
          <main>
            <section className="top_wrap">
              <h1 className="tit">
                {data?.progrmSj}
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
                    <dd>{data?.noticeBgnde}</dd>

                    <dt>종료일</dt>
                    <dd>{data?.noticeEndde}</dd>
                  </dl>
                </dd>

                <dt>활동기간</dt>
                <dd>
                  <span>{data?.progrmBgnde}</span>
                  ~
                  <span>{data?.progrmEndde}</span>
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
              <div className="con">{textFormmater(data.progrmCn)}</div>
            </section>
              <Comment postId={id} />
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

        </>}</>

  )

}
export default Detail