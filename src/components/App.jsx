import { Profile } from '../components/Profile/Profile';
import { Statistics } from '../components/Statistics/Statistics';
import user from '../data/user.json';
import data from '../data/data.json';
import PropTypes from 'prop-types';
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
      <Statistics title={data} stats={data}></Statistics>
    </div>
  );
};

App.propTypes = {
  Profile: PropTypes.shape({
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number.isRequired),
  }),
};
