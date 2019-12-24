import * as React from "react";
import { useState } from "react";
import useForm from "react-hook-form";
import axios from 'axios';


interface LoginUserData {
  email: string;
  password: string;
}

const Login = (): JSX.Element => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, errors } = useForm<LoginUserData>();

  const loginSuccess = () => setLoggedIn(true);

  const onSubmit = handleSubmit((data: LoginUserData) => {
    setLoading(true);
    axios
      .post("http://localhost:3001/login", data, {
        withCredentials: true
      })
      .then(response => {
        if (response.data.logged_in) {
          loginSuccess();
        } else {
          setLoginError(response.data.errors[0]);
        }
      })
      .catch(error => {
        setLoginError("unable to login!");
      });
    setLoading(false);
  });

  return (
    <>
      {!loggedIn && (
        <form className="form" onSubmit={onSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            ref={register({ required: true })}
            name="email"
          />
          {errors.email && <span>This field is required</span>}
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            ref={register({ required: true })}
            name="password"
          />
          {errors.password && <span>This field is required</span>}
          <input type="submit" value="Login" disabled={loading} />
          <span>{loginError}</span>
        </form>
      )}
    </>
  );
};

export default Login;
