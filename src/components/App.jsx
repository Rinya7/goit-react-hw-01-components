import { Profile } from '../components/Profile/Profile';
import user from 'user.json';
//import css from './Profile/Profile.module.css';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        avatar={user.avatar}
        tags={user.tag}
        location={user.location}
        stats={user.stats}
      ></Profile>
    </div>
  );
};
