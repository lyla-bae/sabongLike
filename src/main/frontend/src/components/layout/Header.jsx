
import "../../style/default.css"
import {Link} from "react-router-dom";
import NaverLoginButton from "../main/NaverLogin";
import axios from "axios";
import {useState} from "react";
const Header = ({setSearchQuery, searchQuery}) => {
    const [userName, setUserName] = useState("");

    const handleLoginSuccess = async (userData) => {
        setUserName(userData.name);

        if (userData.name != ""){
            var con = document.getElementById("naverIdLogin");
            con.style.display = "none";
        }

    };

  return (
      <>

        <header>
           <Link className="logo" to="/">
            <img src="/images/logo_big.png" className="hidden-mo"
                 alt="사자는 봉사를 좋아해"/>
            <img src="/images/logo_small.png" className="visible-mo"
                 alt="사자는 봉사를 좋아해"/>
          </Link>

          <button className="ic ic_back visible-mo">
            <img src="/images/ic_back.svg" alt="뒤로 가기"/>
          </button>

          <div className="search_bar_wrap">
            <div className="search_bar">
              <input value={searchQuery} type="search"
                     onChange={e=>setSearchQuery(e.target.value)} placeholder="봉사활동 키워드를 입력하세요"/>
            </div>
            <button className="ic ic_search">
              <img src="/images/ic_search.svg" alt="검색어 찾기"/>
            </button>
          </div>

          <div className="util_wrap">
            <Link to="/bookmark" className="ic ic_bookmark">
              <img src="/images/ic_bookmark.svg" alt="즐겨찾기 바로가기"/>
            </Link>
            <a href="#" className="ic ic_bell">
              <img src="/images/ic_bell.svg" alt="알림 바로가기"/>
            </a>
             <div className="logout hidden-mo">
                 {userName &&<a href="#" className="profile">
                            <span className="thumb">
                              <img src="/images/ic_thumb.png" alt="기본 프로필 사진"/>
                            </span>
                   <span className="name">{userName}</span>
              </a>}
                 {userName && <a href="#" className="link_logout">
                <span>로그아웃</span>
              </a>}
            </div>
            <NaverLoginButton onLoginSuccess={handleLoginSuccess}></NaverLoginButton>
          </div>
        </header>
      </>
        )
    };

        export default Header;
