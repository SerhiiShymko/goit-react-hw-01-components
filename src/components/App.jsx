import { Profile } from 'components/Profile/Profile';
import user from '../datas/user.json';

export const App = () => {
  return (
    <div>
      <Profile events={user} />
    </div>
  );
};
