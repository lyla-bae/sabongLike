import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import Comment from "./Comment";
import {toast} from "react-toastify";
import {SidoCode} from "../components/common/sidoCode";

const Detail = ({setPosition}) => {
  const {id} =useParams()
  const [data, setData] = useState()
  const [isMarked, setIsMarked] = useState(false)
  const [isEdited, setIsEdited] = useState(false)
  function getKeyByValue(object, value) {

    return Object.keys(object).find(key => object[key] === value);
  }

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
  useEffect(() => {
    axios({
      url:"/bookmark/exists",
      method:"post",
      data:{
        userId: 1,
        volunteeringId: id
      }

    }).then(res=>{
      console.log(res.data)
      setIsMarked(res.data)
    })

  }, [isEdited]);

  const textFormmater =(originalText)=> {
    console.log(JSON.stringify(data.progrmCn));
    return  originalText.replace(/\r/g, '\n');
  }

  function setBookmark() {
    axios({
      url:"/bookmark/add",
      method:"post",
      data:{
        userId:1,
        volunteeringId:id
      }
    }).then((res)=>{
      console.log(res)
      setIsEdited(!isEdited)
      toast.success("즐겨찾기에 추가되었습니다!")
    }).catch((err)=>{
      console.log(err)
      toast.warn("이미 추가된 활동입니다!")
    })
  }


  function deleteBookmark() {
    axios({
      url:"/bookmark/remove",
      method:"delete",
      data:{
        userId:1,
        volunteeringId:id
      }
    }).then((res)=>{
      console.log(res)
      setIsEdited(!isEdited)
      toast.success("즐겨찾기에서 삭제 되었습니다!")
    }).catch((err)=>{
      console.log(err)
      toast.warn("이미 삭제된 활동입니다!")
    })
  }

  return(<>
        {data&&<>
          <main>
            <section className="top_wrap">
              <h1 className="tit">
                {data?.progrmSj}
              </h1>
              <div className="btn_wrap">
                {isMarked ?
                    <button onClick={deleteBookmark} className="btn_like">
                      즐겨찾기 삭제
                      <img src="/images/ic_bookmark_active.svg" alt="즐겨찾기 삭제"
                           className="ic "/>
                    </button>
                    :
                    <button onClick={setBookmark} className="btn_like">
                      즐겨찾기 추가
                      <img src="/images/ic_bookmark.svg" alt="즐겨찾기 추가"
                           className="ic "/>
                    </button>}
                <a className="btn_submit" href={data?.url} target="_blank">
                  신청하러 가기
                  <img src="/images/ic_arrowright.svg" alt="신청하러 가기"
                       className="ic"/>
                </a>
              </div>
              <dl className="label_wrap">

                {/*<dt>참여대상</dt>*/}
                {/*<dd><span className="label-box">청소년/성인</span></dd>*/}

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
                  <dl className="date_label_wrap">
                    <dt>시작일</dt>
                    <dd>{data?.progrmBgnde}</dd>

                    <dt>종료일</dt>
                    <dd>{data?.progrmEndde}</dd>
                  </dl>
                  {/*<span>{data?.progrmBgnde}</span>*/}
                  {/*~*/}
                  {/*<span>{data?.progrmEndde}</span>*/}
                </dd>
                <dt>주최기관</dt>
                <dd>{data.mnnstNm}</dd>

                <dt>모집인원</dt>
                <dd>{data?.rcritNmpr} 명</dd>

                <dt>활동지역</dt>
                <dd>{getKeyByValue(SidoCode, String(data?.sidoCd))}</dd>

                <dt>모집여부</dt>
                <dd>
                  <span className="label-box">
                    {data?.progrmSttusSe === 2 ? "모집중" : "모집마감"}</span>
                </dd>

                <dt>리워드</dt>
                <dd>
                  {Math.abs(data.actEndTm - data.actBeginTm) * 100} 어흥
                </dd>

                {/*<dt>활동혜택</dt>*/}
                {/* <dd>교통비</dd>*/}

                {/*<dt>관심분야</dt>*/}
                {/*<dd><span className="label-box">디자인/사진/예술/영상</span></dd>*/}
              </dl>
            </section>
            <section className="con_wrap">
              <h3>상세내용</h3>
              <div className="con">{textFormmater(data?.progrmCn)}</div>
            </section>
              <Comment postId={id} />
          </main>


          <aside>
            <h5>추천봉사활동</h5>
            <ul>
              <li>
                <a href="/detail/3227943">
                  <strong className="num">01</strong>
                  <p>성인) 더행복나눔장애인보호작업장 재능기부 봉사자 모집</p>
                </a>
              </li>
              <li>
                <a href="/detail/3225969">
                  <strong className="num">02</strong>
                  <p>(오전) 사서 업무 보조 및 환경 정화 활동</p>
                </a>
              </li>
              <li>
                <a href="/">
                  <strong className="num">03</strong>
                  <p>부산대학교치과병원 2025년 신규 성인 자원봉사자 모집</p>
                </a>
              </li>
              <li>
                <a href="/">
                  <strong className="num">04</strong>
                  <p>[아이사랑꿈터5호점] 뜨개질교육 봉사 (13:30~15:30)</p>
                </a>
              </li>
              <li>
                <a href="/">
                  <strong className="num">05</strong>
                  <p>구미YMCA 초등학생 기초학습지도A(수)</p>
                </a>
              </li>
              <li>
                <a href="/">
                  <strong className="num">06</strong>
                  <p>전주부채문화관 지킴이 (관람객 안내 및 전시관 체험 보조)</p>
                </a>
              </li>
              <li>
                <a href="/">
                  <strong className="num">07</strong>
                  <p>척척박사! 스마트폰 무엇이든 물어보세요(스마트폰 교육봉사)</p>
                </a>
              </li>
              <li>
                <a href="/detail/3210619">
                  <strong className="num">08</strong>
                  <p>다이닝브랜즈그룹(bhc치킨) 영케어러 멘토링봉사단 모집</p>
                </a>
              </li>
              <li>
                <a href="/">
                  <strong className="num">09</strong>
                  <p>(교육봉사) 초등 방과후 돌봄교실 학습지도</p>
                </a>
              </li>
              <li>
                <a href="/">
                  <strong className="num">10</strong>
                  <p>텃밭 가꾸기 보조 봉사자 모집</p>
                </a>
              </li>
              <li>
                <a href="/">
                  <strong className="num">11</strong>
                  <p>노년사회화교육 컴퓨터 기초 자원봉사자 모집</p>
                </a>
              </li>
              <li>
                <a href="/">
                  <strong className="num">12</strong>
                  <p>양정현대2차아파트 순환도로 환경미화(★★★중학생 모집★★★)</p>
                </a>
              </li>

            </ul>
          </aside>

        </>}</>

  )

}
export default Detail