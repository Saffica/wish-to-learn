import { Button } from '../../../shared';
import classes from './registration.module.css';

export const Registration = (props: RegistrationProps) => {
    return (
        <div className={`${classes.registration} ${props.className}`}>
            <div className={classes.container}>
                <div className={classes.left}>
                    С помощью нашей платформы пользователи получают возможность создавать курсы, которые агрегируют
                    материалы из различных источников. Они могут отслеживать свой прогресс, устанавливать цели и
                    делиться курсами с другими пользователями.
                </div>
                <div className={classes.right}>
                    Если Вы заинтересованы в улучшении своих навыков или просто хотите научиться чему-то новому,
                    зачем ждать? Зарегистрируйтесь сегодня и начните свой путь обучения!
                    <Button title='Зарегистрироваться' height='64px' width='353px' />
                </div>
            </div>
        </div>
    )
}