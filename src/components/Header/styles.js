import styled, { keyframes } from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  background: #0d47a1;
  padding: 0 30px;
  color: #fff;

  h1 {
    font-size: 1.75rem;
    font-weight: 400;
  }

  .active {
    font-weight: bold;
  }
`;

const slideIn = keyframes`
  from {

  }
  to {
    transform: translateX(0);
  }
`;

export const List = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  font-size: 1rem;

  ul {
    display: flex;
    margin-right: 50px;

    li {
      list-style: none;
      transform: translateX(100rem);
      animation: ${slideIn} 0.5s forwards;

      a {
        padding: 1rem 0;
        margin: 0 3rem;
        position: relative;
        letter-spacing: 2px;
        color: #fff;
        text-decoration: none;
      }
    }

    li:nth-child(1) {
      animation-delay: 0.1s;
    }

    li:nth-child(2) {
      animation-delay: 0.2s;
    }

    li:nth-child(3) {
      animation-delay: 0.3s;
    }

    li:nth-child(4) {
      animation-delay: 0.4s;
    }

    li:nth-child(5) {
      animation-delay: 0.5s;
    }

    a:last-child {
      margin-right: 0;
    }

    a::before,
    a::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: #00e5ff;
      left: 0;
      top: 40px;
      transform: scaleX(0);
      transition: all 0.5s;
    }

    a::before {
      top: 10px;
      transform-origin: left;
    }

    a::after {
      bottom: 0;
      transform-origin: right;
    }

    a:hover::before,
    a:hover::after {
      transform: scaleX(1);
    }
  }
`;

export const Hamburger = styled.div`
  position: fixed;
  top: 2.5rem;
  right: 2.5rem;
  color: #fff;
  font-size: 3rem;
  cursor: pointer;
  z-index: 1000;
  display: none;

  @media screen and (max-width: 700px) {
    display: block;
  }
`;

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.95);
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  transition: opacity 650ms;
  transform: scale(0);
  opacity: 0;
  display: none;
`;
