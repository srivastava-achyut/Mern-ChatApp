import React from 'react'
import { Link } from "react-router-dom";
import { useState } from 'react';
import useLogin from '../../hooks/useLogin';

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const {loading,login} = useLogin();
    
    const handleSubmit = async (e) =>{
        e.preventDefault();
        await login(username,password)
    }
 
  return (
    <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg
           bg-opacity-0'>
            <h1 className='text-3xl font-semibold text-center text-gray-300'>Login
                <span className='text-blue-500'>  ChatApp</span>
            </h1>
                <form onSubmit={handleSubmit}>
                    <div className='mb-4'>
                        <label className='block text-gray-300 text-sm font-bold mb-2' htmlFor='username'>
                            Username
                        </label>
                        <input
                            className='bg-gray-200 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                           
                            type='text'
                            placeholder='Username'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className='mb-6'>
                        <label className='block text-gray-300 text-sm font-bold mb-2' htmlFor='password'>
                            Password
                        </label>
                        <input
                            className='bg-gray-200 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            // id='password'
                            type='password'
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <Link to={'/signup'} className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
                        {"Don't"} have an account?
                    </Link>
                    <div>
                        <button className='bg-gray-200 border rounded w-full py-2 px-3 text-gray-700 font-bold mt-2 hover:bg-gray-300 transition-colors'
                        disabled={loading}
                        >
                           {loading ? <span className="Loading Loading-spinner"></span> : "Login"}
                        </button>
                    </div>
                </form>
           </div>
  )
}

export default Login