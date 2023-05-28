import { HeaderButton } from "../../../shared";

export const SignOut: React.FunctionComponent = () => {
    return (
        <HeaderButton title="Выйти" onClick={() => console.log('Выйти')} />
    )
}