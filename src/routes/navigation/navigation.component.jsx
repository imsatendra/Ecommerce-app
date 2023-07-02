import "./navigation.styles.scss";
import React from "react";

import { Outlet, Link } from "react-router-dom";

import { ReactComponent as Logo } from "./../../assets/logo.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
function Navigation() {
  return (
    <>
      <div className="navBar">
        <div className="sectionOne">
          <Link className="navLinks" to="allProds">
            <h2 className="logo">eCommerce</h2>
          </Link>
          <Link className="product-color" to="allProds">
            Products
          </Link>
          <Link className="product-color" to="addProd">
            Add a Product <b>+</b>
          </Link>
        </div>

        <div className="sectionTwo">

          <div className="navItem">
            <img
              className="avatar"
              src="https://cdn-icons-png.flaticon.com/512/547/547420.png"
              alt=""
            />
          <p className="name">Satendra</p>
            &nbsp;&nbsp;&nbsp;
          <Link className="navLinks" to="cart">
            <CartIcon />
          </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Navigation;
