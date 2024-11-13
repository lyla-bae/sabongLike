import Header from "./Header";
import Footer from "./Footer";
import Router from "./Router";
import KakaoMap from "../detail/Map";

const Layout = () => {
  return (
    <div>
        <Header></Header>
        <Router></Router>
        <Footer></Footer>
        {/*<KakaoMap></KakaoMap>*/}
    </div>
  );
};

export default Layout;
