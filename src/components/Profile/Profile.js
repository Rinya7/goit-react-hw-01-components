import css from './Profile.module.css';
export const Profile = ({ username, avatar, tags, location, stats }) => (
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
