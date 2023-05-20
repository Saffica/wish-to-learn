import { Button } from '../../../shared';
import classes from './feedback.module.css';

export const Feedback = (): JSX.Element => {
    return (
        <div className={classes.feedback}>
            <div className={classes.item}></div>
            <div className={classes.item}>
                <p>Остались вопросы или есть предложения?</p>
                <Button title='Напиши нам' />
            </div>
        </div>
    );
}