import React, { useContext } from 'react';
import BookDetails from './components/BookDetails';
import BookList from './components/BookList';
import AddForm from './components/AddForm';
import TopNav from './components/TopNav';
import BookContextProvider from './contexts/BookContext';
import { ThemeContext } from './contexts/ThemeContext';

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <BookContextProvider>
      <div className={theme.isLightTheme ? "app app--light" : "app"}>
        <TopNav />
        <div className="container">
          <BookList />
          <div className="container__right">
            <BookDetails />
            <AddForm/>
          </div>
        </div>
      </div>
    </BookContextProvider>
  );
}

export default App;
