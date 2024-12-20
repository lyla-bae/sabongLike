import {useEffect} from "react";

const NaverLoginButton = ({ onLoginSuccess }) => {
    useEffect(() => {
        const naverLogin = new window.naver.LoginWithNaverId({
            clientId: 'V6vPv_StmoIqst9087z6',
            callbackUrl: 'http://aaaa8178928.cafe24.com/login/oauth2/code/naver',
            isPopup: false,
            loginButton: { color: 'green', type: 3, height: 50 },
            scope: 'name',
            responseType: 'code',
            state: 'uniqueRandomStateValue'
        });
        naverLogin.init();

        window.addEventListener('load', () => {
            naverLogin.getLoginStatus((status) => {
                if (status) {
                    const { email, name } = naverLogin.user;
                    onLoginSuccess({ email, name });
                }
            });
        });
    }, [onLoginSuccess]);

    return <div id="naverIdLogin"></div>;
};

export default NaverLoginButton;