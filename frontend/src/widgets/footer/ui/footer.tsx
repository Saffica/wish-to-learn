import classes from './footer.module.scss';

export const Footer: React.FunctionComponent<IFooterProps> = (props) => {
    return (
        <footer className={classes.footer}>
            {props.text}
        </footer>
    )
}