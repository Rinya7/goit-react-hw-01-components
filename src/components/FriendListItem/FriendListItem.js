import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.title}>
      <span className={isOnline ? css.item_online : css.item_ofline}>
        {isOnline ? 'onLine' : 'ofLine'}
      </span>
      <img
        //className={isOnline ? css.item_online : css.item_ofline}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className="name">{name}</p>
    </li>
  );
};

FriendListItem.protoType = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
