 https://mlemesluisa.github.io/tecshop-page/


<h3>Dependencias para o projeto: </h3>

    --> Instale o Nodejs direto do site
    --> Instale o Mongodb direito do site
    --> Instale o npm direto do site 
    --> Instale o github para desktop direto do site

<br>

    > Vá a página do projeto<br>
    > Escolha a opção "Abrir no Desktop"<br>
    > No GitHub Desktop escolha "Clonar" <br>

<br>

    --> Abra o projeto com o VS Code a partir do próprio GitHub Desktop
    --> Abra um terminal de linha de comando
    --> Navegue até a pasta em que você salvou o projeto clonado (ex.: >cd documents >cd github >cd projetoclonado)


    --> Digite: 
            npm install 
        
    (isso vai instalar todas as dependências descritas no arquivo 'package.json' de seu projeto)

<br>

<h3>Para rodar o projeto: </h3>

    --> Abra um terminal exclusivo
    --> Digite: 
            mongod
    --> Deixe rodando 

<br>

    --> No Terminal de Trabalho
    --> Digite: 
            node app.js
    --> Se não apresentar erros, seu aplicativo estará em execução na página da web: localhost:8083 
    --> A porta 8083 pode ser conferida ou alterada no final do arquivo app.js do seu projeto

<br>

<h3>Para ver o banco de dados (opcional): </h3>

    --> Abra um novo terminal
    --> Digite: 
            mongo 
    --> Digite: 
            show databases
    --> Digite: 
            use nomedadatabase
    --> Digite: 
            show collections
    --> Digite: 
            db.nomedadatabase.find()
    --> Digite: 
            db.nomedadatabase.find().toArray()
    --> Use cls para limpar o console e up arrow para reutilizar comandos já digitados 
    --> Use db.nomedadatabase.drop() para deletar as databases

<br>

    --> Use ctrl + c no terminal para parar a execução do node ou do mongodb 

<br>

<h3>DIRETÓRIOS</h3>

A pasta com os CSSs está dentro do diretório Publics. Favor colocar as imagens nesse mesmo diretório, sempre. 

O diretório Public não precisa ser citado como no endereço da rota, mas apenas a partir dele. 

Os partials (top, section, header, footer, etc) estão no diretório views e devem ficar dentro da pasta 'partials' e possuir 
a extensão .handlebars, de preferência já com o nome claro do que se trata. 

O corpo com as características gerais do site e estrutura HTML está dentro da pasta padrão layouts, em views. 