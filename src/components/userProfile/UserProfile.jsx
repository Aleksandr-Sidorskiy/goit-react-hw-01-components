import PropTypes from 'prop-types';
import css from "./UserProfileStyle.module.css"
export const UserProfile = ({username, tag, location, avatar, stats: { followers, views, likes },}) => {
    return <div className = {css.profile}>
  <div className={css.description}>
    <img
      src={avatar}
      alt="User avatar"
      className ={css.avatar}
      width="120px"
    />
    <p className={css.name}>{username}</p>
    <p className={css.tag}>@{tag}</p>
    <p className={css.location}>{location}</p>
  </div>

  <ul className={css.stats}>
    <li className={css.item}>
        <span className="label">Followers</span>
        <span className="quantity">{followers}</span>
    </li>
    <li className={css.item}>
      <span className="label">Views</span>
        <span className="quantity">{views}</span>
    </li>
    <li className={css.item}>
      <span className="label">Likes</span>
      <span className="quantity">{likes}</span>
    </li>
  </ul>
</div>
}

UserProfile.propTypes = {
    avatar:PropTypes.string,
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    followers: PropTypes.number,
    views: PropTypes.number,
    likes:PropTypes.number
    

}