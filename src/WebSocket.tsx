// src/WebSocket.tsx
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addMessage } from './messageSlice';

const WebSocketComponent: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:4000');


    socket.onopen = () => {
      console.log('Connected to WebSocket');
    };

   
    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      dispatch(addMessage({ id: Date.now(), content: data.message }));
    };

    
    socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

   
    socket.onclose = (event) => {
      if (event.wasClean) {
        console.log('Closed cleanly');
      } else {
        console.error('Connection died');
      }
    };

   
    return () => {
      socket.close();
    };
  }, [dispatch]);

  return (
    <div>
      <h2>WebSocket Component</h2>
      <p>Listening for messages...</p>
    </div>
  );
};

export default WebSocketComponent;
