import css from './FriendList.module.css';

import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friend_list}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        ></FriendListItem>
      ))}
    </ul>
  );
};

FriendList.protoType = {
  friends: PropTypes.arrayOf().isRequired,
};
