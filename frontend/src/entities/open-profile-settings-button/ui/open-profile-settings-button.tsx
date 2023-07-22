import { UserPhoto } from '../../../shared';
import styles from './open-profile-settings-button.module.scss';

export const OpenProfileButton: React.FunctionComponent<IUserPhotoProps> = () => {
    return (
        <button className={styles.openProfileButton}>
            <UserPhoto />
        </button>
    )
}