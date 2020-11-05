import React, { useState } from "react";
import api from "../../services/api";

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    //The baseUrl is explicit, as first argument we pass the route to post, second argument an object with the info
    const response = await api.post("/login", { email, password });

    //If the could login, we can get the data,
    const userId = response.data._id || false;

    if (userId) {
      //We create a localstorage to have the info in all the SPA
      localStorage.setItem("user", userId);
      history.push("/dashboard");
    } else {
      const { message } = response.data;
      alert(message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <p>
        Please <strong>Login</strong> into your account
      </p>
      <form inline onSubmit={handleSubmit}>
        <div className="mb-2 mr-sm-2 mb-sm-0">
          <input
            required
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="Your Email"
            onChange={(evt) => setEmail(evt.target.value)}
          />
        </div>
        <div className="mb-2 mr-sm-2 mb-sm-0">
          <input
            required
            type="password"
            name="password"
            id="examplePassword"
            placeholder="Your Password"
            onChange={(evt) => setPassword(evt.target.value)}
          />
        </div>
        <button>Submit</button>
        <button onClick={() => history.push("/register")}>
          Not an user? Register
        </button>
      </form>
    </div>
  );
};

export default Login;
