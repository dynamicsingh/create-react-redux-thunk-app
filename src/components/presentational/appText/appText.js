import React from 'react';
import logo from '../../../assets/images/logo.svg';

const appTextComponent = () => {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <p>This is React Redux starter kit with Redux Thunk</p>
            <br/>
            <p>
                <a className="App-link" href={'/sampleRoute'}>Sample Component</a>
            </p>
            <a
                className="App-link"
                href="https://github.com/dynamicsingh"
                target="_blank"
                rel="noopener noreferrer"
            >
                Starter kit created by : Bhupinder Singh
            </a>
        </header>
    );
};
export default appTextComponent;