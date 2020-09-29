import React from 'react';
import ReactDOM from 'react-dom';

import Profile from './components/Profile.js';
import Statistics from "./components/Statistic.js";
import FriendList from './components/FriendList.js'
import TransactionsHistory from "./components/TransactionHistory.js"

import user from './jsons/user.json';
import statdata from "./jsons/statistic-data.json";
import friendlist from "./jsons/friend-list.json";
import transactions from "./jsons/transaction.json"

import "./css/Profile.css"
import "./css/Statistic.css"
import "./css/friendlist.css"
import "./css/transaction.css"

function App(){
    return (
      <>
      <Profile
  name={user.name}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
<>
 <Statistics title="Upload stats" stats={statdata} />
</>
<>
<FriendList friends={friendlist} />
</>
<>
<TransactionsHistory items={transactions} />
</>
</>
)
}

ReactDOM.render(<App />, document.getElementById('root'),);

