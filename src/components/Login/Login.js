import React from 'react';
import styles from './Login.module.css';
import {loginURL} from '../Spotify/Spotify';

function Login() {
    return (
        <div className={styles.Login}>
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt=""/>
            <a href={loginURL}>LOGIN WITH SPOTIFY</a>
            {/* Spotify Logo */}
            {/* Login with Spotify button */}
        </div>
    )
}

export default Login;
