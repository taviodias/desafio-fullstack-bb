# Desafio Fullstack BB

## Descrição

Desafio fullstack para SuperADM do BB realizado utilizando:
- React + Vite
- Express + inMemoryBD

#### Backend

Se conecta a [SWAPI](https://swapi.dev) para busca dos personagens da saga Star Wars.

#### Frontend

Trás a lista de personagens do backend com opções de:
- Busca
- Adicionar Favorito
- Remover Favorito
- Mostrar Favoritos

## Configuração

Clone este repósitório em seguida execute ```npm install``` e após execute ```npm start```.

Automaticamente vão ser instaladas as dependências do front e back e rodar ambos.

## Utilização

Após o comando de start acesse [localhost](http://localhost:5173) para acessar o front.

Em cada card de personagem terá o botão +/- Favorito, para adicionar aquele personagem a lista de favoritos. Personagens na lista de favoritos aparecem com uma estrela no canto superior esquerdo.

A barra de busca irá buscar os personagens por nome. Ela é desativada ao listar os favoritos.

Botão Mostrar favoritos irá renderizar apenas os personagens favoritos e mudará seu texto para "Mostrar todos" para voltar a exibição completa de todos personagens. Ao clicar no botão Mostrar Favoritos a barra de busca será limpa automaticamente.