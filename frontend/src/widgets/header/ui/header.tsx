import { useVersion } from '../lib/use-version';
import { Navigation, Authorization } from '../../../features';
import { Logo } from '../../../shared';
import classes from './header.module.scss';

export const Header = () => {
    const version = useVersion();

    return (
        <div className={classes.header}>
            <div className={classes.wrapper}>
                <Logo />
                {version || <Navigation />}
                <Authorization />
            </div>
        </div>
    );
};
