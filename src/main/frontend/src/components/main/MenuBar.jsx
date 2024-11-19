import MenuComponent from "./MenuComponent";
import {Link} from "react-router-dom";

const MenuBar = () => {
  return (
    <div
      className="MenuBar"
      style={{ width: "100%", display: "flex", justifyContent: "center" }}
    >
      <div
        className="row"
        style={{ width: "1280px", justifyContent: "space-between" }}
      >

        <MenuComponent aspectRatio ={"1.618"}  width = {"16%"} color={"red-grad"}>
          <Link to="/Theme" style={{ textDecoration: "none",color: "white" }}>
            {`테마별\n활동찾기`}</Link>
        </MenuComponent>
        <MenuComponent aspectRatio ={"1.618"} width = {"16%"} color={"blue-yellow-grad"}>
          <Link to="/Location" style={{ textDecoration: "none",color: "white" }}>
            {`내 주변\n활동찾기`}</Link>

        </MenuComponent>
        <MenuComponent aspectRatio ={"1.618"}  width = {"16%"} color={"blue-grad"}>{`지금당장\n활동찾기`}</MenuComponent>
        <MenuComponent aspectRatio ={"1.618"}  width = {"16%"} color={"blue-green-grad"}>리워드 샵</MenuComponent>
        <MenuComponent  aspectRatio ={"1.618"}  width = {"16%"} color={"orange-grad"}>물품나눔</MenuComponent>
      </div>
    </div>
  );
};
export default MenuBar;
