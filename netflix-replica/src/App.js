import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav'

function App() {
  return (
    <div className="app">
    <Nav />
     <Banner />
     <Row title="NETFLIX ORIGINALS" fetchUrl= {requests.fetchNetflixOriginals} isLarge='True'/>
     <Row title="TRENDING NOW" fetchUrl= {requests.fetchTrending}/>
     <Row title="TOP RATED" fetchUrl= {requests.fetchTopRated}/>
     <Row title="ROMANTIC" fetchUrl= {requests.fetchRomanceMovies}/>
     <Row title="SCI-FI" fetchUrl= {requests.fetchScific}/>
     <Row title="ANIMATION" fetchUrl= {requests.fetchAnimationMovies}/>
     <Row title="CRIME" fetchUrl= {requests.fetchCrime}/>
     <Row title="COMEDY" fetchUrl= {requests.fetchComedyMovies}/>
    
    </div>
  );
}

export default App;
