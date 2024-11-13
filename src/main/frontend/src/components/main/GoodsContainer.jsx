import Goods from "./Goods";
import React from "react";

const GoodsContainer = () => {
  return (
    <>
      {" "}
      <span style={{ fontSize: "2rem" }}>리워드 샵</span>
      <div
        style={{
          columnGap: "24px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          alignItems: "center",
        }}
      >
        <Goods />
        <Goods />
        <Goods />
        <Goods />
        <Goods />
        <Goods />
        <Goods />
        <Goods />
        <Goods />
        <Goods />
        <Goods />
        <Goods />
        <Goods />
        <Goods />
        <Goods />
        <Goods />
        <Goods />
        <Goods />
        <Goods />
        <Goods />
      </div>
    </>
  );
};

export default GoodsContainer;
