import Header from "./Header";
import Menu from "./Menu";
import Main from "../main/Main";
import Pagination from "../Pagination";


const Layout = () => {
  return (
      <div className="container" id="main">
        <Header></Header>
        <Menu></Menu>
        <Main/>
      </div>
  );
};

export default Layout;
