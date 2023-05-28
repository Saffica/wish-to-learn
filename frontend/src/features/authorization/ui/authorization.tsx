import { SignIn } from '../../../entities';
import { SignOut } from '../../../entities';
import classes from './authorization.module.scss';

export const Authorization: React.FunctionComponent = () => {
    const isAuthorization = false;
    return (
        <div className={classes.authorization}>
            {isAuthorization ? <SignOut /> : <SignIn />}
        </div>
    )
}