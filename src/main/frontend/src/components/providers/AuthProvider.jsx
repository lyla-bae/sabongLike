
import {createContext, useContext, useEffect, useState} from "react";
import axios from "axios";

export const AuthContext = createContext({});



export const AuthProvider = (props) => {
    const {children} = props;
    const [isLogin, setIsLogin] = useState(false)

    const isAuth = async()=>{
        const res = await axios.get(
            "http://localhost:8080/user/isAuth"
        ).then((res)=> {
            if (res.status === 200) {
                console.log("login session req success");
                console.log(res.data);
                if (res.data===false) {
                    setIsLogin(false);
                }
                if (res.data===true) {
                    setIsLogin(true);
                }
            }
        }).catch(err=>{console.error("errrror"+err)});
    }



    useEffect(()=>{
        isAuth();
    },[isLogin]);

    return (<AuthContext.Provider value={isLogin} >
        <button onClick={isAuth}>testbtn</button> {children}</AuthContext.Provider>)
}



