import styles from './footer.module.scss';

export const Footer: React.FunctionComponent<IFooterProps> = (props) => {
    return (
        <footer className={styles.footer}>
            {props.text}
        </footer>
    )
}