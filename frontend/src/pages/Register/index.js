import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import HeroSection from "../../components/HeroSection";
import api from "../../services/api";
import {useStateValue} from '../../services/StateProvider';
import Footer from "../../components/Footer";

const Register = ({ history }) => {
  const [,dispatch] = useStateValue();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    //The baseUrl is explicit, as first argument we pass the route to post, second argument an object with the info
    const response = await api.post("/user/register", {
      email,
      password,
      firstName,
      lastName,
    });
    console.log(response);
    console.log(response.data);
    //If the could login, we can get the data,
    const userId = response.data._id || false;

    if (userId) {
      //We create a localstorage to have the info in all the SPA
      localStorage.setItem("user", userId);
      dispatch({
        type : 'SET_USER',
        user : userId
      });
      history.push("/dashboard");
    } else {
      const { message } = response.data;
      alert(message);
    }
  };

  return (
    <>
      <Navbar />
      <HeroSection />
      <section className="container registration">
        <h2>Register</h2>
        <p>Create a new account</p>
        <form inline className="registration__form" onSubmit={handleSubmit}>
          <div className="  text-xl-center">
            <input
              className=""
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Your First Name"
              onChange={(evt) => setFirstName(evt.target.value)}
            />
          </div>
          <div className="  ">
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Your Last Name"
              onChange={(evt) => setLastName(evt.target.value)}
            />
          </div>
          <div className=" ">
            <input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Your Email"
              onChange={(evt) => setEmail(evt.target.value)}
            />
          </div>
          <div className=" ">
            <input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="Your Password"
              onChange={(evt) => setPassword(evt.target.value)}
            />
          </div>
          <button className="btn primary">Submit</button>
          <button className="btn secondary" onClick={() => history.push("/")}>
            Login Instead?
          </button>
        </form>
      </section>
      <Footer />
    </>
  );
};

export default Register;
