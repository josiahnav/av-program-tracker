import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import classes from './Header.module.css';
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro';

const Header = () => {
    return(
        <header className={classes.header}>
            <FontAwesomeIcon icon={solid('microphone')} fixedWidth={true}/>
            <span className={classes.title}>A/V Program Tracker</span>
        </header>
    );
}

export default Header;
