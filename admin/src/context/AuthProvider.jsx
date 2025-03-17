import {useCallback, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {ROUTES} from "@/routes/routes";
import {LOCAL_STORAGE_KEY} from "@/utils/localStorage";
import {AuthContext} from "@/context/hooks/useAuth.js";

const AuthProvider = ({children}) => {
    const navigate = useNavigate();

    const [token, setToken] = useState(localStorage.getItem(LOCAL_STORAGE_KEY.TOKEN) || undefined);

    const initializeToken = useCallback((token) => {
        setToken(token);
        localStorage.setItem(LOCAL_STORAGE_KEY.TOKEN, token);
    }, []);

    const clearToken = useCallback(() => {
        setToken(undefined);
        localStorage.removeItem(LOCAL_STORAGE_KEY.TOKEN);
    }, []);

    const login = useCallback((data) => {
        console.log(data);

        const token = "token";

        initializeToken(token);
        navigate(ROUTES.HOME);
    }, [initializeToken, navigate]);

    const logout = useCallback(() => {
        clearToken();
        navigate(ROUTES.LOGIN);
    }, [clearToken, navigate]);

    const value = {
        // variable
        token,

        // function
        login,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export {AuthProvider};