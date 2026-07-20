import { useState } from 'react';
import ctdLogo from './assets/mono-blue-logo.svg';
import './App.css';
import inventoryData from './assets/inventory.json';
import Header from './Header';
import ProductList from './ProductList';
import ProductCard from './ProductCard';

function App() {
  const [inventory, setInventory] = useState(inventoryData.inventory);

  function promoteItem() {
    return (
      <ProductCard
        baseName="Limited Edition Tee!"
        baseDescription="Special limited edition neon green shirt with a metallic Code the Dream Logo shinier than the latest front-end framework! Signed by the legendary CTD staff member Frank!"
      />
    );
  }

  return (
    <main>
      <Header />
      <ProductList inventory={inventory}>{promoteItem()}</ProductList>
    </main>
  );
}

export default App;
