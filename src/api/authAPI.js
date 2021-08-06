import instance from './instance';

export const signup = (user) => {
    const url = '/signup';
    return instance.post(url, user);
}
export const signin = (user) => {
    const url = '/signin';
    return instance.post(url, user);
}
export const getAllUser = ()=>{
    const url=`/Users`;
    return instance.get(url);
}
export const removeUser = (id)=>{
    const url=`/users/${id}`;
    return instance.delete(url);
}