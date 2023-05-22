import { AboutPlatform } from '../../../widgets';
import { Registration } from '../../../widgets';
import { Feedback } from '../../../widgets';
import classes from './welcome.module.css';


const WelcomePage = () => {
    return (
        <div className={classes.welcome}>
            <AboutPlatform className={classes.about} />
            <Registration className={classes.registration}/>
            <Feedback className={classes.feedback}/>
        </div>
    );
};

export default WelcomePage;
