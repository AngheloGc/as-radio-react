import React, { Component } from 'react';

import Anime from './anime';

export default class Chat extends Component {

    render(){
        return(
            <section className="App-chat">
                <iframe src="https://www.twitch.tv/embed/mirainosoramusic/chat?darkpopout"
                frameborder="0"
                scrolling="no"
                height="500"
                width="100%"></iframe>
            </section>

        );
    }
}