import { createContext, useEffect, useState, useContext } from "react";
import { useAuthContext } from "./AuthContect";
import io from "socket.io-client";

const SocketContext = createContext();
export const useSockContext = () => useContext(SocketContext);

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUser, setOnlineUser] = useState([]);
  const { authUser } = useAuthContext();

  useEffect(() => {
    if (authUser) {
      const newSocket = io("http://localhost:5000", {
        query: { userId: authUser._id },
      });

      setSocket(newSocket);

      newSocket.on("onlineUsers", (users) => setOnlineUser(users));

      return () => {
        newSocket.close(); // ✅ cleanup correct socket
      };
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser]);

  return (
    <SocketContext.Provider value={{ socket, onlineUser }}>
      {children}
    </SocketContext.Provider>
  );
};
