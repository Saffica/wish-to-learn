import classes from './burger-button.module.scss';

export const BurgerButton: React.FunctionComponent<IburgerButtonProps> = ({ onClick, isOpen }) => {

    return (
        <button className={isOpen ? `${classes.burgerButton} ${classes.open}` : classes.burgerButton} onClick={onClick}>
            <span></span>
            <span></span>
            <span></span>
        </button>
    )
}
