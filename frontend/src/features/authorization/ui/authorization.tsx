import { HeaderButton } from '../../../shared';

export const Authorization: React.FunctionComponent = () => {
    return (
        <div className='authorization'>
            <HeaderButton title='Войти' onClick={() => console.log('войти')} />
            {/* <UserPhoto /> */}

        </div>
    )
}