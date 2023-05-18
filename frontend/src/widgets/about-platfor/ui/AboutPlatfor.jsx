import React from "react";
import { Button } from '../../../shared';
import classes from './AboutPlatfor.module.css';
import { ReactComponent as DesktopSvg } from '../lib/desktop.svg';
import { items } from '../consts/items';

export const AboutPlatform = () => {
    return (
        <div className={classes.aboutPlatform}>
            <div className={classes.top}>
                <div className={classes.description}>
                    платформа длясамообразования
                </div>
                <div className={classes.title}>хочу учу</div>
                <div className={classes.subtitle}>возьми свое обучение под контроль</div>
                <Button title='К списку планов' width='100%' backgroundColor='#42597B' height='64px' color='#fff' />
            </div>
            <div className={classes.items}>
                {items.map(({ title, description, id }) => <div className={classes.item}>
                    <DesktopSvg />
                    <div className={classes.title} key={id}>{title}</div>
                    <div className={classes.line}></div>
                    <div className={classes.description}>{description}</div>
                </div>
                )}
            </div>
        </div>
    )
}