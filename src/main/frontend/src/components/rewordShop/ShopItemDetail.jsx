import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import setData from "../SetData";
import {toast} from "react-toastify";

const ShopItemDetail = ({setPosition}) => {
  const {id} = useParams();
  const [data, setData] = useState()
  const [point, setPoint] = useState()
  const [purchased, setPurchased] = useState(false)


  useEffect(() => {
      setPosition("reward")

    axios({
      url:"/products/get",
      method: 'get',
      params:{productId:id}

    }).then(res=>{
      setData(res.data)
      console.log(res.data)
    }).catch(err=>{
      console.log(err)
    })
    }, []);

  useEffect(() => {
    axios({
      url:"/rewards/get",
      method: 'get',
      params:{userId:1}

    }).then(res=>{
      // set(res.data)
      setPoint(res.data)
    }).catch(err=>{
      console.log(err)
    })

  }, [purchased]);

  function purchaseHandler() {
    const id = toast.loading("결제중...")

    axios({
      url:"/rewards/use",
      method:"POST",
      data:{
        userId: 1,
        points: data.price
      }


    }).then(res=>{
      console.log(res)
      console.log("구매성공")
      toast.update(id, {render: `${data?.name} 구매에 성공했습니다. `, type: "success", isLoading: false,autoClose:3000});
      setPurchased(!purchased)
    }).catch(err=>{
      toast.warning("잔액이 부족합니다.")
    })
  }

  return (
      <div className="container" id="reward">
        <main id="view">
          <section className="top_info">
            <div className="thumb_img">
              {data?.detailImage &&
                  <img src={"/images/view/" + data.thumbnail} alt="상품이미지"/>}
            </div>
            <div className="text_wrap">
              <div className="cate">{data?.sellerId}</div>
              <div className="tit">{data?.name}</div>
              <div className="opt_wrap">
                <div className="select_wrap">
                  <select name="option_select" id="">
                    <option value="옵션을 선택하세요">옵션을 선택하세요</option>
                    <option value="옵션을 선택하세요">옵션을 선택하세요</option>
                    <option value="옵션을 선택하세요">옵션을 선택하세요</option>
                  </select>
                </div>
                <ul className="select_result">
                  <li>
                    <span className="tit">{data?.name}</span>
                    {/*<button className="btn-del">*/}
                    {/*<img src="/images/ic_del.svg" alt="삭제" className="xs-ic"/>*/}
                    {/*</button>*/}
                    <div className="count_wrap">
                      <button className="btn btn-mns">-</button>
                      <input type="text" value="1"/>
                      <button className="btn btn-pls">+</button>
                    </div>
                    <div className="price">{data?.price.toLocaleString()} 어흥</div>
                  </li>
                  <li>
                    <span>내가 보유한 어흥</span>
                    <span>{point}</span>
                  </li>

                </ul>
              </div>
              <div className="btn_wrap">
                <button className="btn-cart">
                  장바구니
                </button>
                <button onClick={purchaseHandler} className="btn-buy">
                  바로구매
                </button>
              </div>
            </div>
          </section>
          <section className="btm_info">
            <div className="tab">
              <a href="#tab1">상품상세</a>
              <a href="#tab2">리뷰<span className="review_num">639</span></a>
              <a href="#tab3">문의</a>
              <a href="#tab4">추가정보</a>
            </div>
            <div className="tab_con" id="tab1">
              <img src={"/images/view/"+data?.detailImage} alt=""/>
            </div>

          </section>
          <section className="best_pro">
            <div className="tit_wrap">
              <h5>인기상품</h5>
              <a href="#" className="btn_more">
                더보기
                <img src="/images/ic_arrowright.svg" alt="더보기"
                     className="xs-ic"/>
              </a>
            </div>
            <div className="list_pro_wrap">
              <div className="pro">
                <a href="./reward_view.html" className="thumb_img">
                  <img src="/images/ready_thumb.jpg" alt="상품 준비중입니다"/>
                </a>
                <div className="text_wrap">
                  <div className="cate">카테1</div>
                  <a href="./reward_view.html" className="tit">상품명</a>
                  <div className="price">12800원</div>
                  <div className="review_star">
                    <img src="/images/ic_star.png" alt="별"
                         className="ic sm-ic"/>
                    <span>4.8</span>
                  </div>
                  <button className="add_cart btn_cart">
                    <img src="/images/ic_cart.png" alt="장바구니"
                         className="ic sm-ic"/>
                    <span>장바구니</span>
                  </button>
                </div>
              </div>

              <div className="pro">
                <a href="./reward_view.html" className="thumb_img">
                  <img src="/images/ready_thumb.jpg" alt="상품 준비중입니다"/>
                </a>
                <div className="text_wrap">
                  <div className="cate">카테1</div>
                  <a href="./reward_view.html" className="tit">상품명이 들어갑니다</a>
                  <div className="price">12800원</div>
                  <div className="review_star">
                    <img src="/images/ic_star.png" alt="별"
                         className="ic sm-ic"/>
                    <span>4.8</span>
                  </div>
                  <button className="add_cart btn_cart">
                    <img src="/images/ic_cart.png" alt="장바구니"
                         className="ic sm-ic"/>
                    <span>장바구니</span>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>

      </div>
  );
};

export default ShopItemDetail;