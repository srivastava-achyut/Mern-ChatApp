



// import { Route, Routes, Navigate } from "react-router-dom";
// import "./App.css";
// import Login from "./pages/login/Login";
// import SignUp from "./pages/signup/SignUp";
// import Home from "./pages/home/Home";
// import { Toaster } from "react-hot-toast";
// import { useAuthContext } from "./context/AuthContext";

// function App() {
//   const { authUser } = useAuthContext();

//   return (
//     /* h-screen and overflow-hidden prevent the whole page from shifting */
//     <div className="h-screen overflow-hidden flex items-center justify-center bg-linear-to-r from-blue-500 to-purple-600">
//       <Routes>
//         <Route path='/' element={authUser ? <Home /> : <Navigate to="/login" />} />
//         <Route path='/login' element={authUser ? <Navigate to="/" /> : <Login />} />
//         <Route path='/signup' element={authUser ? <Navigate to="/" /> : <SignUp />} />
//       </Routes>
//       <Toaster />
//     </div>
//   );
// }

// export default App;


//Updated code for responsiveness

import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import Home from "./pages/home/Home";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";

function App() {
  const { authUser } = useAuthContext();

  return (
    <div className="h-screen overflow-hidden flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 p-2 sm:p-4">
      <div className="w-full h-full">
        <Routes>
          <Route path='/' element={authUser ? <Home /> : <Navigate to="/login" />} />
          <Route path='/login' element={authUser ? <Navigate to="/" /> : <Login />} />
          <Route path='/signup' element={authUser ? <Navigate to="/" /> : <SignUp />} />
        </Routes>
      </div>
      <Toaster position="top-center" />
    </div>
  );
}

export default App;
