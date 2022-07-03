import PropTypes from 'prop-types';
import css from './friendstyle.module.css';


export const FriendListItem= ({isOnline, avatar, name}) => {
        return (
        <li className={css.item}
             
            > 
            <span className = {isOnline ? css.active : css.disabled} >{ isOnline }</span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{ name}</p>

        </li >
    )

    
}

FriendListItem.propType = {
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
};