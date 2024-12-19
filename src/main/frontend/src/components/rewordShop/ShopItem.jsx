import React from 'react';
import {Link} from "react-router-dom";

const ShopItem = ({item}) => {

  return (
      <div className="pro">
        <Link to={`/reward_shop/${item?.id}`} className="thumb_img">

          {item.thumbnail ?
              <img src={`/images/view/${item.thumbnail}`} alt={item.title + "이미지"} />:
              <img src="/images/ready_thumb.jpg" alt="상품 준비중입니다"/>
          }
        </Link>
        <div className="text_wrap">
            <div className="cate">{item?.sellerId}</div>
            <Link to={`/reward_shop/${item?.id}`} className="tit" >{item?.name}</Link>
            <div className="price">{item?.price}원</div>
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
  );
};

export default ShopItem;