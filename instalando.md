O jest é um framework de testes

Vamos começar o projeto npm init -y

Instalamdo a versão expecifica do jest - jest@28.1.0
npm install --save-exact jest@28.1.0 --save-dev

Adicionando o jest no script ("test": "jest") do package.json
"scripts": {
    "test": "jest"
}
O Jest deve ser acompanhado por uma flag, que sinaliza que o projeto utiliza uma funcionalidade experimental para trabalhar com a nova importação de módulos. Uma flag é uma forma usada comumente para descrever parâmetros passados na chamada de um programa.

A flag que vamos utilizar é a --experimental-vm-modules

O comando completo para executar o Jest fica assim: "test": "node --experimental-vm-modules node_modules/jest/bin/jest.js",

Para simplificar o uso, você pode criar uma propriedade no scripts no arquivo package.json e colocar o seguinte:
"scripts": {
    "test": "node --experimental-vm-modules node_modules/jest/bin/jest.js",

    e opcional adicionar um :watch ou :coverage no final.

    "test:watch": "node --experimental-vm-modules node_modules/jest/bin/jest.js --detectOpenHandles --watch",
    "test:coverage": "node --experimental-vm-modules node_modules/jest/bin/jest.js --detectOpenHandles --coverage"
},

E no final do arquivo package.json vamos criar um novo campo type para poder utilizar os modulos do ES6 na importação e no desenvolviento do projeto

"type": "module"

Para executar os comandos de teste basta rodar:
npm run test