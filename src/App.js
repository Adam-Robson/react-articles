import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Articles from './components/Articles/Articles';
import Article from './components/Article/Article';
import About from './components/About/About';

import './App.css';

export default function App() {
  return (
    <main className="App">
      <NavBar />
      <Switch>
        <Route exact path='/about'><About /></Route>
        <Route path='/articles/:articleId'><Articles /></Route>
        <Route path='/article'><Article /></Route>
        <Route path='/'><Home /></Route>
      </Switch>
    </main>
  );
}
