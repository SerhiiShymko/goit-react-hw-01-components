import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
// import { FriendList } from 'components/FriendList/FriendList';
import user from '../data/user.json';
import data from '../data/data.json';
// import friends from '../data/friends.json';

export const App = () => {
  return (
    <div>
      <section>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </section>
      <section>
        <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />
      </section>
      <section>{/* <FriendList friends={friends} />; */}</section>
    </div>
  );
};
