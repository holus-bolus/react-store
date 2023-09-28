import './App.css';
import { Products } from './elements/Products/Products';
import { useState } from 'react';
import { ProductModal } from './elements/ModalWindow/ModalWindow';

function App() {
  const [isModalOpen, setModalIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setModalIsOpen(false);
  };

  return (
    <div className="App">
      <Products onProductClick={openModal} />
      <ProductModal
        isOpen={isModalOpen}
        onClose={closeModal}
        product={selectedProduct}
      />
    </div>
  );
}

export default App;
