import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css'

const Login = ({authService}) => {
    const history = useHistory();
        //userId 를 전달받을거야
    const gotoMaker = (userId) => {
            history.push({
                pathname:'/maker',
                state :{id:userId},
            });
        }

    const onLogin = event => {
        authService.login(event.currentTarget.textContent).then( data => gotoMaker(data.user.uId))
    };

    useEffect(() => {
        authService.onAuthChange(user => {
            user && gotoMaker(user.uid)
        })

    });


    return(
        <section className={styles.login}>
            <Header/>
            <section>
                <h1>Login</h1>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <button className={styles.button} onClick={onLogin}>Google</button>
                    </li>
                    <li className={styles.item}>
                        <button className={styles.button} onClick={onLogin}>Github</button>
                    </li>
                </ul>
            </section>
            <Footer/>
        </section>
    )
};

export default Login;