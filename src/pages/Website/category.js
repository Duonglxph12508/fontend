import {  getAllCate } from "api/categoryAPI"
import { useEffect, useState } from "react"

export default function Category(){
    const[category,setCategory]= useState([]);
    useEffect(()=>{
        const getCategory = async ()=>{
            try{
                const{data}= await getAllCate();
                setCategory(data);
            }catch(error){}
        };
        getCategory();
    },[]);
    return(
        <div>
            {category.map((category,index)=>{
                return <select key={index} className="form-control" >
                <option value={category.id}>{category.name}</option>
                
              </select>
            })}
        </div>
        
    );
}