import css from './FriendList.module.scss';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li className={css.item} key={id}>
            <span
              className={`${css.status} ${isOnline ? css.isOnline : ''}`}
            ></span>
            <img className={css.avatar} src={avatar} alt={name} width="48" />
            <p className={css.name}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
};
