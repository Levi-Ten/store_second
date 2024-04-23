import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../scss/header.scss";
import ReactDOM from "react-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-font-awesome";
// import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { api_categories } from "../api/Api";

function Header() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    try {
      const request = async () => {
        await fetch(api_categories)
          .then((res) => res.json())
          .then((json) => setCategories(json));
      };
      request();
    } catch (error) {
      console.log("mistake");
    }
  }, []);

  // return (вывод) данных
  const types = categories.map((category, index) => {
    return (
      <>
        <NavLink
          to={`/products/${category}`}
          className={({ isActive }) => (isActive ? "active" : "text__link")}>
          {category}
        </NavLink>
      </>
    );
  });
// console.log(types);
  //return (вывод) данных функции Header
  return (
    <div className="heading">
      <div className="links">
        <Link to="/" className="home__link">
          Home
        </Link>
        <Link to="/basket" className="cart__link">
          {/* <FontAwesomeIcon icon={faCartShopping} /> */}
          <i class="fa-solid fa-cart-shopping"></i>
        </Link>
      </div>
      <div className="categories">{types}</div>
    </div>
  );
}

export default Header;

{
  /* <FontAwesomeIcon icon={faCartShopping} /> */
}

{
  /* <NavLink
  to={`/products/${category}`}
  className={({ isActive}) =>
  isActive ? "active" : "text__link"
  }
>
{category}
</NavLink>; */
}
