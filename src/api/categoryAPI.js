import instance from "./instance";
export const addCate = (item)=>{
    const url="/category";
    return instance.post(url,item);
}
export const editCate = (item)=>{
    const url=`/category/${item.id}`;
    return instance.put(url,item);
}
export const getCate = (id)=>{
    const url=`/category/${id}`;
    return instance.get(url);
}
export const removeCate = (id)=>{
    const url=`/category/${id}`;
    return instance.delete(url);
}
export const getAllCate = (page)=>{
    const url=`/category`;
    return instance.get(url);
}

export const getProductByCate = (id)=>{
    const url=`/category/${id}/product`;
    return instance.get(url);
}

export const getRelatedProduct = (idCate,idProd)=>{
    const url=`/category/${idCate}/product?id_ne=${idProd}`;
    return instance.get(url);
}
