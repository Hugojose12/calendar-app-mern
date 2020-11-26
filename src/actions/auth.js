import { fetchNotToken, fetchToken } from "../helpers/fetch"
import { types } from "../types/types";
import Swal from "sweetalert2";
import { eventLogout } from "./events";

export const startLogin = ( email, password) => {
    return async(dispatch) => {
        
        const resp = await fetchNotToken('auth', {email, password}, 'POST')
        const body = await resp.json();

        if(body.ok) {
            localStorage.setItem('token-auth', body.token);
            localStorage.setItem('token-start', new Date().getTime());
        } else {
            Swal.fire('Error', body.msg, 'error');
        }

        dispatch( login({
            uid: body.uid,
            name: body.name
        }))

    }
}

export const startRegister = ( email, password, name ) => {
    return async (dispatch) => {
        const resp = await fetchNotToken('auth/new', { name, email, password }, 'POST')
        const body = await resp.json();

        if(body.ok) {
            localStorage.setItem('token-auth', body.token);
            localStorage.setItem('token-start', new Date().getTime());
        } else {
            Swal.fire('Error', body.msg, 'error');
        }

        dispatch( register({
            uid: body.uid,
            name: body.name
        }))
    }
}

export const startChecking= () => {
    return async (dispatch) => {
        const resp = await fetchToken('auth/renew')
        const body = await resp.json();

        if(body.ok) {
            localStorage.setItem('token-auth', body.token);
            localStorage.setItem('token-start', new Date().getTime());

            dispatch( login({
                uid: body.uid,
                name: body.name
            }))

        } else {
            dispatch(checkingFinish());
        }

        
    }
}

export const startLogout = () => {
    return(dispatch) => {
        localStorage.clear();
        dispatch( eventLogout() );
        dispatch(logout());
    }
}

const checkingFinish = () => ({
    type: types.authCheckingFinish
})

const login = ( user ) => ({
    type: types.authLogin,
    payload: user
});

const register = ( user ) => ({
    type: types.authStartRegister,
    payload: user
})

const logout = () => ({
    type: types.authlogout
})