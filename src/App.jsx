import { useState } from 'react';
import ctdLogo from './assets/mono-blue-logo.svg';
import './App.css';
import inventoryData from './assets/inventory.json';
import Header from './Header';
import ProductList from './ProductList';

function App() {
  const [inventory, setInventory] = useState(inventoryData.inventory);

  return (
    <main>
      <Header />
      <ProductList inventory={inventory} />
    </main>
  );
}

export default App;
