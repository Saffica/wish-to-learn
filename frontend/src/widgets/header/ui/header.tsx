import { useVersion } from '../lib/use-version';
import { Logo, Navigation, User } from '../../../features';
import classes from './header.module.css';

export const Header = () => {
    const version = useVersion();

    return (
        <div className={classes.header}>
            <div className={classes.wrapper}>
                <Logo />
                {version || <Navigation />}
                {version || <User />}
            </div>
        </div>
    );
};
