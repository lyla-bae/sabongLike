import styles from "./DataTable.module.css";

const menuComponents = (props) => {
  return (
    <div style ={{width: props.width, aspectRatio:props.aspectRatio}} className={`${styles["menu-comp"]} ${styles[[props.color]]} ${props.class}`}>
      {props.children}
    </div>
  );
};
export default menuComponents;
