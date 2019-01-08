import React, { Component } from 'react';

import defaultAnimeImage from '../images/default.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import firebase from './utils/firebase';
import { timeout } from 'q';

export default class Anime extends Component {

    constructor() {
        super();
        //this.updateMessage = this.updateMessage.bind(this);
        //this.submitMessage = this.submitMessage.bind(this);
        this.removeSongFromList = this.removeSongFromList.bind(this);
    }

    removeSongFromList(id) {


        firebase.database().ref('songs/' + id).update({
            inList: false,
            date: Date.now()
        })
        
    }

    render(){
        return(
            <div className={"Anime-component " + (this.props.songInList ? 'song-in-list': 'song-not-in-list')}>
                <div className="Anime-component-body">
                    <img src={this.props.imageSrc} />
                    <p>
                        <h4>{this.props.animeName}</h4>
                        <span>{this.props.songName}</span>
                    </p>
                </div>
                <button onClick={e => {this.removeSongFromList(this.props.songID)}}><FontAwesomeIcon icon="times-circle" /></button>
            </div>
        );
    }
}