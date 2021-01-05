import React from 'react';
import './App.css';
import '@shopify/polaris/dist/styles.css';
import enTranslations from '@shopify/polaris/locales/en.json';
import { AppProvider, Page, TopBar, MediaCard } from '@shopify/polaris';
import SearchForm from './component/SearchForm';
import Card from './component/Card';


function App() {
  return (
    <AppProvider i18n={enTranslations}>

      <TopBar
        className="topBar" />

      <SearchForm />
      <Page title="Reasons I want to work at Shopify"><p>An Interactive Experience by Kayla Newlon</p></Page>
      <Card />

    </AppProvider>
  )
};

export default App;
