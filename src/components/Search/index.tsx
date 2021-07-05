import { useState } from "react";
import { SearchContainer } from "./styles";


export function Search(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <SearchContainer>
      <input
        type="text"
        placeholder="Pesquise seu personagem..."
        onChange={(e) => {setSearchTerm(e.target.value)}}
      />
      {/* {JSONDATA.filter((val) => {
        if (searchTerm == "") {
          return val
        } else if (val.first.name.toLowerCase())
      }).map((val, key) => {
        return (
          <div>
            <p>{val.first_name}</p>
          </div>
        );
      })} */}
    </SearchContainer>
  );
}