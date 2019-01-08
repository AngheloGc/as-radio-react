import React, { Component } from 'react';

import defaultAnimeImage from '../images/default.png';

export default class CreateAnime extends Component {

    render(){
        return(
            <div className="Create-anime-component">
                <form className="Create-anime-form">
                    <label>Nombre del Anime</label>
                    <input type="text" name="new-anime-input"/>
                    <label>Imagen</label>
                    <input type="image"/>

                </form>
                <button><FontAwesomeIcon icon="times-circle" /></button>
            </div>
        );
    }
}