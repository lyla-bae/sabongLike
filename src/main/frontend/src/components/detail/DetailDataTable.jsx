import React, { useState } from "react";
import styles from "../main/DataTable.module.css";
import {Link} from "react-router-dom";

export default function DetailDataTable({ items = [] ,productId}) {
  const setDateFormat = (date) => {
    const year = date.toString().substr(0, 4);
    const month = date.toString().substr(4, 2);
    const day = date.toString().substr(6, 2);
    return `${year}.${month}.${day}`;
  };

  const sliceString =(data)=>{
    const dataList = data.split("\n")
    return ""
  }

  const setWeekDay = (weekday)=>{
    console.log(weekday);
    const dayStrings = ["월","화","수","목","금","토","일"];
    const activeDays = []
    const days = weekday.split("");
    console.log(days);

    for(let i=0;i<days.length;i++){
      console.log(days[i]);
      if (days[i] == "1"){
        activeDays.push(dayStrings[i]+", ");
      }
    }

    const last = activeDays.pop()
    activeDays.push(last[0]);

    return activeDays;
  }

  const setIsPosible = (item) => {
    if (item === "Y"){
      return ["가능","1.0"];
    }else if(item === "N"){
      return ["불가능","0.2"];
    }


  }
  const itemKeys = [
    "actBeginTm",
    "actEndTm",
    "actPlace",
    "actWkdy",
    "adultPosblAt",
    "appTotal",
    "areaAddress1",
    "areaAddress2",
    "areaAddress3",
    "areaLalo1",
    "areaLalo2",
    "areaLalo3",
    "email",
    "familyPosblAt",
    "fxnum",
    "grpPosblAt",
    "gugunCd",
    "mnnstNm",
    "nanmmbyNm",
    "nanmmbyNmAdmn",
    "noticeBgnde",
    "noticeEndde",
    "pbsvntPosblAt",
    "postAdres",
    "progrmBgnde",
    "progrmCn",
    "progrmEndde",
    "progrmRegistNo",
    "progrmSj",
    "progrmSttusSe",
    "rcritNmpr",
    "sidoCd",
    "srvcClCode",
    "telno",
    "yngbgsPosblAt",
  ];
  return (
    <div className={styles['main-detail']}>
      <div style={{width : "1280px"}}>


        {/*<p>위도: {items["areaLalo1"]}</p>*/}



        {/*<p>공고 가능 여부: {items["pbsvntPosblAt"]}</p>*/}


        {/*프로그램 내용관련 섹션*/}
        <div>
          <div className={styles["detail-title"]}>
            <div className={"col"}>
              <h1 style={{fontSize: 1.5 + "rem"}}>{items["progrmSj"]}</h1>
              <span>{items["mnnstNm"]}</span>


            </div>

            {/*https://www.1365.go.kr/vols/P9210/partcptn/timeCptn.do?type=show&progrmRegistNo=*/}
            <div className={"row"}>
              모집기간
              <span className={"v-line"}/>
              <span className={"col"}>
              <span>{"시작일 " + setDateFormat(items["noticeBgnde"])}</span>
              <span>{"마감일 " + setDateFormat(items["noticeEndde"])}</span>
              </span>
            </div>
          </div>

          <hr/>
          <div className={`col ${styles.panel}`}>
            <span>시작일<span className={"v-line"}/> {setDateFormat(items["progrmBgnde"])}</span>
            <span>종료일<span className={"v-line"}/> {setDateFormat(items["progrmEndde"])}</span>
            <p>{items["areaAddress1"]}</p>
          </div>
          <div className={`row ${styles.panel}`}>
            {/*<p>성인 가능 여부: {items["adultPosblAt"]}</p>*/}
            {/*<p>가족 참여 가능 여부: {items["familyPosblAt"]}</p>*/}
            {/*<p>단체 참여 가능 여부: {items["grpPosblAt"]}</p>*/}


            <div className={"col"}>
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path fill="#528e61" d="M4 8h16v11H4z" opacity={setIsPosible(items["adultPosblAt"])[1]}/>
                <path fill="#528e61"
                      opacity={setIsPosible(items["adultPosblAt"])[1]}
                      d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2M10 4h4v2h-4zm10 15H4V8h16z"/>
              </svg>
              <span>성인{setIsPosible(items["adultPosblAt"])[0]} <span className={"v-line"}/></span>
            </div>
            <div className={"col"}>
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path  opacity={setIsPosible(items["familyPosblAt"])[1]}
                    fill="#528e61"
                      d="M16 4c0-1.11.89-2 2-2s2 .89 2 2s-.89 2-2 2s-2-.89-2-2m4 18v-6h2.5l-2.54-7.63A2.01 2.01 0 0 0 18.06 7h-.12a2 2 0 0 0-1.9 1.37l-.86 2.58c1.08.6 1.82 1.73 1.82 3.05v8zm-7.5-10.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5M5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2s-2 .89-2 2s.89 2 2 2m2 16v-7H9V9c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v6h1.5v7zm6.5 0v-4h1v-4c0-.82-.68-1.5-1.5-1.5h-2c-.82 0-1.5.68-1.5 1.5v4h1v4z"/>
              </svg>
              <span>가족{setIsPosible(items["familyPosblAt"])[0]} <span className={"v-line"}/></span>
            </div>
            <div className={"col"}>
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path fill="#528e61" d="M4 8h16v11H4z" opacity={setIsPosible(items["grpPosblAt"])[1]}/>
                <path fill="#528e61"
                      d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2M10 4h4v2h-4zm10 15H4V8h16z"/>
              </svg>
              <span>단체{setIsPosible(items["grpPosblAt"])[0]} <span className={"v-line"}/></span>
            </div>
            <div className={"col"}>
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path fill="#528e61" d="M4 8h16v11H4z" opacity={setIsPosible(items["yngbgsPosblAt"])[1]}/>
                <path fill="#528e61"
                      d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2M10 4h4v2h-4zm10 15H4V8h16z"/>
              </svg>
              <span>청소년{setIsPosible(items["yngbgsPosblAt"])[0]} <span className={"v-line"}/></span>

            </div>
          </div>


          <hr/>
          <div className={styles["main-text"]}>{items["progrmCn"]}</div>
          <Link to={`https://www.1365.go.kr/vols/P9210/partcptn/timeCptn.do?type=show&progrmRegistNo=${productId}`}>
            신청하기
          </Link>
          <hr/>


          <span>프로그램 등록 번호: {items["progrmRegistNo"]}</span>
          <span>프로그램 상태: {items["progrmSttusSe"]}</span>

          <p>봉사 시작 시간: {items["actBeginTm"]}</p>
          <p>봉사 종료 시간: {items["actEndTm"]}</p>
          <p>봉사 장소: {items["actPlace"]}</p>
          <p>봉사 요일: {items["actWkdy"]??""}</p>

          <p>신청 수/모집 인원 <span className={"v-line"}/>{items["appTotal"]}/{items["rcritNmpr"]}</p>
          <p></p>
        </div>
        <div>

          <p>기관명: {items["mnnstNm"]}</p>
          <p>우편 주소: {items["postAdres"]}</p>
          <p>이메일: {items["email"]}</p>

          <p>전화번호: {items["telno"]}</p>
          {/*<p>나눔주체명: {items["nanmmbyNm"]}</p>*/}
          <p>나눔주체명 (관리): {items["nanmmbyNmAdmn"]}</p>

        </div>
        {/*주최기관 관련 섹션*/}


        <p>시도 코드: {items["sidoCd"]}</p>
        <p>구군 코드: {items["gugunCd"]}</p>


      </div>
    </div>
  );
}
