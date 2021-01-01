import React from 'react';
import SearchBar from 'material-ui-search-bar';
import Fuse from 'fuse.js';


export default function SearchForm(props) {
  const fuse = new Fuse(characters, {
    keys: [
      'name',
      'company',
      'species'
    ]
  });
  
  const results = fuse.search('bender');

  return (
    <SearchBar
    
      value={props.search}
      onChange={props.handleInputChange}

    />
  );
}

