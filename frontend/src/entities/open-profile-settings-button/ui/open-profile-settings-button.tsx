import classes from './open-profile-settings-button.module.scss';
import { UserPhoto } from '../../../shared';

export const OpenProfileButton: React.FunctionComponent<IUserPhotoProps> = () => {
    return (
        <button className={classes.openProfileButton}>
            <UserPhoto />
        </button>
    )
}