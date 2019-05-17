# React + Webpack + .NET CORE

É necessário ter o [.NET CORE](https://dotnet.microsoft.com/download) e [Node.js](https://nodejs.org/en/download/) instalados em sua máquina para o desenvolvimento nessa estrutura.

Para rodar o projeto entre em react-dotnet e rode os seguintes comandos através de um terminal:
```
$ dotnet build

$ dotnet run
```

O comando `dotnet run` levantará um servidor de desenvolvimento.

Para rodar as dependencias e tasks de front-end você precisará em outra aba do terminal rodar os comandos
```
$ npm install
```
 ou

```
$ yarn install
```

E para levantar o task runner/module bundle que fica escutando as alterações de front-end que automaticamente transpila os arquivos através do webpack rode o comando

```
$ npm run dev 
```
ou

```
$ yarn dev
```