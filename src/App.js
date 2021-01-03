import React from 'react';
import './App.css';
import Header from './component/Header';
import SearchForm from './component/SearchForm';
import '@shopify/polaris/dist/styles.css';


function App() {
  return (
    <div>
    <Header />

    <SearchForm />
    </div>
  );
}

export default App;
