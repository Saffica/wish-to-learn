declare const _brand: unique symbol

declare interface ITitle {
    title?: string
}
declare interface IClassName {
    className?: string
}
declare interface IWidth {
    width?: string
}
declare interface IHeight {
    height?: string
}
declare interface IColor {
    color?: string
}
declare interface IOnClick {
    onClick?: () => void
}
declare interface IBackgroundColor {
    backgroundColor?: string
}
declare interface IBackgroundImage {
    backgroundImage?: string
}
declare interface IText {
    text?: string
}
declare interface ILink {
    link: string
}
declare interface ILink {
    link: string
}
declare interface IImgSrc {
    src?: string
}
declare interface IIsOpenMandatory {
    isOpen: boolean
}
declare interface IOnClickMandatory {
    onClick: () => void
}

declare interface IRegistrationProps extends IClassName { }

declare interface IButtonProps extends ITitle, IWidth, IHeight, IColor, IOnClick, IBackgroundColor { }

declare interface IFooterProps extends IText { }

declare interface IFeedbackProps extends IClassName { }

declare interface IGeneralProps extends IClassName { }

declare interface IHeaderLinkProps extends ITitle, ILink { }

declare interface IHeaderButtonProps extends IOnClick, ITitle { }

declare interface IUserPhotoProps extends IImgSrc { }

declare interface IMenuProps extends IOnClickMandatory, IIsOpenMandatory { }

declare interface IburgerButtonProps extends IMenuProps { }