import React from 'react';
import PropTypes from 'prop-types';

function FriendList( {friends} ) {
    return (
        <section className="friends">
        <ul className="friend-list">
{
friends.map(friend => (
    <li className="friend-item" key={friend.id}>
        {
            friend.isOnline 
            ? 
            <span className="status statusOn"></span> 
            : 
            <span className="status statusOff"></span>
        }
    <img className="avatar" src={friend.avatar} alt="" width="48" />
<p className="name">{friend.name}</p>
  </li>  
))
}
</ul>
</section>
    )
}


FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.object)
  }

export default FriendList