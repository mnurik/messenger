import React from 'react';

const Chat = ({ saveMsg }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    saveMsg(e.target.elements.userInput.value);
    e.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="field has-addons">
        <div className="control is-expanded">
          <input className="input" name="userInput" type="text" placeholder="Type your message" />
        </div>
        <div className="control">
          <button className="button is-info">
            Send
        </button>
        </div>
      </div>
    </form>
  )
};

export default Chat;
