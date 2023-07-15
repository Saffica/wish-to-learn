import { General } from '../../../widgets';
import { About } from '../../../widgets';
import styles from './welcome.module.scss';

const WelcomePage = () => {
    return (
        <div className={styles.welcome}>
            <section className={styles.general}>
                <General className={styles.general} />
            </section>
            <section className={styles.about}>
                <About />
            </section>
        </div>
    );
};

export default WelcomePage;
