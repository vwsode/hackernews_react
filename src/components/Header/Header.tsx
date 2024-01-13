import React from 'react';
import { NavLink } from 'react-router-dom';

import Container from '@components/Container/Container';


import s from './Header.module.scss';


const Header: React.FC = () => {
    return (
        <header className={s.header}>
            <Container>
                <div className={s.wrapper}>
                    <nav className={s.nav}>
                        <ul className={s.nav__list}>
                            <li className={s.nav__item}>
                                <NavLink to=""></NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </Container>
        </header>
    );
};

export default Header;
