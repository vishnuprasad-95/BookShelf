import React from 'react';
import BookDetails from './components/BookDetails';
import BookList from './components/BookList';
import AddForm from './components/AddForm';
import TopNav from './components/TopNav';
import BookContextProvider from './contexts/BookContext';

const App = () => {
  return (
    <BookContextProvider>
      <div className="app">
        <TopNav />
        <div className="container">
          <BookList />
          <BookDetails />
        </div>
          <AddForm/>
      </div>
    </BookContextProvider>
  );
}

export default App;
