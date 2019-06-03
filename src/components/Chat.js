import React from 'react';

const Chat = ({ saveMsg }) => (
  <form onSubmit={(e) => {
    e.preventDefault();
    saveMsg(e.target.elements.userInput.value);
    e.target.reset();
  }}>
    <div>
      <div>
        <input name="userInput" type="text" placeholder="Type your message" />
      </div>
      <div>
        <button>
          Send
        </button>
      </div>
    </div>
  </form>
);

export default Chat;
