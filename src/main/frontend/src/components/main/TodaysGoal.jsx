import React from "react";
import styles from "./DataTable.module.css";
const TodaysGoal = () => {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        alignItems: "start",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
    >
      <div className={styles.goal}>{`오늘의 목표 수행 하기 `}</div>
    </div>
  );
};

export default TodaysGoal;
