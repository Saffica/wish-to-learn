declare const _brand: unique symbol

declare global {
    export interface ITitle {
        title?: string
    }
    export interface IClassName {
        className?: string
    }
    export interface IWidth {
        width?: string
    }
    export interface IHeight {
        height?: string
    }
    export interface IColor {
        color?: string
    }
    export interface IOnClick {
        onClick?: () => void
    }
    export interface IOnClickMandatory {
        onClick: () => void
    }
    export interface IBackgroundColor {
        backgroundColor?: string
    }
    export interface IBackgroundImage {
        backgroundImage?: string
    }
    export interface IText {
        text?: string
    }
    export interface ILink {
        link: string
    }
    export interface ILink {
        link: string
    }
    export interface IImgSrc {
        src?: string;
    }

    export interface IRegistrationProps extends IClassName { }

    export interface IButtonProps extends ITitle, IWidth, IHeight, IColor, IOnClick, IBackgroundColor { }

    export interface IFooterProps extends IText { }

    export interface IFeedbackProps extends IClassName { }

    export interface IAboutPlatformProps extends IClassName { }

    export interface IHeaderLinkProps extends ITitle, ILink { }

    export interface IHeaderButtonProps extends IOnClick, ITitle { }

    export interface IUserPhotoProps extends IImgSrc { }

    export interface IburgerButtonProps extends IOnClickMandatory { }
}

export { }