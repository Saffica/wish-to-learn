import classes from './footer.module.css';

export const Footer = ({ text }: FooterProps): JSX.Element => {
    return (
        <footer className={classes.footer}>
            {text}
        </footer>
    )
}