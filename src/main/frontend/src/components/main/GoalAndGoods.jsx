import TodaysGoal from "./TodaysGoal";
import React from "react";
import Goods from "./Goods";
import GoodsContainer from "./GoodsContainer";

const GoalAndGoods = () => {
  return (
    <div style={{ alignSelf: "start", marginLeft: "1%", width: "59%" }}>
      <span style={{ fontSize: "2rem" }}>오늘의 목표</span>

      <TodaysGoal />
      <GoodsContainer />
      {/*<TodaysGoal/>*/}
    </div>
  );
};

export default GoalAndGoods;
