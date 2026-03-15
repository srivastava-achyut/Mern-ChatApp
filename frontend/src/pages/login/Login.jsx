import React from 'react'

const Login = () => {
  return (
    <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg
           bg-opacity-0'>
            <h1 className='text-3xl font-semibold text-center text-gray-300'>Login
                <span className='text-blue-500'>  ChatApp</span>
            </h1>
                <form>
                    <div className='mb-4'>
                        <label className='block text-gray-300 text-sm font-bold mb-2' htmlFor='username'>
                            Username
                        </label>
                        <input
                            className='bg-gray-200 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            id='username'
                            type='text'
                            placeholder='Username'
                        />
                    </div>
                    <div className='mb-6'>
                        <label className='block text-gray-300 text-sm font-bold mb-2' htmlFor='password'>
                            Password
                        </label>
                        <input
                            className='bg-gray-200 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            id='password'
                            type='password'
                            placeholder='Password'
                        />
                    </div>
                    <a href='#' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
                        {"Don't"} have an account?
                    </a>
                    <div>
                        <button className='bg-gray-200 border rounded w-full py-2 px-3 text-gray-700 font-bold mt-2 hover:bg-gray-300 transition-colors'>
                            Login
                        </button>
                    </div>
                </form>
           </div>
  )
}

export default Login