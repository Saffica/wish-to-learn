import { useState } from 'react';
import classes from './burger-button.module.scss';

export const BurgerButton: React.FunctionComponent<IburgerButtonProps> = ({ onClick }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleButton = (): void => {
        onClick();
        setIsOpen(!isOpen)
    }

    return (
        <button className={isOpen ? `${classes.burgerButton} ${classes.open}` : classes.burgerButton} onClick={handleButton}>
            <span></span>
            <span></span>
            <span></span>
        </button>
    )
}
