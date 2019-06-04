import React from 'react';

const Messages = ({ chat }) => (
  <div style={{ heigth: '100%', width: '100%' }}>
    {chat.map((m, i) => {
      const msgClass = i === 0 || i % 2 === 0 // for demo purposes
      return (
        <p key={i} style={{ padding: '.25em', textAlign: msgClass ? 'left' : 'right', overflowWrap: 'normal' }}>
          <span className={`tag is-medium ${msgClass ? 'is-success' : 'is-info'}`}>{m}</span>
        </p>
      )
    }
    )}
  </div>
);

export default Messages;
