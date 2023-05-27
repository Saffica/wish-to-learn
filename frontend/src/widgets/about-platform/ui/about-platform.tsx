import { Button } from '../../../shared';
import { items } from '../consts/items';
import classes from './about-platform.module.scss';
import desktopImgPath from '../lib/imgs/desktop.png';


export const AboutPlatform: React.FunctionComponent<IAboutPlatformProps> = (props) => {
    return (
        <div className={`${classes.about} ${props.className}`} >
            <div className={classes.top}>
                <div className={classes.description}>
                    платформа длясамообразования
                </div>
                <div className={classes.title}>хочу учу</div>
                <div className={classes.subtitle}>возьми свое обучение под контроль</div>
                <Button title='К списку планов' width='100%' backgroundColor='#42597B' height='64px' color='#fff' />
            </div>
            <div className={classes.items}>
                {items.map(({ title, description, id }) => <div className={classes.item} key={id}>
                    <img src={desktopImgPath} alt='desktop' />
                    <div className={classes.title}>{title}</div>
                    <div className={classes.line}></div>
                    <div className={classes.description}>{description}</div>
                </div>
                )}
            </div>
        </div>
    )
}