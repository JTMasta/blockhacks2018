import Axios from 'axios';

const baseURL = 'http://127.0.0.1:5000/';

export const register = (name,username,password,birthday,gender,keyAccess,program,profilePicture) =>{
    return Axios.request({
        baseURL,
        method:'post',
        url:'/member/register',
        data:{
            name,
            username,
            password,
            birthday,
            gender,
            keyAccess,
            program,
            profilePicture,
        }
    });
};

export const login = (username,password) =>{
    return Axios.request({
        baseURL,
        method:'post',
        url:'/member/login',
        data:{
            username,
            password,
        }
    });
};

export const logout = () =>{
    return Axios.request({
        baseURL,
        method:'post',
        url:'/member/logout',
    });
};