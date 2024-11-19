import styles from "./Header.module.css";
import axios from "axios";
import {useContext, useState} from "react";
import {AuthContext} from "../providers/AuthProvider";

const Header = () => {
  const logout = async(e) => {
      e.preventDefault();
      console.log(isAuth);

      const res = await axios.post(
          "http://localhost:8080/user/logout",{
          }
      ).then((res)=> {
            if (res.status === 200) {
              console.log("post success");
              console.log(res.data);
            }
          }
      ).catch((err) => {console.error("errrror"+err)});
    };


  const isAuth = useContext(AuthContext);


  return (
    <header className={styles.header}>

      <div className={styles["header-container"]}>
        <div className="row">
          <a href="/">
            <div className="row" style={{width: 150 + "px"}}>
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="3em"
                  height="3em"
                  viewBox="0 0 24 24"
              >
                <path
                    fill="currentColor"
                    d="M12 2a9 9 0 0 1 9 9v7.5a3.5 3.5 0 0 1-6.39 1.976a2.999 2.999 0 0 1-5.223 0a3.5 3.5 0 0 1-6.382-1.783L3 18.499V11a9 9 0 0 1 9-9m0 10c-1.105 0-2 1.12-2 2.5s.895 2.5 2 2.5s2-1.12 2-2.5s-.895-2.5-2-2.5M9.5 8a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m5 0a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3"
                />
              </svg>
              <h1 style={{fontSize: 2 + "rem"}}>service</h1>
            </div>
          </a>


            <nav>
              <ul>
                <li className={styles["list-item"]}>
                  <a href="#">활동 찾기</a>
                </li>
                <li className={styles["list-item"]}>
                  <a href="#">리워드 샵</a>
                </li>
                <li className={styles["list-item"]}>
                  <a href="#">물품 나눔</a>
                </li>
                <li className={styles["list-item"]}>
                  <a href="/login">로그인</a>
                </li>
                <li className={styles["list-item"]}>
                  <button onClick={logout}>로그아웃</button>
                </li>

                {/*<li className={styles["list-item"]}>*/}
                {/*  /!*<button >테스트버튼</button>*!/*/}
                {/*</li>*/}

                {isAuth? <button>로그인중~~</button>: <button>몰루</button>}
              </ul>
            </nav>
        </div>
        <div className="user-profile">
          <img src="https://placehold.co/50" alt=""/>
        </div>
      </div>
    </header>
  );
};

export default Header;
