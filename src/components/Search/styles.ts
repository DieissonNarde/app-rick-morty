import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > input {
    margin: 38px 0;
    width: 45vw;
    height: 48px;
    font-size: 20px;
    padding-left: 10px;
    border: 1px solid #f2ec25;
    border-radius: 8px;

    transition: filter 0.2s;

    transition: ease-in;

    &:hover {
      filter: brightness(0.9);
      border: 2px solid #f2ec25;
    }

    &:focus {
      border: 3px solid #3cb54a;
    }
  }

  > p {
    margin: 10px;
    font-size: 18px;
  }
`;

