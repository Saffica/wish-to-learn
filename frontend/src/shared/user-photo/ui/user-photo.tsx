import classes from './user-photo.module.scss';
import deafultUserPhoto from '../lib/imgs/profile.png';

export const UserPhoto: React.FunctionComponent<IUserPhotoProps> = ({ src }) => {
    return (
        <img src={src || deafultUserPhoto} alt="user" className={classes.userPhoto} />
    )
}