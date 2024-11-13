import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "../detail/getDetail";
import Search from "../main/Search";
import MenuBar from "../main/MenuBar";
import Activites from "../main/Activites";
import TodaysGoal from "../main/TodaysGoal";
import MainContainer from "../main/MainContainer";
import SearchWithTheme from "../theme/SearchWithTheme";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={
                    <>
                    <MenuBar/>
                    <MainContainer/>
                    </>
                }/>
                <Route path="/Search/:keyword" element={<Search />} />
                <Route path="/Detail/:id" element={<Detail />} />
                <Route path="/Theme/" element={<SearchWithTheme/>} />


            </Routes>
        </BrowserRouter>
    );
};

export default Router;