declare const _brand: unique symbol;

declare global {
    export type ButtonOptions = {
        border?: string;
        color?: string;
        height?: string;
        onClick?: () => void;
        radius?: string;
        width?: string;
        title?: string;
        className?: string;
    };
    export type HeaderLinkOptions = {
        link: string;
        title: string;
    };
}

export {};
