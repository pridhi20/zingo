import React from 'react';
import './Explore.css';
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore Our Menu</h1>

      <p className="explore-menu-text">
        Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
      </p>

      <div className="explore-menu-list">
        {menu_list.map((item) => {
          const isActive = category === item.menu_name;
          return (
            <div
              onClick={() =>
                setCategory((prev) => (prev === item.menu_name ? 'All' : item.menu_name))
              }
              key={item.menu_name}
              className={`explore-menu-list-item ${isActive ? 'active' : ''}`}
            >
              <img src={item.menu_image} alt={item.menu_name} />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>

      <hr />
    </div>
  );
};

export default ExploreMenu;
