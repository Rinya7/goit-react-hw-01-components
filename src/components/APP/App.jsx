import user from '../../data/user.json';
import data from '../../data/data.json';
import friends from '../../data/friends.json';
import css from './App.module.css';
import { Profile } from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics';
import { FriendList } from '../FriendList/FriendList';

import PropTypes from 'prop-types';
//import css from './Profile/Profile.module.css';

export const App = () => {
  console.log(data);
  return (
    <div className={css.hometask}>
      <Profile
        username={user.username}
        avatar={user.avatar}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      ></Profile>
      <Statistics title="Upload stats" stats={data}></Statistics>
      <Statistics stats={data} />
      <FriendList friends={friends} />
    </div>
  );
};

App.propTypes = {
  Profile: PropTypes.shape({
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    title: PropTypes.string,
    stats: PropTypes.arrayOf(),
  }),
};
