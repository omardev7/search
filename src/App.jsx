import React, { useState } from 'react';
import './App.css';

const articles = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  "Sed in libero sed nisl feugiat mattis a quis neque.",
  "Vivamus malesuada dapibus magna, non rhoncus felis malesuada ut.",
  "Donec nec rhoncus felis. Fusce convallis non libero nec tincidunt.",
];

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearch = event => {
    setSearchQuery(event.target.value);
  };
  
  const highlightText = (text, query) => {
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span key={index} className="highlight">
          {part}
        </span>
      ) : (
        part
      )
    );
  };
  
  const filteredArticles = articles.filter(article =>
    article.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="App">
      <h1>Article Search</h1>
      <div className="search-bar">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search for articles..."
        />
      </div>
      <div className="articles">
        <ul className={searchQuery ? 'show' : ''}>
          {filteredArticles.map((article, index) => (
            <li key={index}>
              {highlightText(article, searchQuery)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
