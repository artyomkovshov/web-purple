import * as React from 'react';
import { Link } from 'react-router'

import styles from './header.less';

import HeaderTitle from './header.title';
import SignStatus from './header.sign';


class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = { items: ['Home', 'Events', 'Speakers', 'Feed'] };
    }


    render() {
        return <header className={styles.header}>
            <HeaderTitle />
            <ul className={styles.itemsContainer}>
                {this.state.items.map(elem =>
                    <li className={styles.headerItem}>
                        <Link className={styles.itemLink} to='#'>{elem}</Link>
                    </li>
                )}
            </ul>
            <SignStatus />
        </header>;
    }
}

export default Header;
