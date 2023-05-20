import { AboutPlatform } from '../../../widgets';
import { Registration } from '../../../widgets';
import { Feedback } from '../../../widgets';
import classes from './welcome.module.css';


const WelcomePage = () => {
    return (
        <div className={classes.welcome}>
            <div className={classes.container}>
                <AboutPlatform />
            </div>
            <Registration />
            <Feedback />
        </div>
    );
};

export default WelcomePage;
