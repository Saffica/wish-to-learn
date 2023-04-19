<div className='header__login header-login'>
    <div className="header-login__button">
        <button>{props.user ? 'Выйти' : 'Войти'}</button>
    </div>
    <div className="header-login__user-icon">
        <img
            src={props.user ? props.user.icon : '/profile.png'}
            alt='profile icon'
        />
    </div>
</div>