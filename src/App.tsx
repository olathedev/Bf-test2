import "./App.css";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import WebSocketComponent from "./WebSocket";

function App() {
  const messages = useSelector((state: RootState) => state.messages);

  return (
    <div className="app-container">
      <div>
        <h1 className="app-header">
          Blockfuse Test 2 Socket.IO Notification Frontend Example
        </h1>
        <WebSocketComponent />
      </div>
    </div>
  );
}

export default App;
