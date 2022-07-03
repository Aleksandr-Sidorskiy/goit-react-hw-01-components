import { UserProfile } from "./userProfile/UserProfile";
import user from "../data/user";
// ====================================================
import data from '../data/data';
import { Statistics } from "./Statistics/Statistics";
// ====================================================
import friends from "../data/friends";
import { FriendList } from "./FriendListItem/FrendList";
// ====================================================
import transactions from "../data/transactions";
import { Transaction } from "./TransactionHistory/Transition";
// ====================================================

export const App = () => {
  return (
    <div className="container">
      <div className="section">
        
          <UserProfile 
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
          />
      </div>

      <div className="section">
        <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />
      </div>

      <div className="section">
        <FriendList friends={friends }/>
      </div>

      <div className="section">
        <Transaction item={transactions} />
      </div>
      
    </div>
  
  )
  
};
