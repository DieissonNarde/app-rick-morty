import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > input {
    margin-top: 20px;
    width: 40vw;
    height: 48px;
    font-size: 20px;
    padding-left: 10px;
    border: 2px solid #f2ec25;
    border-radius: 8px;
  }

  > p {
    margin: 10px;
    font-size: 18px;
  }
`;

