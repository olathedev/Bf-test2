import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const WebSocketComponent: React.FC = () => {
  const [message, setMessage] = useState<string | null>(null);
  const [messageType, setMessageType] = useState<string>('info');
  const [socket, setSocket] = useState<any>(null);

  useEffect(() => {
    const socketInstance = io('https://your-websocket-server-url'); 
    setSocket(socketInstance);

    socketInstance.on('event1', (msg: { type: string; text: string }) => {
      console.log('Event 1 message received:', msg);
      setMessage(msg.text);
      setMessageType(msg.type);
    });

    socketInstance.on('event2', (msg: { type: string; text: string }) => {
      console.log('Event 2 message received:', msg);
      setMessage(msg.text);
      setMessageType(msg.type);
    });

    socketInstance.on('event3', (msg: { type: string; text: string }) => {
      console.log('Event 3 message received:', msg);
      setMessage(msg.text);
      setMessageType(msg.type);
    });

    socketInstance.on('event4', (msg: { type: string; text: string }) => {
      console.log('Event 4 message received:', msg);
      setMessage(msg.text);
      setMessageType(msg.type);
    });

    socketInstance.on('event5', (msg: { type: string; text: string }) => {
      console.log('Event 5 message received:', msg);
      setMessage(msg.text);
      setMessageType(msg.type); 
    });

    return () => {
      if (socketInstance) {
        socketInstance.disconnect();
      }
    };
  }, []);

  return (
    <div>
      {message ? (
        <div className={`notification notification-${messageType}`}>
          <p>{message}</p>
        </div>
      ) : (
        <div className="waiting-message">
          Waiting for messages...
        </div>
      )}
    </div>
  );
};

export default WebSocketComponent;