import React from 'react';

import Messages from './components/Messages';
import Chat from './components/Chat';
import User from './components/User';

export default class App extends React.PureComponent {
  static users = ["John Doe", "Brendan Eich"]

  constructor(props) {
    super(props);

    this.state = {
      chat: ['hello', 'hi!', 'do you want to chat?'],
      user: App.users[0]
    }
    this.messageContainerRef = React.createRef();
  }


  saveMsg = (msg) => {
    const element = this.messageContainerRef.current;
    element.scrollTop = element.scrollHeight;

    this.setState({
      chat: [
        ...this.state.chat,
        msg
      ]
    })
  }

  handleUserSelect = (user) => this.setState({ user, chat: [] })

  render() {
    return (
      <section>

        <div className="columns">
          <div className="column is-one-fifth">
            <nav>
              {App.users.map(user => <User
                name={user}
                key={user}
                active={user === this.state.user}
                onSelect={() => this.handleUserSelect(user)}
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
                      {this.state.user}
                    </p>
                  </div>
                </div>
              </header>
            </div>

            <div className="hero-body messages-container" ref={this.messageContainerRef}>
              <Messages chat={this.state.chat} />
            </div>

            <div className="hero-foot">
              <footer className="section is-small">
                <Chat saveMsg={this.saveMsg} />
              </footer>
            </div>
          </div>
        </div>

      </section>
    )
  }
}
