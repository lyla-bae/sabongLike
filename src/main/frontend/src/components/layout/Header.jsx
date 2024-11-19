
import "../../style/default.css"
const Header = () => {

  return (
      <>

        <header>
           <a className="logo" href="#">
            <img src="/images/logo_big.png" className="hidden-mo"
                 alt="사자는 봉사를 좋아해"/>
            <img src="/images/logo_small.png" className="visible-mo"
                 alt="사자는 봉사를 좋아해"/>
          </a>

          <button className="ic ic_back visible-mo">
            <img src="/images/ic_back.svg" alt="뒤로 가기"/>
          </button>

          <div className="search_bar_wrap">
            <div className="search_bar">
              <input type="search" placeholder="봉사활동 키워드를 입력하세요"/>
            </div>
            <button className="ic ic_search">
              <img src="/images/ic_search.svg" alt="검색어 찾기"/>
            </button>
          </div>

          <div className="util_wrap">
            <a href="#" className="ic ic_bookmark">
              <img src="/images/ic_bookmark.svg" alt="즐겨찾기 바로가기"/>
            </a>
            <a href="#" className="ic ic_bell">
              <img src="/images/ic_bell.svg" alt="알림 바로가기"/>
            </a>

             <div className="logout hidden-mo">
              <a href="#" className="profile">
                            <span className="thumb">

                              <img src="/images/ic_thumb.png" alt="기본 프로필 사진"/>

                            </span>
                <span className="name">김사봉</span>
              </a>
              <a href="#" className="link_logout">
                <span>로그아웃</span>
              </a>
            </div>


          </div>
        </header>
      </>
        )
        };

        export default Header;
