import { Profile } from 'components/Profile/Profile';
import user from '../datas/user.json';

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
    </div>
  );
};
