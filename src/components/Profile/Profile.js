import css from './Profile.module.css';
import PropTypes from 'prop-types';
export const Profile = ({
  username,
  avatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzoV94y1RNYHkFMgVcNA7C2rS3YCQhKIMDh5k2rQuW-w&s',
  tags,
  location,
  stats,
}) => (
  <>
    <div className={css.profile} key={username}>
      <div className={css.description}>
        <img src={avatar} alt="User avatar" className="avatar" />
        <p className={css.name}>{username}</p>
        <p className="tag">{tags}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  </>
);

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number.isRequired),
};
