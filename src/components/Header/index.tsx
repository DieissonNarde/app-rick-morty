import { ButtonHTMLAttributes } from 'react';

import { HeaderTag, HeaderContainer, ImgDiv } from './styles';

import rickAndMortyImg from '../../assets/images/rick-morty.png';

type HeaderProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  imgButton: string;
  children: string;
};

export function Header({ imgButton, children }: HeaderProps): JSX.Element {
  return (
    <HeaderTag>
      <HeaderContainer>
        <h1>RICK &amp; MORTY</h1>
        <button>
          <img src={imgButton} alt="Ícone de favoritos" />
          {children}
        </button>
      </HeaderContainer>
      <ImgDiv>
        <img src={rickAndMortyImg} alt="Imagem de Rick and Morty" />
      </ImgDiv>
    </HeaderTag>
    
  );
}