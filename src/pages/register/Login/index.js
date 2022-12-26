import React, { Component } from 'react';
import '../Login/Login.css'
import Header from '../../../component/Header';

export default class index extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="wapper">
                    <div className="wapper-heading">
                        <h1>Login</h1>
                    </div>
                    <form onsubmit="login()">
                        <div className="input__field">
                            <input id="username" type="text" placeholder="User Name" />
                        </div>
                        <div className="input__field">
                            <input id="password" type="password" placeholder="Password" />
                        </div>
                        <a href="signup.html" className="signup-link">Sign Up</a>
                        <button id="btn" className="btn">Login</button>
                    </form>
                </div>
            </div>
        );
    }
}
