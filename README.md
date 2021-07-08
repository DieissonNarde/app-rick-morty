<h1 align="center">
  <img src="/src/assets/images/wubba-lubba.png" alt="Rick and Morty" width="200">
</h1>

<p align="center">
  Aplicação de consulta, visualização e cadastro de personagens favoritos do seriado Rick & Morty.
</p>

<br>

[//]: # (Add your gifs/images here:)
<p align="center">
  <img src="/src/assets/gifs/rick-morty.gif" width="620">
</p>


## API
Na aplicação foi utilizada a API pública https://rickandmortyapi.com/documentation/#introduction para o consumo das requisições dos personagens


## REQUISITOS
Deve-se criar uma aplicação React com Typescript de uma única página onde possamos:
* Buscar um personagem pelo o nome;
* Visualizar o feedback de loading enquanto a API não responde;
* Exibir mensagem de erro caso o personagem não exista;
* Exibir informações mínimas sobre o(s) personagem(ns) caso ele(s) exista(m);
* Registrar o personagem na lista de favoritos utilizando alguma biblioteca de controle de estado global ou a Context API nativa do React;
* Visualizar a lista de personagens favoritos;
* Excluir personagem da lista;


## HISTÓRIAS DE USUÁRIO
1. Buscar personagem.
2. Ao pesquisar um personagem, gostaria de ver nome, genero e sua foto(se existir) antes de decidir favoritá-lo.
3. Ao pesquisar um personagem, gostaria de salvá-lo para que fique listado nos meus favoritos.
4. Ao pesquisar um um personagem que não existe, gostaria de ser avisado que ele não existe.


## :rocket: TECNOLOGIAS
Esse projeto foi desenvolvido com as seguintes tecnologias:
- **React JS** 
- **Typescript** 
- **Styled Components** 
- **Axios** 

## 🤔 Como executar o projeto
```bash
# Clone este repositório
$ git clone https://github.com/DieissonNarde/api-rick-morty.git

# Acesse a pasta do projeto no seu terminal
$ cd api-rick-morty

# Instale as dependências
$ yarn install

# Execute a aplicação 
$ yarn start
```

---
<p align="center">Feito com :green_heart: by Dieisson Narde</p>