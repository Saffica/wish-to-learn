import styles from './header-button.module.scss';

export const HeaderButton: React.FunctionComponent<IHeaderButtonProps> = ({ onClick, title }) => {
    return (
        <div className={styles.headerButton}>
            <button onClick={onClick}>{title}</button>
        </div>
    )
}