import Header from "./Header";

import MainPage from "../../pages/MainPage";
import {Route, Router, Routes} from "react-router-dom";
import Detail from "../../pages/Detail";
import {useState} from "react";
import RewardShop from "../../pages/RewardShop";
import ShopItemDetail from "../rewordShop/ShopItemDetail";
import Certification from "../../pages/Certification";


const Layout = () => {
  const [position, setPosition] = useState("main")


  return (
      <div className="container" id={position}>
        <Header></Header>
        <Routes>
          <Route path="/" element={<MainPage setPosition = {setPosition} />}/>
          <Route path="/detail/:id" element={<Detail setPosition = {setPosition} />}/>
          <Route path="/reward_shop" element={<RewardShop setPosition = {setPosition}/>}/>
          <Route path="/reward_shop/:id" element={<ShopItemDetail setPosition = {setPosition}/>}/>
          <Route path="/certification" element={<Certification setPosition = {setPosition}/>}/>


        </Routes>
      </div>
  );
};

export default Layout;
