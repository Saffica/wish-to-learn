import React from 'react';
// import { ReactComponent as Desktop } from 'imgs/desktop.svg';
import classes from './WelcomePage.module.css';
import { Button } from '../../../shared'

const WelcomePage = () => {

    const welcomePageHeight = () => {
        const headerHeight = 92;

        return window.innerHeight - headerHeight;
    };

    return (
        <div
            className={classes.welcome}
            style={{ height: { welcomePageHeight } }}>
            <section className={classes.general}>
                <div className={classes.wrapper}>
                    <div className={classes.top}>
                        <p className={classes.description}>ПЛАТФОРМА ДЛЯ самообразования</p>
                        <p className={classes.title}>хочу учу</p>
                        <p className={classes.subtitle}>возьми свое обучение под контроль</p>
                        <Button title='К списку планов' width='100%' backgroundColor='#42597B' height='64px' color='#fff' />
                    </div>
                    <div className={classes.items}>
                        <div className={classes.item}>
                            {/* {<Desktop />} */}
                            <div className={classes.title}>Составляй план обучения</div>
                            <div className={classes.line}></div>
                            <div className={classes.description}>
                                Реалистичный и достижимый план поможет добиться успеха в самообучении.
                            </div>
                        </div>
                        <div className={classes.item}>
                            {/* {<Desktop />} */}
                            <div className={classes.title}>Составляй план обучения</div>
                            <div className={classes.line}></div>
                            <div className={classes.description}>
                                Реалистичный и достижимый план поможет добиться успеха в самообучении.
                            </div>
                        </div>
                        <div className={classes.item}>
                            {/* {<Desktop />} */}
                            <div className={classes.title}>Составляй план обучения</div>
                            <div className={classes.line}></div>
                            <div className={classes.description}>
                                Реалистичный и достижимый план поможет добиться успеха в самообучении.
                            </div>
                        </div>
                        <div className={classes.item}>
                            {/* {<Desktop />} */}
                            <div className={classes.title}>Составляй план обучения</div>
                            <div className={classes.line}></div>
                            <div className={classes.description}>
                                Реалистичный и достижимый план поможет добиться успеха в самообучении.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={classes.registration}>
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
            </section>
        </div>
    );
};

export default WelcomePage;
