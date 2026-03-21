import React from "react";
import GenderCheckbox from "./GenderCheckbox";
import { Link } from "react-router-dom";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";
const SignUp = () => {

  const [inputs,setInputs] = useState({
    fullname:"",
    username:"",
    password:"",
    confirmPassword:"",
    gender:""
  })

  const {signup,loading} = useSignup();
  const handleCheckboxChange = (gender)=>{
    setInputs({...inputs,gender})
  }
  const handleSubmit =async (e) =>{
    e.preventDefault();
    await signup(inputs)
    

  }
  return (
    <div className="w-96 p-8 rounded-2xl shadow-xl backdrop-blur-md bg-white/10 border border-white/20">

      <h1 className="text-3xl font-semibold text-center text-white mb-6">
        Sign Up <span className="text-blue-400">ChatApp</span>
      </h1>

      <form className="space-y-4" onSubmit={handleSubmit}>

          {/* Full Name */}
          <div>
            <label className="block text-sm text-gray-200 mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Bob Doe"
              className="w-full px-3 py-2 rounded-lg bg-white/80 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={inputs.fullname}
                onChange={(e) => setInputs({...inputs, fullname: e.target.value})}

           />
          </div>

          {/* Username */}
          <div>
            <label className="block text-sm text-gray-200 mb-1">
              Username
            </label>
            <input
              type="text"
              placeholder="bobdoe"
              className="w-full px-3 py-2 rounded-lg bg-white/80 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={inputs.username}
                onChange={(e) => setInputs({...inputs, username: e.target.value})}
           />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-gray-200 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-3 py-2 rounded-lg bg-white/80 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={inputs.password}
                onChange={(e) => setInputs({...inputs, password: e.target.value})}
           />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm text-gray-200 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Re-enter password"
              className="w-full px-3 py-2 rounded-lg bg-white/80 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={inputs.confirmPassword}
                onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}
           />
          </div>
            <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender}/>
          <Link to={'/login'} className='text-sm hover:underline hover:text-blue-600 mt-1 inline-block'>
                        Already have an account?
                    </Link>


          {/* Button */}
          <button
            type="submit"
            className="w-full py-2 mt-1 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold transition"
                   disabled={loading} >
            {loading? <span className="loading loading-spinner loading-sm"></span> : "Sign Up"}
          </button>

        </form>

    </div>
  );
};

export default SignUp;