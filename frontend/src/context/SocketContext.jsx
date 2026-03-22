
import {createContext,useEffect,useState,useContext} from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";
const SocketContext = createContext();

export const useSocketContext = () =>{
    return useContext(SocketContext);
}
export const SocketContextProvider = ({children}) => {

    const [socket, setSocket] = useState(null);
    const [onlineUsers,setOnlineUsers] = useState([]);
    const {authUser} = useAuthContext();


    useEffect(()=>{
       if(authUser){
           const socketInstance = io("https://chatapp-hih9.onrender.com",{
             query:{
                userID:authUser._id,
             }
           }); 

           setSocket(socketInstance);
      socketInstance.on('online-users',(users)=>{
                setOnlineUsers(users);
      })
            return ()=>{
                socketInstance.close();
                setSocket(null)
            }
       }     
       else{
              if(socket){
                socket.close();
                setSocket(null);
              }
       }
    },[authUser])
    return (
        <SocketContext.Provider value={{socket,onlineUsers}}>
            {children}
        </SocketContext.Provider>
    )
}
