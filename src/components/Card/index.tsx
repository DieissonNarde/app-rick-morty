import { CardContainer, CardContent, ImgDiv } from "./styles";


export function Card(): JSX.Element {
  return (
    <CardContainer>
      <ImgDiv>
        <img src="{imgUrl}" alt="{title} "/>
      </ImgDiv>
      <CardContent>
        <div>
          <h3>Morty</h3>
        </div>
        <div>
          <p>Rkfjdljasjfjaslj</p>
        </div>
      </CardContent>
    </CardContainer>
  );
}