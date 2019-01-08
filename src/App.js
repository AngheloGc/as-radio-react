import React, { Component } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimesCircle, faPlusSquare, faTrashAlt, faEdit, faExchangeAlt } from '@fortawesome/free-solid-svg-icons';

import './css/App.css';
import './css/perfect-scrollbar.css';
import PerfectScrollbar from 'perfect-scrollbar';

// Importing local components
import Header from './components/header';
import Streaming from './components/streaming';
import List from './components/list';
import Chat from './components/chat';
import Search from './components/search';

// FontAwesome Icons 
library.add(faTimesCircle);
library.add(faPlusSquare);
library.add(faTrashAlt);
library.add(faEdit);
library.add(faExchangeAlt);

class App extends Component {

  componentDidMount () {
    const containers = document.getElementsByClassName('container');
    for (let i = 0; i < containers.length; i++) {
      const ps = new PerfectScrollbar(containers[i], {
        wheelSpeed: 2,
        wheelPropagation: false,
        minScrollbarLength: 20
      });
    }
    

}

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Streaming />
          <List />
          <Chat />
          <Search />
        </main>
        <footer className="App-footer">
          <p>Anime Sama © 2018 - Amamos las buenas historias</p>
        </footer>
      </div>
    );
  }
}

export default App;
