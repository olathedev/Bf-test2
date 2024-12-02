import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import WebSocketComponent from "./WebSocket";

function App() {
  const messages = useSelector((state: RootState) => state.messages);

  return (
    <div>
      <WebSocketComponent />
      <div>
        <h2>Messages:</h2>
        <ul>
          {messages.map((msg) => (
            <li key={msg.id}>{msg.content}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
