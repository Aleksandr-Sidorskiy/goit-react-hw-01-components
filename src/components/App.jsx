import { UserProfile } from "./userProfile/UserProfile";
import user from "../data/user";
import data from '../data/data';
import { Statistics } from "./Statistics/Statistics";
import friends from "../data/friends";
import { Friends } from "./FriendListItem/FriendListItem";
import transactions from "../data/transactions";
import { Transaction } from "./TransactionHistory/Transaction";
export const App = () => {
  return (
    <div>
      <div>
        
          <UserProfile 
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
          />
      </div>

      <div>
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      </div>
      <div>
        <Friends friends={friends} />;
      </div>
      <div>
        <Transaction/>
      </div>
      
    </div>
  
  )
  
};
