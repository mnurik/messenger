import React, { useState } from 'react';

import Messages from './components/Messages';
import Chat from './components/Chat';
import User from './components/User';
import { INITAL_MESSAGES, INITAL_USERS } from './constant';

const App = () => {

  const messageContainerRef = React.createRef();

  const [activeUser, setActiveUser] = useState(0);

  const [users, setUsers] = useState(INITAL_USERS.map(name => ({ name, chat: INITAL_MESSAGES })));

  const saveMsg = (msg) => {
    const element = messageContainerRef.current;
    element.scrollTop = element.scrollHeight;

    setUsers((prevUsers) => prevUsers.map((user, index) => {
      if (index === activeUser) return { user, chat: [...user.chat, { isMe: true, text: msg }] };
      return user;
    }));
  }

  const selectedUser = users[activeUser];

  return (
    <section>

      <div className="columns">
        <div className="column is-one-fifth">
          <nav>
            {INITAL_USERS.map((user, index) => <User
              name={user}
              key={user}
              active={activeUser === index}
              onSelect={() => setActiveUser(index)}
            />)}
          </nav>
        </div>
        <div className="column">
          <div className="hero-head">
            <header className="hero is-link is-bold">
              <div className="hero-body">
                <div className="container">
                  <p className="title">Chat Messenger</p>
                  <p className="subtitle">
                    {selectedUser.name}
                  </p>
                </div>
              </div>
            </header>
          </div>

          <div className="hero-body messages-container" ref={messageContainerRef}>
            <Messages user={selectedUser} />
          </div>

          <div className="hero-foot">
            <footer className="section is-small">
              <Chat saveMsg={saveMsg} />
            </footer>
          </div>
        </div>
      </div>

    </section>
  );
};

export default App;
