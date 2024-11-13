import styles from "./DataTable.module.css";
import { Link } from "react-router-dom";
import React from "react";

const Card = (props) => {
  let item = props.item;

  const setDateFormat = (date) => {
    const year = date.toString().substr(0, 4);
    const month = date.toString().substr(4, 2);
    const day = date.toString().substr(6, 2);
    return `${year}.${month}.${day}`;
  };

  return (
      <div key={item["progrmRegistNo"]} className={styles.card}>
          {/*<span>{item["progrmRegistNo"]}</span>*/}
          <Link className={styles.link} to={"/detail/" + item["progrmRegistNo"]}>
              <p className={styles.title}>{item["progrmSj"]}</p>
              <div className={styles["sub-text"]}>
                  <span>{item["nanmmbyNm"]}</span>
                  <div className="row">
                      <span>{setDateFormat(item["progrmBgnde"])}</span>
                      <span>~</span>
                      <span>{setDateFormat(item["progrmEndde"])}</span>
                  </div>
              </div>

          </Link>
          {/*<a href={item["url"]}>링크</a>*/}

      </div>
  );
};

export default Card;
