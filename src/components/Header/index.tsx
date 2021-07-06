import { ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

import { HeaderTag, HeaderContainer, ImgDiv } from './styles';
import rickAndMortyImg from '../../assets/images/rick-morty.png';


type HeaderProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  imgButton: string;
  toLink: string;
  children: string;
};

export function Header({ imgButton, toLink, children }: HeaderProps): JSX.Element {
  return (
    <HeaderTag>
      <HeaderContainer>
        <h1>RICK &amp; MORTY</h1>
        
        <Link to={toLink}>
          <button>
            <img src={imgButton} alt="Ícone do botão" />
            {children}
          </button>
        </Link>
      </HeaderContainer>
      <ImgDiv>
        <img src={rickAndMortyImg} alt="Imagem de Rick and Morty" />
      </ImgDiv>
    </HeaderTag>
    
  );
}