// import { async } from "@firebase/util"; 
import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";


const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { user, signUp } = UserAuth();
    const navigate = useNavigate()
  
    const submitHandler = async (event) => {
      event.preventDefault();
      try {
        await signUp(email, password);
        navigate('/')
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <div className="w-full h-screen ">
      <img
        className="hidden sm:block w-full h-full absolute object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/1ef84595-1fdb-4404-adac-15215ceeb3ae/7645af9d-2679-4f54-b57d-3a6b5c670e14/IN-en-20220711-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="/"
      />
      <div className="bg-black/50 fixed top-0 left-0 w-full h-screen bg-gradient-to-r from-black"></div>
      <div className="fixed w-full px-4 py-24 z-50">
        <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
          <div className="max-w-[320px] mx-auto py-16">
            <h1 className="text-3xl font-bold">Sign Up</h1>
            <form
              onSubmit={submitHandler}
              className="w-full flex flex-col py-4"
            >
              <input
                  onChange={(event) => setEmail(event.target.value)}
                  className='p-3 my-2 bg-gray-700 rounded'
                  type='email'
                  placeholder='Email'
                  autoComplete='email'
                />
                <input
                  onChange={(event) => setPassword(event.target.value)}
                  className='p-3 my-2 bg-gray-700 rounded'
                  type='password'
                  placeholder='Password'
                  autoComplete='current-password'
                />
              <button className="bg-red-600 py-3 my-6 rounded font-bold">
                Sign Up
              </button>
              <div className="flex justify-between items-center text-sm text-white">
                <p>
                  <input className="mr-2" type="checkbox" />
                  Remember me
                </p>
                <p>Need Help?</p>
              </div>
              <p className="py-8">
                <span className="text-gray-600">
                  Already subscribed to Netflix?
                </span>{" "}
                <Link to="/login">Sign In</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
