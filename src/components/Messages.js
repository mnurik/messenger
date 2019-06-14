import React from 'react';
import { INITAL_MESSAGES } from '../constant';

const Messages = ({ user }) => (
  <div style={{ heigth: '100%', width: '100%' }}>
    {user.chat.map((m, i) => {
      // const msgClass = i > INITAL_MESSAGES.length && (i === 0 || i % 2 === 0) // for demo purposes
      return (
        <p key={i} style={{ padding: '.25em', textAlign: m.isMe ? 'right' : 'left', overflowWrap: 'normal' }}>
          <span className={`tag is-medium ${m.isMe ? 'is-success' : 'is-info'}`}>{m.text}</span>{m.date && m.date.format()}
        </p>
      )
    }
    )}
  </div>
);

export default Messages;
