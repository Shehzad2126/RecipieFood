
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import { GlobalStyle } from './styles/globalStyles';
import Footer from './components/Footer';

function App() {
  const [showAll, setShowAll] = useState(false); // State to control showing all cards

  const handleShowAllCategories = () => {
    setShowAll(true);
  };

  return (
    <>
      <GlobalStyle />
      <Header onShowAllCategories={handleShowAllCategories} /> 
      <Routes>
        <Route path="/" element={<RecipeList showAll={showAll} />} /> 
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;

