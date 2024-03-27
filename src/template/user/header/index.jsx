import css from './header.module.scss';
import Logo from './logo';
import Menu from './menu';
import Search from './search';
import Right from './right';
import Bar from './bar';
import { useEffect, useState } from 'react';

function Header() {

    const [showMenuOnTable, setShowMenuOnTable] = useState(false);

    const showMenuToggle = () => setShowMenuOnTable(s => !s)
    const renderClassShowMenuOnTablet = () => showMenuOnTable ? css.showHeaderOnTablet : '';

    useEffect(() => {
        console.log(showMenuOnTable);
    }, [showMenuOnTable])

    return (
        <div className={`${css.header} ${renderClassShowMenuOnTablet()} `}>
            <div className={css.container}>
                <div className={css.header__logo}>
                    <Logo />
                </div>
                <div className={css.header__menu}>
                    <Menu />
                </div>
                <div className={css.header__search}>
                    <Search />
                </div>
                <div className={css.header__right}>
                    <Right />
                </div>
                <div
                    onClick={showMenuToggle}
                    className={`${css.header__bar} `}
                >
                    <Bar />
                </div>
            </div>
        </div>
    )
}

export default Header