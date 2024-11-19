import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "../detail/getDetail";
import Search from "../search/Search";
import MenuBar from "../main/MenuBar";
import Activites from "../main/Activites";
import TodaysGoal from "../main/TodaysGoal";
import MainContainer from "../main/MainContainer";
import SearchWithTheme from "../search/theme/SearchWithTheme";
import SearchWithLocation from "../search/Location/SearchWithLocation";
import Test from "../main/Test";
import SignUp from "../main/SignUp";
import Login from "../main/Login";

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
                <Route path="/search/:keyword" element={<Search />} />
                <Route path="/detail/:id" element={<Detail />} />
                <Route path="/theme/" element={<SearchWithTheme/>} />
                <Route path="/location/" element={<SearchWithLocation/>} />
                <Route path="/test/" element={<Test></Test> } />
                <Route path="/signup/" element={<SignUp></SignUp> } />
                <Route path="/login/" element={<Login></Login> } />

            </Routes>
        </BrowserRouter>
    );
};

export default Router;