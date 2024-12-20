import React, {useEffect, useState} from 'react';
import axios from "axios";
import CertificationItem from "../components/certification/certificationItem";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

const Certification = ({setPosition}) => {

  const [name, setName] = useState('');
  const [authCode, setAuthCode] = useState('');
  const [data, setData] = useState()
  const [point, setPoint] = useState(0)
  const navigator = useNavigate();
  useEffect(() => {
    setPosition("certification")
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault(); // 기본 폼 제출 동작을 막음

    axios({
      url:"http://127.0.0.1:5000/validate",
      method:"post",
      data:{name:name , code:authCode}
    }).then((res)=>{
      console.log(res)
      setData(res.data.result)
    }).catch(err=>{
      console.log(err)
    })
  };

  function getPoint() {
    axios({
      url:"/rewards/add",
      method:"post",
      data:{userId:1,points:point},
    }).then((res)=>{
      toast.success(`${point} 어흥이 추가되었습니다.`)
      navigator("/")
    }).catch(err=>{
      console.log(err)
    })
  }

  return (
      <div className={"certification"}>
        <div className={"certification-form"}>
          <h2>봉사활동 어흥으로 바꾸기</h2>
          <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="이름을 입력해주세요."
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="인증번호를 입력해주세요."
                value={authCode}
                onChange={(e) => setAuthCode(e.target.value)}
            />
            <button type="submit">제출</button>
          </form>
        </div>

        <div>
          {data && data.map((item, index) =>
              <CertificationItem key={CertificationItem} point={point}
                                 setPoint={setPoint} item={item}/>
          )}
        </div>
        <div className="point-get-section">
          <h3>총 {point} 어흥</h3>
          <button className={"point-get-button"} onClick={getPoint}> 수령하기</button>
        </div>

      </div>
  )
}

export default Certification;