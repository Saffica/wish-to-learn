import { Button } from '../../../shared';
import classes from './registration.module.css';

export const Registration = () => {
    return (
        <div className={classes.registration}>
            <div className={classes.container}>
                <div className={classes.left}>
                    <p>
                        С помощью нашей платформы пользователи получают возможность создавать курсы, которые агрегируют
                        материалы из различных источников. Они могут отслеживать свой прогресс, устанавливать цели и
                        делиться курсами с другими пользователями.
                    </p>
                </div>
                <div className={classes.right}>
                    <p>
                        Если Вы заинтересованы в улучшении своих навыков или просто хотите научиться чему-то новому,
                        зачем ждать? Зарегистрируйтесь сегодня и начните свой путь обучения!
                    </p>
                    <Button title='Зарегистрироваться' height='64px'  width='353px'/>
                </div>
            </div>
        </div>
    )
}