import './ModalWindow.css';

export const ProductModal = ({ isOpen, onClose, product }) => {
  if (!isOpen) return null;
  console.log('opened');
  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="modal-close" onClick={onClose}>
          Close
        </button>
        <h2>{product.name}</h2>
        <p>Color: {product.color}</p>
        <p>Price: ${product.price}</p>
      </div>
    </div>
  );
};
