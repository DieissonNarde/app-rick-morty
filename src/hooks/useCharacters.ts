import { useContext } from 'react';
import { CharactersContext } from "../contexts/CharactersContext";


export function useCharacters() {
  const value = useContext(CharactersContext);

  return value;
}