import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li className={css.title} key={id}>
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
  id: PropTypes.number.isRequired,
};
