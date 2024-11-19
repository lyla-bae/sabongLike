import {useState} from "react";
import axios from "axios";

const SignUp = () => {


    const [signupInput, setSignupInput] = useState({
        loginId: "",
        password1: "",
        password2: "",
        nickname: ""
    });

    const handleInputChange = (e) => {
        setSignupInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };


    const handleLogin = async (e) => {

        e.preventDefault();
            const res = await axios.post(
                "http://localhost:8080/user/signup",{
                    loginId: signupInput.loginId,
                password1: signupInput.password1,
                password2: signupInput.password2,
                nickname: signupInput.nickname
        }).then((res)=> {
                    if (res.status === 200) {
                        console.log("post success");
                        console.log(res.data);
                    }
                }
            ).catch((err) => {console.error("errrror"+err)});
    };


    return(<div>
        <form action="/user/login" method="POST">
            <div  style={{width: "100%"}}>
                <div className="col" style={{width:'500px', justifySelf: "center"}}>
                <label htmlFor="loginId">아이디</label>
                <input name='loginId' id='loginId' value={signupInput.loginId} onChange={handleInputChange}
                       type="text"/>
                <label htmlFor="password1">비밀번호</label>
                <input name='password1' id="password1" value={signupInput.password1} onChange={handleInputChange}
                       type="password"/>
                <label htmlFor="password2">비밀번호 재입력</label>
                <input name='password2' id="password2" value={signupInput.password2} onChange={handleInputChange}
                       type="password"/>
                <label htmlFor="nickname">닉네임</label>
                <input name='nickname' id="nickname" value={signupInput.nickname} onChange={handleInputChange}
                       type="text"/>
                <button onClick={handleLogin}>회원가입</button>
                </div>

            </div>

        </form>
    </div>);

}

export default SignUp