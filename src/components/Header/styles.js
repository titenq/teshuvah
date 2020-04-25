import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  background: #0d47a1;
  color: #fff;
  padding: 0 30px;

  h1 {
    font-size: 1.75rem;
    font-weight: 400;
  }
`;

export const List = styled.ul`
  list-style: none;

  li {
    display: inline;
    padding: 0 20px;

    a {
      font-size: 1.125rem;
      color: #fff;
      text-decoration: none;
    }
  }
`;
