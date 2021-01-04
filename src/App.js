import React from 'react';
import './App.css';
import '@shopify/polaris/dist/styles.css';
import enTranslations from '@shopify/polaris/locales/en.json';
import { AppProvider, Page, TopBar} from '@shopify/polaris';
import SearchForm from './component/SearchForm';
import MediaCard from './component/MediaCard'


function App() {
  return (
    <AppProvider i18n={enTranslations}>

      <TopBar />
      <SearchForm />
      <Page title="Reasons I want to work at Shopify"><p>An Interactive Experience by Kayla Newlon</p></Page>
      <MediaCard />
    </AppProvider>
  )
};

export default App;
