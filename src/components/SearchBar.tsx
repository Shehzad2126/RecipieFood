
import React from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa'; // Import search icon

const SearchBarWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  padding: 20px;
  position: sticky; 
  top: 0; 
  z-index: 1000; 
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); 
`;

const LogoImage = styled.img`
  width: 80px;
  margin: 0px 200px; /* Space between logo and search field */
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 50px;
  width: 600px;
`;

const CategoryButton = styled.button`
  background-color: #f5f5f5;
  border: none;
  border-radius: 30px;
  padding: 15px 20px;
  font-size: 1rem;
  color: black;
  cursor: pointer;
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  padding: 10px;
  font-size: 1rem;
  color: #ccc;
`;

const SearchButton = styled.button`
  background-color: #98999a;
  border: none;
  border-radius: 30px;
  padding: 15px;
  cursor: pointer;
`;

interface SearchBarProps {
  onShowAllCategories: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onShowAllCategories }) => {
  return (
    <SearchBarWrapper>
      <LogoImage src="/assets/logo.png" alt="Logo" />

      <SearchContainer>
        <CategoryButton onClick={onShowAllCategories}>All Categories</CategoryButton>

        <SearchInput type="text" placeholder="Search" />

        <SearchButton>
          <FaSearch />
        </SearchButton>
      </SearchContainer>
    </SearchBarWrapper>
  );
};

export default SearchBar;
