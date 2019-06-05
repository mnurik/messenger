import React from 'react';

const User = ({ name, onSelect, active }) => (
  <div className={`card-content cursor-pointer ${active ? 'active' : ''}`} onClick={onSelect}>
    <div className="media">
      <div className="media-left">
        <figure className="image is-48x48">
          <img src="https://bulma.io/images/placeholders/96x96.png" alt="user" />
        </figure>
      </div>
      <div className="media-content">
        <p className="title is-4">{name}</p>
      </div>
    </div>
  </div>
);

export default User;
