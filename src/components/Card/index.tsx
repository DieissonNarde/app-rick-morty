import { useFavorites } from "../../hooks/useFavorites";
import { CardContainer, CardContent, GridDiv, ImgDiv } from "./styles";

type Characters= {
  characters: Array<Character> | undefined;
}

type Character = {
  id: number;
  image: string;
  name: string;
  species: string;
  type: string;
}

export function Card({ characters }: Characters): JSX.Element {
  const { addCharacter } = useFavorites();

  function handleAddCharacter(character: Character) {
    addCharacter(character);
  }
  
  return (
    <GridDiv>
    {
      characters !== undefined && (
        characters.map(character => (
        <CardContainer key={character.id}>
          <ImgDiv>
            <img src={character.image} alt={character.name} />
          </ImgDiv>
          <CardContent>
            <div>
              <h3>{character.name}</h3>
            </div>
            <div>
              <p>{character.species}</p>
              <p>{character.type}</p>
            </div>
          </CardContent>
        </CardContainer>
        )
      
      ))
    }
    </GridDiv>
  );
}