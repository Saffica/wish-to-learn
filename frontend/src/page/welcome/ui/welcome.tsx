import { General } from '../../../widgets';
import { About } from '../../../widgets';
import classes from './welcome.module.scss';

const WelcomePage = () => {
    return (
        <div className={classes.welcome}>
            <section className={classes.general}>
                <General className={classes.general} />
            </section>
            <section className={classes.about}>
                <About />
            </section>
        </div>
    );
};

export default WelcomePage;
