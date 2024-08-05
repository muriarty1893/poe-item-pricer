import React, { useState } from 'react';
import './App.css';
const { fetchItemPrice } = require("./api");

function App() {
  const [itemName, setItemName] = useState('');
  const [itemData, setItemData] = useState(null);
  const [error, setError] = useState('');

  const handleFetchItemPrice = async () => {
    try {
      const data = await fetchItemPrice(itemName);
      setItemData(data);
      setError('');
    } catch (err) {
      setItemData(null);
      setError(err.message);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>POE Item Pricer</h1>
        <input 
          type="text" 
          value={itemName} 
          onChange={(e) => setItemName(e.target.value)} 
          placeholder="Enter item name"
        />
        <button onClick={handleFetchItemPrice}>Fetch Item Price</button>
        {error && <p style={{color: 'red'}}>{error}</p>}
        {itemData && (
          <div>
            <h2>{itemData.name}</h2>
            <p>ID: {itemData.id}</p>
            <p>Divine Value: {itemData.divineValue}</p>
            <ul>
              {itemData.explicitModifiers.map((mod, index) => (
                <li key={index}>{mod}</li>
              ))}
            </ul>
            <img src={itemData.icon} alt={itemData.name} />
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
