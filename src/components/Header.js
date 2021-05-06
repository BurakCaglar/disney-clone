import React from "react";
import styled from "styled-components";
import { NavContent } from "../utils/constants";

const Header = () => {
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      <NavMenu>
        {NavContent.map((navItem) => (
          <a key={navItem.id}>
            <img src={navItem.url} />
            <span>{navItem.name}</span>
          </a>
        ))}
      </NavMenu>
      <UserImg src="https://lh3.googleusercontent.com/ogw/ADGmqu_e2zquMukEPQl4duh9ybnzeRF1z6gUGXDSSkxz=s83-c-mo" />
    </Nav>
  );
};

export default Header;

const Nav = styled.div`
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow: hidden;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.4px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background-color: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
        transform: scaleX(0);
      }
    }

    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
