import classes from './header-button.module.scss';

export const HeaderButton: React.FunctionComponent<IHeaderButton> = ({ onClick, title }) => {
    return (
        <div className={classes.headerButton}>
            <button onClick={onClick}>{title}</button>
        </div>
    )
}