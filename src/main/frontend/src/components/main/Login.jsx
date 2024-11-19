import {useState} from "react";
import axios, {request} from "axios";
import {useNavigate} from "react-router-dom";

const Login = () => {


    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(false)
    const [loginInput, setLoginInput] = useState({
        username: "",
        password: "",

    });

    const handleInputChange = (e) => {
        setLoginInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };


    const handleLogin = async (e) => {

        e.preventDefault();
        const formData = new FormData();
        formData.append("username", loginInput.username);
        formData.append("password", loginInput.password);
        const res = await axios.post(
            "http://localhost:8080/user/login",formData,{
            headers: {
                "Content-Type": "multipart/form-data",
            }}
            ).then((res)=> {
                if (res.status === 200) {
                    setIsLogin(true);

                    console.log("post success");
                    console.log(res.data);
//https://steadily-worked.tistory.com/831
                }
            }
        ).catch((err) => {console.error("errrror"+err)});
    };


    return(<div>
        <form action="/user/login" method="POST">
            <div  style={{width: "100%"}}>
                <div className="col" style={{width:'500px', justifySelf: "center"}}>
                    <label htmlFor="username">아이디</label>
                    <input name='username' id='username' value={loginInput.loginId} onChange={handleInputChange}
                           type="text"/>
                    <label htmlFor="password">비밀번호</label>
                    <input name='password' id="password" value={loginInput.password} onChange={handleInputChange}
                           type="password"/>

                    {isLogin ? <span>로그아웃</span>: <button onClick={handleLogin}>로그인</button>}
                    <span>{" "+isLogin}</span><span>테스트</span>

                </div>

            </div>

        </form>
    </div>);

}

export default Login