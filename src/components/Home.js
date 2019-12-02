import React from 'react';
import { ProductView } from './product';

function Home() {
  return (
    <div>
      <div>home</div>
      <div id="container" className="p-md">
        <ProductView />
        <ProductView />
        <ProductView />
      </div>
    </div>
  );
}

export default Home;
