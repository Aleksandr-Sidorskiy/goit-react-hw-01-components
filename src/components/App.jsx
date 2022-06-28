import { UserProfile } from "./userProfile/UserProfile";
import user from "../data/user";
import data from '../data/data';
import { Statistics } from "./Statistics/Statistics";

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
      <Statistics title="Upload stats" stats={data} />
        
      <Statistics stats={data} />
    </div>
  
  )
  
};
