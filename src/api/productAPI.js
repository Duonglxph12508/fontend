import instance from "./instance";

export const getAll = (page)=>{
    const url=`/product`;
    return instance.get(url);
}

export const get = (id)=>{
    const url=`/product/${id}`;
    return instance.get(url);
}

export const remove = (id)=>{
    const url=`/product/${id}`;
    return instance.delete(url);
}

export const edit = (item)=>{
    const url=`/product/${item.id}`;
    return instance.put(url,item);
}

export const add = (item)=>{
    const url="/product";
    return instance.post(url,item);
}