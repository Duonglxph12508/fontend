import { signup } from "api/authAPI";
import { authenticate } from "auth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "../styles/signin.css"
export default function Signup() {
  const { register, handleSubmit ,formState: { errors } } = useForm();
  const { er, setEr } = useState();
  const [success, setSuccess] = useState(false);
  const onSubmit = async (user, e) => {
    try {
      const { data } = await signup(user);
      authenticate(data); // set thông tin vào localStorage
      setSuccess(true);
      e.target.reset();
    } catch (error) {
      // setEr(error.response.data);
      console.log(error.response.data)
    }
  };
  
  return (
    <div>
      <main className="form-signin">
        <h1 className="h3 mb-3 fw-normal">Đăng ký</h1>
        <hr />
        
        {success && (
          <div className="alert alert-success">
            Bạn đã đăng ký thành công. Click <Link to="/signin">vào đây</Link> để
            login
          </div>
        )}
        <form onSubmit={handleSubmit(onSubmit)}>

          <div className="form-floating">
            <input type="email" {...register("email")} className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput" >Email address</label>
          </div>
          {errors.name && (
            <span className="d-block mt-2 text-danger">
              Bắt buộc phải nhập trường này
            </span>
          )}
          <div className="form-floating">
            <input type="text" {...register("username")} className="form-control" id="floatingInput" placeholder="User name" />
            <label htmlFor="floatingInput"  >user name</label>
          </div>
          <div className="form-floating">
            <input type="password"  {...register("password")} className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword" >Password</label>
          </div>


          <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
          <Link to="/signin" className="mt-5 mb-3 text-muted">Signin?</Link>
        </form>
      </main>
      <div style={{ position: 'absolute', top: 0 }} />
    </div>


  );
}