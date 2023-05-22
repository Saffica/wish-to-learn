import classes from './button.module.css';

export const Button = ({
    title,
    width,
    height,
    color,
    backgroundColor,
    onClick
}: ButtonProps): JSX.Element => {
    return <button
        style={{
            width,
            height,
            color,
            backgroundColor
        }}
        onClick={onClick}
        className={classes.btn}>
        {title}
    </button>
}