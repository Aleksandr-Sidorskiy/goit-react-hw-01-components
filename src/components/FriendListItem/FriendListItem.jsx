import PropTypes from 'prop-types';
import css from './friendstyle.module.css';

export const Friends = ({friends}) => {
    return (
    <div className={css.friendlistitem}>
            <ul className={css.list}>
                {friends.map(({ id, avatar, name, isOnline, disabled }) => {
                const Status = isOnline ? css.disabled : css.active
                    return (
                        <li className={css.item}
                        key={id}
                        > 

                            <span className={Status} disabled={disabled}>{ isOnline} 0</span>
                        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
                        <p className={css.name}>{ name}</p>

                    </li>)
                })}
            
        </ul>
    </div>
       
    )
}

Friends.propType = {
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    avatar:PropTypes.img, 
}