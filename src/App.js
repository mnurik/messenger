import React from 'react';
import Messages from './components/Messages';
import Chat from './components/Chat';

export default class App extends React.PureComponent {

  state = {
    chat: ['hello', 'hi!', 'do you want to chat?']
  }

  saveMsg = (msg) => this.setState({
    chat: [
      ...this.state.chat,
      msg
    ]
  })

  render() {
    return (
      <section>

        <div>
          <Messages chat={this.state.chat} />
        </div>

        <div>
          <footer>
            <Chat saveMsg={this.saveMsg} />
          </footer>
        </div>
      </section>
    )
  }
}
