// src/WebSocket.tsx
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addMessage } from './messageSlice';

const WebSocketComponent: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // WebSocket connection
    const socket = new WebSocket('ws://localhost:4000'); // Replace with your WebSocket server URL

    // Open the WebSocket connection
    socket.onopen = () => {
      console.log('Connected to WebSocket');
    };

    // Listen for messages from the WebSocket server
    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      dispatch(addMessage({ id: Date.now(), content: data.message }));
    };

    // Handle errors
    socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    // Handle WebSocket connection close
    socket.onclose = (event) => {
      if (event.wasClean) {
        console.log('Closed cleanly');
      } else {
        console.error('Connection died');
      }
    };

    // Cleanup the connection when the component is unmounted
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
