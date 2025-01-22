import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="chat-container">
      <header className="chat-header">
        <h1 className="chat-title">ChatGPT</h1>
      </header>
      <div className="chat-messages">
        <div className="message bot-message">
          <p>Hello! How can I assist you today?</p>
        </div>
        <div className="message user-message">
          <p>What is the weather like today?</p>
        </div>
      </div>
      <div className="chat-input-container">
        <input type="text" className="chat-input" placeholder="Type a message..." />
        <button className="send-button">Send</button>
      </div>
    </div>
  );
}

export default App;
