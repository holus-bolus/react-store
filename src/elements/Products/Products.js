import './Products.css';
import { ItemCard } from '../ItemCard/ItemCard';

const productList = [
  {
    name: 'iPhone',
    price: 1000,
    color: 'Red',
  },
  {
    name: 'Samsung',
    price: 950,
    color: 'Yellow',
  },
  {
    name: 'Xiaomi',
    price: 1000,
    color: 'Black',
  },
];
export const Products = () => {
  return (
    <div>
      <ul className="products-list">
        {productList.map((item, index) => {
          return (
            <ItemCard
              name={item.name}
              color={item.color}
              price={item.price}
              key={index}
            />
          );
        })}
      </ul>
    </div>
  );
};
