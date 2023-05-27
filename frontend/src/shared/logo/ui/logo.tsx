import classes from './logo.module.scss';
import logoPath from '../lib/imgs/logo.png'

export const Logo: React.FunctionComponent = () => {
    return (
        <div className={classes.logo}>
            <img src={logoPath} alt="wish-to-lern" />
        </div>
    )
}