// import React from 'react'
// import { Link } from "react-router-dom";
// import { useState } from 'react';
// import useLogin from '../../hooks/useLogin';

// const Login = () => {

//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");

//     const {loading,login} = useLogin();
    
//     const handleSubmit = async (e) =>{
//         e.preventDefault();
//         await login(username,password)
//     }
 
//   return (
//     <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg
//            bg-opacity-0'>
//             <h1 className='text-3xl font-semibold text-center text-gray-300'>Login
//                 <span className='text-blue-500'>  ChatApp</span>
//             </h1>
//                 <form onSubmit={handleSubmit}>
//                     <div className='mb-4'>
//                         <label className='block text-gray-300 text-sm font-bold mb-2' htmlFor='username'>
//                             Username
//                         </label>
//                         <input
//                             className='bg-gray-200 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                           
//                             type='text'
//                             placeholder='Username'
//                             value={username}
//                             onChange={(e) => setUsername(e.target.value)}
//                         />
//                     </div>
//                     <div className='mb-6'>
//                         <label className='block text-gray-300 text-sm font-bold mb-2' htmlFor='password'>
//                             Password
//                         </label>
//                         <input
//                             className='bg-gray-200 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
//                             // id='password'
//                             type='password'
//                             placeholder='Password'
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                         />
//                     </div>
//                     <Link to={'/signup'} className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
//                         {"Don't"} have an account?
//                     </Link>
//                     <div>
//                         <button className='bg-gray-200 border rounded w-full py-2 px-3 text-gray-700 font-bold mt-2 hover:bg-gray-300 transition-colors'
//                         disabled={loading}
//                         >
//                            {loading ? <span className="Loading Loading-spinner"></span> : "Login"}
//                         </button>
//                     </div>
//                 </form>
//            </div>
//   )
// }

// export default Login



import React, { useState } from 'react'
import { Link } from "react-router-dom";
import useLogin from '../../hooks/useLogin';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { loading, login } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(username, password);
    };

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-8 rounded-lg shadow-2xl bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border border-slate-700'>
                
                <h1 className='text-3xl font-bold text-center text-gray-200 mb-6'>
                    Login
                    <span className='text-sky-500'> ChatApp</span>
                </h1>

                <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text text-gray-200 font-medium'>Username</span>
                        </label>
                        <input
                            type='text'
                            placeholder='Enter username'
                            className='w-full input input-bordered h-10 bg-slate-900 text-white placeholder-gray-500 focus:border-sky-500 focus:outline-none'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text text-gray-200 font-medium'>Password</span>
                        </label>
                        <input
                            type='password'
                            placeholder='Enter password'
                            className='w-full input input-bordered h-10 bg-slate-900 text-white placeholder-gray-500 focus:border-sky-500 focus:outline-none'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    {/* IMPROVEMENT: Darker, more visible link */}
                    <div className='text-center mt-2'>
                        <Link to='/signup' className='text-sm text-black font-bold hover:underline hover:opacity-80 transition-all inline-block'>
                            {"Don't"} have an account? Sign up
                        </Link>
                    </div>

                    {/* IMPROVEMENT: Centered Button */}
                    <div className='flex justify-center mt-2'>
                        <button 
                            className='btn btn-wide btn-sm bg-sky-500 hover:bg-sky-600 border-none text-white font-bold'
                            disabled={loading}
                        >
                            {loading ? <span className='loading loading-spinner'></span> : "Login"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;