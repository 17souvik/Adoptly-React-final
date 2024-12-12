import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Search.css";

const SearchBar = () => {
    const [isSearchActive, setIsSearchActive] = React.useState(true);
    const [searchTerm, setSearchTerm] = React.useState('');
    const [suggestions, setSuggestions] = React.useState([]);

    const petSuggestions = [
      { name: 'Golden Retriever', type: 'Dog' },
      { name: 'Persian Cat', type: 'Cat' },
      { name: 'Parakeet', type: 'Bird' },
      { name: 'Hamster', type: 'Small Pet' },
      { name: 'Goldfish', type: 'Fish' },
      { name: 'Labrador', type: 'Dog' },
      { name: 'Siamese Cat', type: 'Cat' },
      { name: 'Guinea Pig', type: 'Small Pet' }
    ];

    const handleSearchClick = () => {
      setIsSearchActive(true);
    };


    const handleSearchInput = (e) => {
      const value = e.target.value;
      setSearchTerm(value);
      
      if (value.trim()) {
        const filtered = petSuggestions.filter(pet => 
          pet.name.toLowerCase().includes(value.toLowerCase()) ||
          pet.type.toLowerCase().includes(value.toLowerCase())
        );
        setSuggestions(filtered);
      } else {
        setSuggestions([]);
      }
    };
const navigate = useNavigate();
const handleOverlayClick = (e) => {
  if (e.target.classList.contains('search-overlay')) {
    setIsSearchActive(false);
    setSearchTerm('');
    setSuggestions([]);
    navigate(-1);
  }};
  return (
    <div>
        <div className={`search-overlay ${isSearchActive ? 'active' : ''}`} onClick={handleOverlayClick}>
            <div className="search-input-container">
              <input 
                type="text" 
                className="search-input" 
                placeholder="Search pets..." 
                autoFocus={isSearchActive}
                value={searchTerm}
                onChange={handleSearchInput}
              />
              {suggestions.length > 0 && (
                <div className="suggestions">
                  {suggestions.map((suggestion, index) => (
                    <div key={index} className="suggestion-item">
                      <svg className="suggestion-icon" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                      </svg>
                      {suggestion.name} - {suggestion.type}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

    </div>
  )
}

export default SearchBar