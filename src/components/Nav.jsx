import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
  <nav class="navbar navbar-light bg-dark">
  <div class="navbar-brand ">
    <img src={Logo}></img>
    <a class="navbar-brand my-2 ml-3 text-light" href="#">Henry - Weather App</a>
  </div>
  <SearchBar onSearch={onSearch}/>
</nav>
  );
};

export default Nav;
