import Profile from "./Profile/Profile"
import Statistics from "./Statistics/Statistics"
import FriendList from "./FriendList/FriendList"

import user from 'components/Profile/user.json'
import stats from 'components/Statistics/data.json'
import friends from 'components/FriendList/friends.json'


export const App = () => {
  return (
  <div>
  <Profile
  username={user.username}
  tag={user.tag} location={user.location}
  avatar={user.avatar} stats={user.stats} />
  <Statistics title="Upload stats" stats={stats} />
  <FriendList friends={friends} />;
  </div>
  )
};


