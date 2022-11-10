import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import styled from "styled-components";
import { CgMenu, CgClose } from "react-icons/cg";

const Nav = () => {
  const [menuIcon, setMenuIcon] = useState();
  const Nav = styled.nav`
    .navbar-lists{
      display: flex;
      align-items: center;
      gap: 4.8 rem;

      .navbar-link{
        &:link,
        &:visited {
          display: inline-block;
          text-decoration: none;
          font-size: 1.8rem;
          font-weight: 500;
          color: ${({ theme }) => theme.colors.black};
          transition: color 0.3s linear;
          margin:0 2rem;
        }
        &:hover,
        &:active {
          color: ${({ theme }) => theme.colors.helper};
        }
      }
    }
    .nav-btn {
      display: none;
      background-color: transparent;
      cursor: pointer;
      border: none;
    }
    .on[name="close-outline"] {
      display: none;
    }
    .off {
      display: none;
    }

    .cart-link {
      position: relative;

      .cart-icon {
        position: relative;
        font-size: 3.2rem;
      }
      .cart-item {
        width: 2.4rem;
        height: 2.4rem;
        position: absolute;
        background-color: #000;
        color: #000;
        border-radius: 50%;
        display: grid;
        place-items: center;
        top: -20%;
        left: 70%;
        background-color: ${({ theme }) => theme.colors.helper};
      }
    }
    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .nav-btn{
        display: inline-block;
        z-index: 9999;
        border: ${({ theme }) => theme.colors.black};
        .on {
          font-size: 4.2rem;
          color: ${({ theme }) => theme.colors.black};
        }
      }
      .active.on {
        display: none;
        font-size: 4.2rem;
        position: absolute;
        top: 30%;
        right: 10%;
        color: ${({ theme }) => theme.colors.black};
        z-index: 9999;
      }
      .active.off {
        display: inline-block;
      }
      .navbar-lists {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        visibility: hidden;
        opacity: 0;
        transform: translateX(100%);
        /* transform-origin: top; */
        transition: all 3s linear;
      }
      .active.navbar-lists {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
        z-index: 999;
        transform-origin: right;
        transition: all 3s linear;
        .navbar-link {
          font-size: 4.2rem;
        }
      }
      .cart-link {
        position: relative;
        .cart-icon {
          position: relative;
          font-size: 5.2rem;
        }
        .cart-item {
          width: 4.2rem;
          height: 4.2rem;
          font-size: 2rem;
        }
      }
    }
  `;
  return (
    <Nav>
      <div className={menuIcon ? "navbar active" : "navbar"}>
        <ul className="navbar-lists">
          <li>
            <NavLink
              to="/"
              className="navbar-link"
              onClick={() => setMenuIcon(false)}
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="navbar-link"
              onClick={() => setMenuIcon(false)}
            >
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Products"
              className="navbar-link"
              onClick={() => setMenuIcon(false)}
            >
              PRODUCTS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Contact"
              className="navbar-link"
              onClick={() => setMenuIcon(false)}
            >
              CONTACT
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className="navbar-link cart-link"
              onClick={() => setMenuIcon(false)}
            >
              <FiShoppingCart className="cart-icon" />
              <span className="cart-item">0</span>
            </NavLink>
          </li>
        </ul>
        <div className="nav-btn">
          <CgMenu
            name="menu-outline"
            className="on"
            onClick={() => setMenuIcon(true)}
          />
          <CgClose
            name="close-outline"
            className="on off"
            onClick={() => setMenuIcon(false)}
          />
        </div>
      </div>
    </Nav>
  );
};

export default Nav;
