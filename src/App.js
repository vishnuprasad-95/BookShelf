import React from 'react';
import BookDetails from './components/BookDetails';
import BookList from './components/BookList';
import AddForm from './components/AddForm';
import TopNav from './components/TopNav';
import BookContextProvider from './contexts/BookContext';
import { ThemeProvider } from 'styled-components';
import { getTheme } from './constants/themes';

const App = () => {
  return (
    <ThemeProvider theme={getTheme()}>
      <BookContextProvider>
        <div className="app">
          <TopNav />
          <div className="container">
            <BookList />
            <div className="container__right">
              <BookDetails />
              <AddForm />
            </div>
          </div>
        </div>
      </BookContextProvider>
    </ThemeProvider>
  );
}

export default App;
