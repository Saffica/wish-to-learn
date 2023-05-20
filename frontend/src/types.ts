declare const _brand: unique symbol

declare global {
    export type ButtonProps = {
        width?: string,
        height?: string,
        color?: string,
        onClick?: () => void,
        backgroundColor?: string,
        title?: string
    }

    export type HeaderLinkProps = {
        title: string,
        link: string
    }

    export type FooterProps = {
        text: string;
    }
}

export { }