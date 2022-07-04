# Origem dos Nomes
## Proposta
Criar uma aplicação Reactjs onde o usuário ao digitar um nome pessoal qualquer em um input de texto, consiga o retorno formatado no frontend da maior probabilidade da origem do nome com o nome do país de origem.

Para isso, utilize estas duas fontes de dados:

https://api.nationalize.io

https://gist.github.com/almost/7748738#file-countries-json

## Informações do Desenvolvimento da Aplicação

## Editor de código utilizado
![image](https://user-images.githubusercontent.com/83181304/177071161-9de96e18-0a8e-4a7e-88a3-d4114836bc6a.png)

## Técnologias

![css](https://user-images.githubusercontent.com/83181304/177073431-9f952513-26f9-42d8-805f-a855bf7b053f.png)
![html](https://user-images.githubusercontent.com/83181304/177073441-48d11c30-9701-488f-958e-f95075e39923.png)
![js](https://user-images.githubusercontent.com/83181304/177073445-e130400a-bc5a-4423-b153-b139b8679434.png)
![react](https://user-images.githubusercontent.com/83181304/177073448-b50fa746-de2a-4f26-9a4f-4ca795563b65.png)

## Instalação
### Faça o download do projeto e abra a pasta no VsCode.
### Abra o Terminal e Digite...
### 1. npm install
### 2. npm install react-icons
Instala biblioteca de ícones do React.

## Execução do Projeto
### npm start
Executa aplicação em modo de desenvolvimento.
Após execução do comando acima, abra a aplicação em http://localhost:3000 para visualizá-la em seu navegador. 

## Funcionamento
### Ao iniciar a aplicação, digite um nome único na entrada de texto e depois clique em pesquisa.
![Captura de Tela 2022-07-04 às 00 16 31](https://user-images.githubusercontent.com/83181304/177075816-16daef3f-5984-4db0-8285-fd07a14ce054.png)

### Ao digitar um nome, você terá o retorno do nome junto aos nomes dos países com maiores probabilidades de onde surgiram.
![Captura de Tela 2022-07-04 às 00 21 18](https://user-images.githubusercontent.com/83181304/177076249-e8728423-de7a-4341-af05-c858bd25fac8.png)

### Caso o usuário digite um nome desconhecido, uma mensagem irá aparecer "Nome não encontrado!".
![Captura de Tela 2022-07-04 às 00 25 36](https://user-images.githubusercontent.com/83181304/177076600-b237f764-f713-4f85-a63f-a3b0fb4c4184.png)

## Como é feita essa busca pela origem do nome?
A aplicação utiliza a API [Nationalize](https://nationalize.io/ "Clique para saber mais") que "prevê" as probabilidades de origem de um nome e irá renderizar uma tabela com duas colunas: país e probabilidade. Por isso foi usado o arquivo countries.json com uma lista extensa de países. O arquivo pode ser encontrado dentro deste projeto ou então [aqui](https://gist.github.com/almost/7748738#file-countries-json). 

## Estrutura de pastas do Projeto
![Captura de Tela 2022-07-04 às 00 31 13](https://user-images.githubusercontent.com/83181304/177077102-8bb7baf8-bd13-4895-8bfc-6ce8f0833c43.png)

## src
Pasta principal do projeto

## App.js
Arquivo com a função App, responsável pela organização da ordem de exibição dos componentes na aplicação.
## index.js
Arquivo responsável por renderizar a função App, que contém todos os componentes da aplicação, no navegador.
## Paises.js
Arquivo responszeavel por renderizar uma tabela com as colunas país e probabilidade.
## style.css
Arquivo que contém estilizações dos componentes da aplicação.
