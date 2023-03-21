import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Login = () => {
  const { signInUser, googleLogin } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");

  const navigate = useNavigate();
  const location= useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    setLoginError("");
    signInUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
    .then(result => {
      const user = result.user;
      console.log(user);
      navigate(from, { replace: true });
    })
    .catch(error => {
      setLoginError(error.message)
      console.log(error.message)
    })
  }
  return (
    <div className="h-[600px] flex justify-center items-center ">
      <div className="w-96 p-4">
        <h2 className="text-3xl text-center">Please Login </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text text-md"> Email</span>
            </label>
            <input
              {...register("email", { required: "Email is Required" })}
              type="email"
              className="input input-bordered w-full "
            />
            {errors.email && (
              <p role="alert" className="text-red-600 my-2">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text text-md">Password</span>
            </label>
            <input
              {...register("password", {
                required: "Password is Required",
                minLength: {
                  value: 6,
                  message: "Password Must Be 6 Or More Characters",
                },
              })}
              type="password"
              className="input input-bordered w-full "
            />
            {errors.password && (
              <p role="alert" className="text-red-600 my-2">
                {errors.password?.message}
              </p>
            )}
            {loginError && (
              <p role="alert" className="text-red-600 my-2">
                {loginError}
              </p>
            )}
          </div>
          <input
            type="submit"
            className="input input-bordered w-full bg-primary text-white my-4"
          />
        </form>
        <p>
          New To Doctor Portal{" "}
          <Link to="/signup" className="text-red-500">
            Create An Account
          </Link>
        </p>
        <div className="divider">OR</div>
        <button onClick={handleGoogleLogin} className="btn btn-outline w-full">Continue With Google</button>
      </div>
    </div>
  );
};

export default Login;
