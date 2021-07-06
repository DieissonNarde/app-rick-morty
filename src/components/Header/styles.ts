import styled from 'styled-components';

export const HeaderTag = styled.header`
  padding: 25px 20px;
  height: 38vh;
  background: #00abc1;
`;

export const HeaderContainer = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > h1 {
    font-size: 3.6rem;
    color: #f2ec25;
    margin: 0;
  }

  > a {
    text-decoration: none;
  }

  > a button {
    height: 3.2rem;
    border-radius: 8px;
    font-size: 1.3rem;
    font-weight: 600;
    background: #3cb54a;
    color: #312E38;
    padding: 0 28px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    cursor: pointer;
    border: 0;

    transition: filter 0.2s;

    > img {
      width: 24px;
      margin-right: 12px;
    }

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const ImgDiv = styled.div`
  margin-top: -40px;

  > img {
    width: 300px;
    display: block;
    margin: 0 auto;
  }
`;