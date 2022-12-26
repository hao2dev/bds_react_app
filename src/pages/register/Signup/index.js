import React, { Component } from 'react';
import '../Signup/Signup.css'
import Header from '../../../component/Header';

export default class index extends Component {
    render() {
        return (
            <div>
            <Header/>
            <div className="wapper">
                <div className="wapper-heading">
                    <h1>Sign Up</h1>
                </div>
                <form onsubmit="signup()">
                    <div className="input__field">
                        <input id="username" type="text" placeholder="User Name" />
                    </div>
                    <div className="input__field">
                        <input id="email" type="text" placeholder="Email" />
                    </div>
                    <div className="input__field">
                        <input id="password" type="password" placeholder="Password" />
                    </div>
                    <div className="input__field">
                        <input id="password" type="password" placeholder="Confirm Password" />
                    </div>
                    <a href="login.html" className="login-link">Login</a>
                    <button id="btnSignup" className="btn">Sign Up</button>
                </form>
            </div>
            </div>
        );
    }
}
