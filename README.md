 https://mlemesluisa.github.io/tecshop-page/


<h3>Dependencias para o projeto: </h3>

Instale o Nodejs direto do site<br>
Instale o Mongodb direito do site<br>
Instale o npm direto do site <br>
<br>
Instale o github para desktop direto do site<br>
<br>
Vá a página do projeto<br>
Escolha a opção "Abrir no Desktop"<br>
No GitHub Desktop escolha "Clonar" <br>
<br>
Abra o projeto com o VS Code a partir do próprio GitHub Desktop<br>
<br>
Abra um terminal de linha de comando<br>
Navegue até a pasta em que você salvou o projeto clonado (ex.: cd documents => cd github => cd projetoclonado)<br>
<br>
Digite: npm install (isso vai instalar todas as dependências descritas no arquivo 'package.json' de seu projeto)<br>
<br>
<h3>Para rodar o projeto: </h3><br>
<br>
Abra um terminal exclusivo<br>
Digite: mongod<br>
Deixe rodando <br>
<br>
No Terminal de Trabalho<br>
Digite: node app.js<br>
Se não apresentar erros, seu aplicativo estará em execução na página da web: localhost:8083 <br>
A porta 8083 pode ser conferida ou alterada no final do arquivo app.js do seu projeto<br>
<br>
<h3>Para ver o banco de dados (opcional): </h3><br>
Abra um novo terminal<br>
Digite: mongo <br>
Digite: show databases<br>
Digite: use nomedadatabase<br>
Digite: show collections<br>
Digite: db.nomedadatabase.find()<br>
Digite: db.nomedadatabase.find().toArray()<br>
Use cls para limpar o console e up arrow para reutilizar comandos já digitados <br>
Use db.nomedadatabase.drop() para deletar as databases<br>
<br>
Use ctrl + c no terminal para parar a execução do node ou do mongodb <br>
<br>