import React, { useContext, useEffect, useState } from 'react';
import io, { Socket } from 'socket.io-client';

interface SocketContextInterface {
  name: string;
  author: string;
  url: string;
}

const SocketContext = React.createContext<Socket<any, any> | null>(null);

export function useSocket() {
  return useContext(SocketContext);
}

export function SocketProvider({ id, children }: any) {
  const [socket, setSocket] = useState<Socket<any, any> | null>(null);

  useEffect((): any => {
    const newSocket = io(
      'http://localhost:5000',
      { query: { id } },
    );
    setSocket(newSocket);

    return () => newSocket.close();
  }, [id]);

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
}
