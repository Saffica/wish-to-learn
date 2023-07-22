import { Button } from '../../../shared';
import { items } from '../consts/items';
import styles from './general.module.scss';
import desktopImgPath from '../lib/imgs/desktop.png';


export const General: React.FunctionComponent<IGeneralProps> = (props) => {
    return (
        <div className={`${styles.general} ${props.className}`} >
            <div className={styles.top}>
                <div className={styles.description}>
                    платформа для самообразования
                </div>
                <div className={styles.title}>хочу учу</div>
                <div className={styles.subtitle}>возьми свое обучение под контроль</div>
                <div className={styles.button}>
                    <Button title='К списку планов' width='100%' backgroundColor='#42597B' height='64px' color='#fff' />
                </div>
            </div>
            <div className={styles.items}>
                {items.map(({ title, description, id }) => <div className={styles.item} key={id}>
                    <img src={desktopImgPath} alt='desktop' />
                    <div className={styles.title}>{title}</div>
                    <div className={styles.line}></div>
                    <div className={styles.description}>{description}</div>
                </div>
                )}
            </div>
        </div>
    )
}