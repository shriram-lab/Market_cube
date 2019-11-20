import React from 'react';
import './App.css';
import enTranslations from '@shopify/polaris/locales/en.json';
import { AppProvider, Button } from '@shopify/polaris';
import logo from './logo.svg';


function App() {
  return (
    <div>
      <AppProvider i18n={enTranslations}>
        <Button onClick={() => alert('Button clicked!')}>Example button</Button>
      </AppProvider>
    </div>
  );
}

export default App;
