import Header from "./Header";
import Footer from "./Footer";
import Router from "./Router";
import styles from "../main/DataTable.module.css"
import {AuthProvider} from "../providers/AuthProvider";


const Layout = () => {
  return (
    <AuthProvider>
        <Header></Header>
        <div className={styles["body-height"]}>
            <Router></Router>
        </div>
        <Footer></Footer>
    </AuthProvider>
  );
};

export default Layout;
