import React, { useState } from "react";
import styles from "./DataTable.module.css";
import { Link } from "react-router-dom";
import Card from "./Card";

export default function DataTable(props) {
  return (
    // <div className={styles.main}>
    <div style={{ alignSelf: "start", marginRight: "1%", width: "39%" }}>
      <span style={{ fontSize: "2rem" }}>오늘의 추천 활동</span>
      <div className={styles.container}>
        {props.items.map((item) => (
          <Card key={item["progrmRegistNo"]} item={item} />
        ))}
      </div>
    </div>
    // </div>
  );
}
