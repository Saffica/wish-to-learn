import React from 'react';
import { ReactComponent as Desktop } from '../../imgs/desktop.svg';
import style from './WelcomePage.module.css';

export const WelcomePage = () => {
    return (
        <div className={style.welcome}>
            <section className={style.general}>
                <div className={style.wrapper}>
                    <div className={style.top}>
                        <p className={style.description}>ПЛАТФОРМА ДЛЯ самообразования</p>
                        <p className={style.title}>хочу учу</p>
                        <p className={style.subtitle}>возьми свое обучение под контроль</p>
                        <button>К списку планов</button>
                    </div>
                    <div className={style.items}>
                        <div className={style.item}>
                            {<Desktop />}
                            <div className={style.title}>
                                Составляй план
                                обучения
                            </div>
                            <div className={style.line}></div>
                            <div className={style.description}>
                                Реалистичный и достижимый план поможет добиться успеха в самообучении.
                            </div>
                        </div>
                        <div className={style.item}>
                            {<Desktop />}
                            <div className={style.title}>
                                Составляй план
                                обучения
                            </div>
                            <div className={style.line}></div>
                            <div className={style.description}>
                                Реалистичный и достижимый план поможет добиться успеха в самообучении.
                            </div>
                        </div>
                        <div className={style.item}>
                            {<Desktop />}
                            <div className={style.title}>
                                Составляй план
                                обучения
                            </div>
                            <div className={style.line}></div>
                            <div className={style.description}>
                                Реалистичный и достижимый план поможет добиться успеха в самообучении.
                            </div>
                        </div>
                        <div className={style.item}>
                            {<Desktop />}
                            <div className={style.title}>
                                Составляй план
                                обучения
                            </div>
                            <div className={style.line}></div>
                            <div className={style.description}>
                                Реалистичный и достижимый план поможет добиться успеха в самообучении.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={style.registration}>
                <div className={style.wrapper}>
                    <div className={style.left}>
                        С помощью нашей платформы пользователи получают возможность создавать курсы, которые агрегируют
                        материалы из различных источников. Они могут отслеживать свой прогресс, устанавливать цели и
                        делиться курсами с другими пользователями.
                    </div>
                    <div className={style.right}>
                        Если Вы заинтересованы в улучшении своих навыков или просто хотите научиться чему-то новому,
                        зачем ждать? Зарегистрируйтесь сегодня и начните свой путь обучения!
                        <button>Зарегистрироваться</button>
                    </div>
                </div>
            </section>
            <section className='feedback'>
                <div className={style.wrapper}>
                    <div className='feedback__left-column'></div>
                    <div className='feedback__right-column'>
                        Остались вопросы или есть предложения?
                        <button>Напиши нам</button>
                    </div>
                </div>
            </section>
        </div>
    );
};
