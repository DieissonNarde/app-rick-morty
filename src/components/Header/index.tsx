import { HeaderTag, HeaderContainer, ImgDiv } from './styles';

import heartImg from '../../assets/images/heart.svg';
import rickAndMortyImg from '../../assets/images/rick-morty.png';


export function Header(): JSX.Element {
  return (
    <HeaderTag>
      <HeaderContainer>
        <h1>RICK &amp; MORTY</h1>
        <button>
          <img src={heartImg} alt="Ícone de favoritos" />
          FAVORITOS
        </button>
      </HeaderContainer>
      <ImgDiv>
        <img src={rickAndMortyImg} alt="Imagem de Rick and Morty" />
      </ImgDiv>
    </HeaderTag>
    
  );
}