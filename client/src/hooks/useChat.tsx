import { useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';

const useChat = () => {
  const [messages, setMessages] = useState<any>([]);
  const socketRef = useRef<any>();
  useEffect(() => {
    const connectionOptions = {
      timeout: 10000,
    };

    socketRef.current = io('http://localhost:3090/chat', connectionOptions);
    // eslint-disable-next-line no-shadow
    // socketRef.current.on('receive', ({ messages }) => {
    //   const formatMessages = messages.map((message) => ({
    //     id: message.id,
    //     userId: message.userId,
    //     message: message.message,
    //     timestamp: message.createdAt,
    //     username: `${message.user.firstName}`,
    //   }));
    //   setMessages([...formatMessages]);
    // });
    socketRef.current.on('connect', () => {
      console.log('I have been connected');
      socketRef.current.emit('send_message', 'hello');
    });

    socketRef.current.on('receive_message', (message:any) => {
      console.log('=====>', message);
      setMessages((prevMessages: any) => [...prevMessages, message]);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  const sendMessage = (data: any) => {
    socketRef.current.emit('new_message', data);
  };

  return { messages, sendMessage };
};

export default useChat;
