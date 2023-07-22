import styles from './logo.module.scss';
import logoPath from '../lib/imgs/logo.png'

export const Logo: React.FunctionComponent = () => {
    return (
        <div className={styles.logo}>
            <img src={logoPath} alt="wish-to-lern" />
        </div>
    )
}