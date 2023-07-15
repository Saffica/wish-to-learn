import styles from './burger-button.module.scss';

export const BurgerButton: React.FunctionComponent<IburgerButtonProps> = ({ onClick, isOpen }) => {

    return (
        <button className={isOpen ? `${styles.burgerButton} ${styles.open}` : styles.burgerButton} onClick={onClick}>
            <span></span>
            <span></span>
            <span></span>
        </button>
    )
}
