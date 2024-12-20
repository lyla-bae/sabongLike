
import "./App.css";
import "./style/reset.css";
import "./style/default.css";
// import "./style/font.css";
import "./style/reward.css";
import Layout from "./components/layout/Layout";
import {BrowserRouter} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
      <BrowserRouter>

       <Layout></Layout>
        <ToastContainer/>
      </BrowserRouter>
  );
}

export default App;
