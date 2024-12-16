
import "./App.css";
import "./style/reset.css";
import "./style/default.css";
// import "./style/font.css";
import "./style/reward.css";



import Layout from "./components/layout/Layout";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>

       <Layout></Layout>
      </BrowserRouter>
  );
}

export default App;
