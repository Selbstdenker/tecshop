 https://mlemesluisa.github.io/tecshop-page/


<h3>Dependencias para o projeto: </h3>

Instale o Nodejs direto do site
Instale o Mongodb direito do site
Instale o npm direto do site 

Instale o github para desktop direto do site

Vá a página do projeto
Escolha a opção "Abrir no Desktop"
No GitHub Desktop escolha "Clonar" 

Abra o projeto com o VS Code a partir do próprio GitHub Desktop

Abra um terminal de linha de comando
Navegue até a pasta em que você salvou o projeto clonado (ex.: cd documents => cd github => cd projetoclonado)

Digite: npm install (isso vai instalar todas as dependências descritas no arquivo 'package.json' de seu projeto)

<h3>Para rodar o projeto: </h3>

Abra um terminal exclusivo
Digite: mongod
Deixe rodando 

No Terminal de Trabalho
Digite: node app.js
Se não apresentar erros, seu aplicativo estará em execução na página da web: localhost:8083 
A porta 8083 pode ser conferida ou alterada no final do arquivo app.js do seu projeto

<h3>Para ver o banco de dados (opcional): </h3>
Abra um novo terminal
Digite: mongo 
Digite: show databases
Digite: use nomedadatabase
Digite: show collections
Digite: db.nomedadatabase.find()
Digite: db.nomedadatabase.find().toArray()
Use cls para limpar o console e up arrow para reutilizar comandos já digitados 
Use db.nomedadatabase.drop() para deletar as databases

Use ctrl + c no terminal para parar a execução do node ou do mongodb 