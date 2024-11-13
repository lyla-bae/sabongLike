import Activites from "./Activites";
import TodaysGoal from "./TodaysGoal";
import React from "react";
import GoalAndGoods from "./GoalAndGoods";

const MainContainer = () => {
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <div
        className={"row"}
        style={{ width: "1280px", justifyContent: "space-between" }}
      >
        <Activites />
        <GoalAndGoods />
      </div>
    </div>
  );
};
export default MainContainer;
