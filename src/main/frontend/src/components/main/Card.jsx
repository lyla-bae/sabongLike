import styles from "../../style/DataTable.module.css";
import { Link } from "react-router-dom";
import React from "react";

const Card = (props) => {
  let item = props.item;

  const setDateFormat = (date) => {

    try {const year = date.toString().substr(0, 4);
      const month = date.toString().substr(4, 2);
      const day = date.toString().substr(6, 2);
      return `${year}.${month}.${day}`;}
    catch (e) {
      console.log(e)
      return date

    }


  };

  return (
      <div key={item["progrmRegistNo"]}>
           <Link  to={"/detail/" + item["progrmRegistNo"]}>
              <p>{item["progrmSj"]}</p>
              <div className={styles["sub-text"]}>
                  <span>{item["nanmmbyNm"]}</span>
                  <div className="row">
                    <span>{item["progrmBgnde"]}</span>
                    <span>{item["progrmEndde"]}</span>

                       <span>~</span>
                   </div>
              </div>

          </Link>

      </div>
  );
};

export default Card;
