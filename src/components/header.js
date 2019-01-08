import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import logo from '../images/logo.png';
import userImage from '../images/Angelo.jpg';

export default class Header extends Component {

    render(){
        return(
            <header className="App-header">
                <figure>
                    <img src={logo} className="App-logo" alt="logo" />
                    <figcaption>Anime Sama Radio</figcaption>
                </figure>
                <nav>
                    <ul>
                        <a className="App-link" href="/">
                        <FontAwesomeIcon icon="plus-square" />
                        </a>
                        <a className="App-link" href="/"><FontAwesomeIcon icon="edit" /></a>
                        <a className="App-link" href="/"><FontAwesomeIcon icon="trash-alt" /></a>
                    </ul>
                    <p>
                    <span>Bienvenido, Anghelo</span> <img src={userImage} alt="Usuario" />
                    </p>
                </nav>    
            </header>

        );
    }
}