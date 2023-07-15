import styles from './button.module.scss';

export const Button: React.FunctionComponent<IButtonProps> = ({
    title,
    width,
    height,
    color,
    backgroundColor,
    onClick
}) => {
    return <button
        style={{
            width,
            height,
            color,
            backgroundColor
        }}
        onClick={onClick}
        className={styles.btn}>
        {title}
    </button>
}