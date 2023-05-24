import { Button } from '../../../shared';
import classes from './feedback.module.css';
import firstPath from '../lib/imgs/1.png';
import secondPath from '../lib/imgs/2.png';
import thirdPath from '../lib/imgs/3.png';
import fourthPath from '../lib/imgs/4.png';
import fifthPath from '../lib/imgs/5.png';
import sixthPath from '../lib/imgs/6.png';
import seventhPath from '../lib/imgs/7.png';
import eighthPath from '../lib/imgs/8.png';
import ninthPath from '../lib/imgs/9.png';
import tenthPath from '../lib/imgs/10.png';
import eleventh from '../lib/imgs/11.png';

export const Feedback = (props: FeedbackProps): JSX.Element => {
    return (
        <div className={`${classes.feedback} ${props.className}`}>
            <div className={classes.left}>
                <img src={firstPath} alt='profile-icons-1' />
                <img src={secondPath} alt='profile-icons-2' />
                <img src={thirdPath} alt='profile-icons-3' />
                <img src={fourthPath} alt='profile-icons-4' />
                <img src={fifthPath} alt='profile-icons-5' />
                <img src={sixthPath} alt='profile-icons-6' />
                <img src={seventhPath} alt='profile-icons-7' />
                <img src={eighthPath} alt='profile-icons-8' />
                <img src={ninthPath} alt='profile-icons-9' />
                <img src={tenthPath} alt='profile-icons-10' />
                <img src={eleventh} alt='profile-icons-11' />
            </div>
            <div className={classes.right}>
                <p>Остались вопросы или есть предложения?</p>
                <Button title='Напиши нам' />
            </div>
        </div>
    );
}