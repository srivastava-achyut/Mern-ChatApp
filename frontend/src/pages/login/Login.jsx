


// import React, { useState } from 'react'
// import { Link } from "react-router-dom";
// import useLogin from '../../hooks/useLogin';

// const Login = () => {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const { loading, login } = useLogin();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         await login(username, password);
//     };

//     return (
//         <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//             <div className='w-full p-8 rounded-lg shadow-2xl bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border border-slate-700'>
                
//                 <h1 className='text-3xl font-bold text-center text-gray-200 mb-6'>
//                     Login
//                     <span className='text-sky-500'> ChatApp</span>
//                 </h1>

//                 <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
//                     <div>
//                         <label className='label p-2'>
//                             <span className='text-base label-text text-gray-200 font-medium'>Username</span>
//                         </label>
//                         <input
//                             type='text'
//                             placeholder='Enter username'
//                             className='w-full input input-bordered h-10 bg-slate-900 text-white placeholder-gray-500 focus:border-sky-500 focus:outline-none'
//                             value={username}
//                             onChange={(e) => setUsername(e.target.value)}
//                         />
//                     </div>

//                     <div>
//                         <label className='label p-2'>
//                             <span className='text-base label-text text-gray-200 font-medium'>Password</span>
//                         </label>
//                         <input
//                             type='password'
//                             placeholder='Enter password'
//                             className='w-full input input-bordered h-10 bg-slate-900 text-white placeholder-gray-500 focus:border-sky-500 focus:outline-none'
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                         />
//                     </div>

//                     {/* IMPROVEMENT: Darker, more visible link */}
//                     <div className='text-center mt-2'>
//                         <Link to='/signup' className='text-sm text-black font-bold hover:underline hover:opacity-80 transition-all inline-block'>
//                             {"Don't"} have an account? Sign up
//                         </Link>
//                     </div>

//                     {/* IMPROVEMENT: Centered Button */}
//                     <div className='flex justify-center mt-2'>
//                         <button 
//                             className='btn btn-wide btn-sm bg-sky-500 hover:bg-sky-600 border-none text-white font-bold'
//                             disabled={loading}
//                         >
//                             {loading ? <span className='loading loading-spinner'></span> : "Login"}
//                         </button>
//                     </div>
//                 </form>
//             </div>


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
        <div className='flex flex-col items-center justify-center min-h-screen w-full px-3 sm:px-6'>
            <div className='w-full sm:max-w-md p-6 sm:p-8 rounded-lg shadow-2xl bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border border-slate-700'>
                
                <h1 className='text-2xl sm:text-3xl font-bold text-center text-gray-200 mb-6'>
                    Login
                    <span className='text-sky-500'> ChatApp</span>
                </h1>

                <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                    <div>
                        <label className='label p-2'>
                            <span className='text-xs sm:text-sm label-text text-gray-200 font-medium'>Username</span>
                        </label>
                        <input
                            type='text'
                            placeholder='Enter username'
                            className='w-full input input-bordered h-10 bg-slate-900 text-white placeholder-gray-500 focus:border-sky-500 focus:outline-none text-xs sm:text-sm'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className='label p-2'>
                            <span className='text-xs sm:text-sm label-text text-gray-200 font-medium'>Password</span>
                        </label>
                        <input
                            type='password'
                            placeholder='Enter password'
                            className='w-full input input-bordered h-10 bg-slate-900 text-white placeholder-gray-500 focus:border-sky-500 focus:outline-none text-xs sm:text-sm'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className='text-center mt-2'>
                        <Link to='/signup' className='text-xs sm:text-sm text-gray-300 hover:text-sky-400 hover:underline transition-all'>
                            {"Don't"} have an account? Sign up
                        </Link>
                    </div>

                    <button 
                        className='btn btn-sm sm:btn-md bg-sky-500 hover:bg-sky-600 border-none text-white font-bold w-full'
                        disabled={loading}
                    >
                        {loading ? <span className='loading loading-spinner loading-sm'></span> : "Login"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
        </div>
    );
};

export default Login;
