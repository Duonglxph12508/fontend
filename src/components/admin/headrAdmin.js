import { isAuthenticated, signout } from "auth";
import { NavLink, useHistory } from "react-router-dom";

export default function Header() {
    const user = isAuthenticated().user;
    const history=useHistory();

    return (
        <header className="p-3 bg-dark text-white">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                        <svg className="bi me-2" width={40} height={32} role="img" aria-label="Bootstrap"><use xlinkHref="#bootstrap" /></svg>
                    </a>
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><NavLink  to="/" className="nav-link px-2 text-secondary">Home</NavLink></li>
                        <li><NavLink to="/admin/product" className="nav-link px-2 text-white">Product</NavLink></li>
                        <li><NavLink to="/admin/category" className="nav-link px-2 text-white">Category</NavLink></li>
                        <li><NavLink to="/admin/users" className="nav-link px-2 text-white">Users</NavLink></li>
                    </ul>
                    <span className="text-white ms-3 inline-block col col-lg-2">
                        xin chào {user.username}</span>
                    <div className="text-end">
                        
                        <button onClick={()=>signout(()=>{
                            history.push("/")
                        })} type="button" className="btn btn-outline-light me-2">Logout</button>
                    </div>
                </div>
            </div>
        </header>

    );
}