import React from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="w-screen h-screen animate-color-change flex justify-center items-center">
      <div className="w-[40rem] max-sm:w-[20rem] sm:w-[30rem] h-[75%] max-sm:h-[60%] border-[0.5rem] border-inherit animate-colorbg-change rounded-2xl shadow-2xl relative">
        <div className="absolute inset-0 animate-color-change rounded-xl flex flex-col p-4">
          <h2 className="font-bold text-[3rem] text-center animate-color-changeText mb-12">Sign Up</h2> 
          <div className="flex justify-center mb-4">
            <input type="text" className="font-semibold animate-color-change w-[80%] p-2 rounded-xl placeholder:text-gray-900 border-2 animate-colorbg-change" placeholder="User Name" required='true' />
          </div>
          <div className="flex justify-center mb-4">
            <input type="email" className="font-semibold animate-color-change w-[80%] p-2 rounded-xl placeholder:text-gray-900 border-2 animate-colorbg-change" placeholder="Email" required='true' />
          </div>
          <div className="flex justify-center mb-6">
            <input type="password" className="font-semibold animate-color-change w-[80%] p-2 rounded-xl placeholder:text-gray-900 border-2 animate-colorbg-change" placeholder="Password" required='true' />
          </div>
          <div className="flex justify-center">
            <Link className="animate-color2-change w-[80%] p-4 text-gray-300 rounded-xl text-center" to='/signin'><button>Submit</button></Link>
          </div>
          <div className="flex justify-center p-4">
            <p className="mr-2 animate-color-changeText">Already have an account? </p>
            <Link to='/signin' className="animate-color-changeText font-semibold text-[1rem]">SignIn</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
