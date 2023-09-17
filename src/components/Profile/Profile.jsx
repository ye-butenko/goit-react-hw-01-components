import css from './Profile.module.scss';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  const { followers, views, likes } = stats;

  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt={username} className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span className={css.label}>Followers</span>
          <b className={css.quantity}>{followers}</b>
        </li>
        <li>
          <span className={css.label}>Views</span>
          <b className={css.quantity}>{views}</b>
        </li>
        <li>
          <span className={css.label}>Likes</span>
          <b className={css.quantity}>{likes}</b>
        </li>
      </ul>
    </div>
  );
};
