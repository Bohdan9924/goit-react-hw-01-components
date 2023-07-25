import Profile from "./Profile/Profile"
import Statistics from "./Statistics/Statistics"

import user from 'components/Profile/user.json'
import stats from 'components/Statistics/data.json'



export const App = () => {
  return (
  <div>
  <Profile
  username={user.username}
  tag={user.tag} location={user.location}
  avatar={user.avatar} stats={user.stats} />
  <Statistics title="Upload stats" stats={stats}/>
  </div>
  )
};


// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
