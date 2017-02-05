import * as React from 'react';
import { Link } from 'react-router'

import styles from './header.less';

function HeaderTitle() {
  return <h1 className={styles.headerTitle}>
    Webpurple
  </h1>;
}


export default HeaderTitle;
