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
                        <li><NavLink  to="/categoryLayout" className="nav-link px-2 text-secondary">Category</NavLink></li>
                        
                    </ul>
                    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                        <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search" />
                    </form>
                    <div className="text-end">
                        <NavLink to="/signin" type="button" className="btn btn-outline-light me-2">Login</NavLink>
                        <button type="button" onClick={()=>signout(()=>{
                            history.push("/")
                        })}  className="btn btn-warning">Logout</button>
                    </div>
                </div>
            </div>
        </header>

    );
}