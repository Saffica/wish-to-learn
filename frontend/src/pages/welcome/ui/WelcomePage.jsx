import React from 'react';
// import { ReactComponent as Desktop } from 'imgs/desktop.svg';
import classes from './WelcomePage.module.css';
import { AboutPlatform } from '../../../widgets';
import { getHeight } from '../lib/getHeight';

const WelcomePage = () => {
    console.log(getHeight())

    return (
        <div
            className={classes.welcomePage}
            style={{ height: { getHeight } }}>
            <div className={classes.wrapper}>
                <AboutPlatform />
            </div>


            {/* <section className={classes.registration}>
                <div className={classes.wrapper}>
                    <div className={classes.left}>
                        С помощью нашей платформы пользователи получают возможность создавать курсы, которые агрегируют
                        материалы из различных источников. Они могут отслеживать свой прогресс, устанавливать цели и
                        делиться курсами с другими пользователями.
                    </div>
                    <div className={classes.right}>
                        Если Вы заинтересованы в улучшении своих навыков или просто хотите научиться чему-то новому,
                        зачем ждать? Зарегистрируйтесь сегодня и начните свой путь обучения!
                        <Button title='Зарегистрироваться' />
                    </div>
                </div>
            </section>
            <section className='feedback'>
                <div className={classes.wrapper}>
                    <div className='feedback__left-column'></div>
                    <div className='feedback__right-column'>
                        Остались вопросы или есть предложения?
                        <Button title='Напиши нам' />
                    </div>
                </div>
            </section> */}
        </div>
    );
};

export default WelcomePage;
