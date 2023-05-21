import { Button } from '../../../shared';
import { getSvgs } from '../lib/getSvgs';
import classes from './feedback.module.css';

export const Feedback = (): JSX.Element => {
    return (
        <div className={classes.feedback}>
            <div className={classes.item}>
                {getSvgs().map(svg => svg)}
            </div>
            <div className={classes.item}>
                <p>Остались вопросы или есть предложения?</p>
                <Button title='Напиши нам' />
            </div>
        </div>
    );
}