Front-end Pets


- Instalar dependências 

$ yarn install

- Executar localhost:3000

$ yarn start


Sobre o projeto

Front-end construído utilizando React JS. A aplicação possui uma única página, onde o usuário deverá inserir 3 informações, data do banho, quantidade de pets grandes e quantidade de pets pequenos. Ao clicar em calcular será enviada uma requisição para o back-end que retornará o petshop mais barato de acordo com os parâmetros inseridos, este retorno é exibido em formato de alerta para o usuário.

Campos:
Data Banho – Utilizado o componente “KeybordDatePicker” da lib material-ui, realizada parametrização através do estado para exibir a data atual e o usuário poderá utilizar de um calendário para selecionar a data desejada, esta data é armazenada no estado “selectedDate”.

Qtd. Pets Grandes – Utilizado o componente “TextField” da lib material-ui, realizada parametrização através do estado para exibir a quantidade 0 por padrão e o usuário poderá alterar os valores em números positivos inteiros, este número é armazenado no estado “qtdPetsGrandes”. Criada uma validação para entrada do usuário permitir apenas números positivos inteiros através da função “handlePetsGrandes”.

Qtd. Pets Pequenos – Utilizado o componente “TextField” da lib material-ui, realizada parametrização através do estado para exibir a quantidade 0 por padrão e o usuário poderá alterar os valores em números positivos inteiros, este número é armazenado no estado “qtdPetsPequenos”. Criada uma validação para entrada do usuário permitir apenas números positivos inteiros através da função “handlePetsPequenos”.


Botão:
Calcular – Utilizado o componente “Button” da lib material-ui, ao clicar no botão é enviada uma requisição do tipo post para o backend, através da função “handleSubmit” utilizando o axios. No corpo da requisição são enviados os parâmetros dos campos anteriores, data banho, qtd pets grandes e qtd pets pequenos. O backend retorna um objeto contendo os dados do petshop mais barato de acordo com os parâmetros recebidos, este objeto é armazenado no estado “petShopAlert”, em seguida o componente “Alert” é exibido demonstrando os dados do estado “petShopAlert”.

HTML e CSS:
Divs:
Container – Utilizado flex-box para posicionamento dos elementos filhos, flex-direction column para alinhamento dos elementos em coluna.

Logo-container – Utilizado flex-direction row, para que a img seja posicionada ao lado do h1.

Form-container – Utilizado flex direction column para alinhamento dos campos em coluna e justify-content space between, para um espaçamento igual entre os elementos.

