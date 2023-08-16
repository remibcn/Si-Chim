import './styles.scss';
import { NavLink } from 'react-router-dom';

function Products() {
  return (
    <div className="modal-container">
      <div className="modal-content">
        <NavLink to="/Nos-Produits/Cuisine">
          <p> Cuisine </p>
        </NavLink>
        <NavLink to="/Sols">
          <p> Sols </p>
        </NavLink>
      </div>
    </div>
  );
}

export default Products;
