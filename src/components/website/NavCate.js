import { getAllCate } from "api/categoryAPI";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
export default function NavCate() {
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
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{ width: 210 }}>
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                <svg className="bi me-2" width={40} height={32}><use xlinkHref="#bootstrap" /></svg>
                <span className="fs-4">Category</span>
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
            {category.map((category,index)=>(
                <li className="nav-item" key={index}>
                <Link to={"/categoryLayout/category/"+category.id+"/product"} className="nav-link link-dark" aria-current="page">
                    <svg className="bi me-2" width={16} height={16}><use xlinkHref="#home" /></svg>
                    {category.name}
                </Link>
            </li>
            ))}
                
            </ul>
            
        </div>

    );
}