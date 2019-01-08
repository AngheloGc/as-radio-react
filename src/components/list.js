import React, { Component } from 'react';

import defaultAnimeImage from '../images/default.png';

import Anime from './anime';

import firebase from './utils/firebase';

export default class List extends Component {

    constructor() {
        super();
        //this.updateMessage = this.updateMessage.bind(this);
        //this.submitMessage = this.submitMessage.bind(this);
        this.loadData = this.loadData.bind(this);
        this.state = {
            songs: []
        }
    }

    componentDidMount() {
        this.loadData()
    }

    loadData() {

        let songsArray = []

        firebase.database().ref('songs/').orderByChild('inList').equalTo(true).on('value', songList => {
            songsArray = []
            songList.forEach(function(snap) {
                let song = snap.val();
                let key = snap.key
                console.log(key)
                songsArray.push({
                    id: key,
                    anime: song.name,
                    type: `${song.type} ${song.number}`,
                    image: song.image,
                    date: song.date
                })
            })

            songsArray.sort(function(a, b) { 
                return new Date(a.date) - new Date(b.date);
            })

            this.setState({
                songs: songsArray
            })
            
        })
    }

    render() {

        //const currentSongs = this.state.songs.map((el, i) => <li key={i}>{el.anime}</li>);

        return(
            <section className="App-list">
                <div className="App-list-header">
                    <a href="/">En cola</a>
                    <a href="/">Sugeridos</a>
                    <a href="/">Reproducidos</a>
                </div>
                <div id="container" className="container App-list-body">
                    { this.state.songs.map( (song,i) => {
                        if(song) {

                            return <Anime key={i} songID={song.id} imageSrc={song.image} animeName={song.anime} songName={song.type} />
                        
                        }else {

                            return( 'No hay canciones en lista' )

                        }
                    })}
                </div>
            </section>

        );
    }
}