import PropTypes from 'prop-types';
import css from './friendstyle.module.css';
import { FriendListItem } from './FriendListItem';


export const FriendList = ({friends}) => {
    return (
        <div className={css.friendlistitem}>
            <ul className={css.list}>
                  
                {friends.map(({ id, avatar, name, isOnline }) => (
                      <FriendListItem
                        key={id}
                        isOnline={isOnline}
                        avatar={avatar}
                        name={name}
                    />
                )

                  
                )}
                  
            </ul>
        </div>
    );
}

FriendList.propType = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            isOnline: PropTypes.bool,
            avatar: PropTypes.string,
            name: PropTypes.string,
        })
    ).isRequired,
};