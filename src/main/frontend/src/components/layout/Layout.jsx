import Header from "./Header";

import MainPage from "../../pages/MainPage";
import {Route, Router, Routes} from "react-router-dom";
import Detail from "../../pages/Detail";
import {useState} from "react";
import RewardShop from "../../pages/RewardShop";
import ShopItemDetail from "../rewordShop/ShopItemDetail";
import Certification from "../../pages/Certification";
import ItemRegister from "../../pages/ItemRegister";
import Bookmark from "../../pages/Bookmark";


const Layout = () => {
  const [position, setPosition] = useState("main")
  const [searchQuery, setSearchQuery] = useState("")


  return (
      <div className="container" id={position}>
        <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery}></Header>
        <Routes>
          <Route path="/" element={<MainPage searchQuery={searchQuery} setSearchQuery={setSearchQuery} setPosition = {setPosition} />}/>
          <Route path="/bookmark" element={<Bookmark setPosition = {setPosition} />}/>

          <Route path="/detail/:id" element={<Detail setPosition = {setPosition} />}/>
          <Route path="/reward_shop" element={<RewardShop setPosition = {setPosition}/>}/>
          <Route path="/reward_shop/:id" element={<ShopItemDetail setPosition = {setPosition}/>}/>
          <Route path="/certification" element={<Certification setPosition = {setPosition}/>}/>
          <Route path="/reward_shop/item/register" element={<ItemRegister setPosition = {setPosition}/>}/>


        </Routes>
      </div>
  );
};

export default Layout;
