import { signin } from "api/authAPI";
import { authenticate, isAuthenticated } from "auth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, Redirect } from "react-router-dom";
import "../styles/signin.css"
export default function Signin() {
  const user= isAuthenticated().user;
  const {register,handleSubmit,formState: { errors }}=useForm();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const onSubmit = async (user) =>{
    try {
      const { data } = await signin(user);
      authenticate(data); // set thông tin vào localStorage
      setSuccess(true);
    } catch (error) {
      setError(error.response.data);
    }
  }
  // console.log(user.id)
  const redirectUser = () => {
    if (success) {
      if (user.id == 1) {
        return <Redirect to="/admin" />;
      } else {
        return <Redirect to="/" />;
      }
    }
  };
  return (
    <div>
      <main className="form-signin">
        {redirectUser()}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* <img className="mb-4" src="../images/logo.png" alt width={72} height={57} /> */}
          <h1 className="h3 mb-3 fw-normal">Vui lòng đăng nhập</h1>
          <div className="form-floating">
            <input type="email" {...register("email")} className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input type="password" {...register("password")} className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
          <Link to="/signup" className="mt-5 mb-3 text-muted">Signup?</Link>
        </form>
      </main>
      <div style={{ position: 'absolute', top: 0 }} />
    </div>
  );
}