import React from 'react';
import styles from './header.module.css'


const Header = ({ onLogout}) =>{
    return(
        <header className={styles.header}>
        {/* onLogout 이면(&&) logout 버튼을 보여주셈 */}
        {onLogout && <button className={styles.logout} onClick={onLogout}>Logout</button>}
        <h1 className={styles.title}>Business Card Maker</h1>
        </header>
    )
}
export default Header;