import { useContext } from 'react';
import { FavoritesContext } from "../contexts/FavoritesContext";


export function useFavorites() {
  const value = useContext(FavoritesContext);

  return value;
}