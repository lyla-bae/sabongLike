import styles from "../../main/DataTable.module.css"
import MenuComponent from "../../main/MenuComponent";
const SearchWithTheme = () => {
    return (< div style={{width: "100%" }} className={styles.test} >
        <MenuComponent class =  {styles["test-first"]} width = {"100%"} color={"blue-yellow-grad"}>{`환경`}</MenuComponent>
        <MenuComponent  aspectRatio ={"1"}width = {"100%"} color={"orange-grad"}>{`교육`}</MenuComponent>
        <MenuComponent  aspectRatio ={"1"}width = {"100%"} color={"blue-yellow-grad"}>{`의료`}</MenuComponent>
        <MenuComponent  aspectRatio ={"1"}width = {"100%"} color={"orange-grad"}>{`상담`}</MenuComponent>
        <MenuComponent  aspectRatio ={"1"}width = {"100%"} color={"blue-yellow-grad"}>{`농어촌`}</MenuComponent>
        <MenuComponent class =  {styles["sixth-first"]} width = {"100%"} color={"orange-grad"}>{`비대면`}</MenuComponent>

    </div>)
}

export default SearchWithTheme