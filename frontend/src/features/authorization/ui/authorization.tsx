import { SignIn } from '../../../entities';
import { SignOut } from '../../../entities';
import styles from './authorization.module.scss';

export const Authorization: React.FunctionComponent = () => {
    const isAuthorization = false;
    return (
        <div className={styles.authorization}>
            {isAuthorization ? <SignOut /> : <SignIn />}
        </div>
    )
}