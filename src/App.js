import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';
import Footer from './components/Footer/Footer';
import { actions, comedy, documentary, horror, orginals, romance, trend } from './constants/urls'



function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner url={trend}/>
      <RowPost title = 'Netflix Originals' genre = {orginals}/>
      <RowPost title = 'Trending Movies' isSmall genre = {trend} />  {/*issmall is boolean*/} 
      <RowPost title = 'Action Movies' isSmall genre = {actions}/>
      <RowPost title = 'Comedy Movies' isSmall genre = {comedy}/>
      <RowPost title = 'Horror Movies' isSmall genre = {horror}/>
      <RowPost title = 'Romance Movies' isSmall genre = {romance}/>
      <RowPost title = 'Documentaries' isSmall genre = {documentary}/>
      <Footer/>
    </div>
  );
}

export default App;
