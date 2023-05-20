import { Button } from '../../../shared';
import classes from './about-platform.module.css';
import { ReactComponent as DesktopSvg } from '../lib/desktop.svg';

export const AboutPlatform = (): JSX.Element => {

    const items = [
        { title: 'Составляй план обучения', description: 'Реалистичный и достижимый план поможет добиться успеха в самообучении.', id: 3 },
        { title: 'Следуй плану обучения', description: 'Не отклоняйся от своего плана, чтобы добиться лучших результатов в учебе.', id: 4 },
        { title: 'Фиксируй время обучения', description: 'Запланируй и фиксируй затраченное время на обучение.', id: 5 },
        { title: 'Отдых', description: 'Не забывай делать перерывы в обучении.', id: 6 },
    ];

    return (
        <div className={classes.about}>
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
                    <DesktopSvg />
                    <div className={classes.title}>{title}</div>
                    <div className={classes.line}></div>
                    <div className={classes.description}>{description}</div>
                </div>
                )}
            </div>
        </div>
    )
}