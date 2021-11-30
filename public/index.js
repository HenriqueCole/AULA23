let inputDeProcuraDeNomes = document.createElement('input');
inputDeProcuraDeNomes.id = 'myInput';
document.body.appendChild(inputDeProcuraDeNomes);

const listUser = [
    { name: 'Bruno Henrique Verbinnen de Carvalho', userName: 'brunohvc' },
    { name: 'Vytor Augusto Rosa', userName: 'K43RU' },
    { name: 'João Henrique Meirles da Silva', userName: 'nihilth' },
    { name: 'Otavio Augusto dos Santos', userName: 'SantOtavio' },
    { name: 'Camilly de Souza Pessotti', userName: 'camillyPessotti' },
    { name: 'Thiago Marins Braga', userName: 'ThiagoBrag' },
    { name: 'Ester Girelli', userName: 'Esterzinha12' },
    { name: 'Gustavo Rebelatto Zapella', userName: 'rebelattogustavo' },
    { name: 'Henrique Cole Fernandes', userName: 'HenriqueCole' },
    { name: 'Kenzo Hideaky Ferreira Sato', userName: 'Kenzohfs' },
    { name: 'Vinícius Bonatti Benner', userName: 'viniciusz1' },
    { name: 'Leonardo Heitor Poglia', userName: 'leopoglia' },
    { name: 'Felipe Mielke Vieira', userName: 'FelipeMielkeVieira' },
    { name: 'Eduarda Bolgenhagen De Campos', userName: 'eduardabolgenhagen' },
    { name: 'Matheus Franzener Hohmann', userName: 'MatheusFranzener' },
    { name: 'Leonardo Giuseppe de Souza Rafaelli', userName: 'LeonardoRafaelli' },
    { name: 'Diego Planinscheck', userName: 'frst157' },
    { name: 'Camilly Vitoria da Rocha Goltz', userName: 'VitoriaCamilly' },
    { name: 'Bruna Alves Mafra', userName: 'BMafra' },
    { name: 'Otavio Matheus Neves', userName: 'otavionvs' },
]

function showPersonTable() {
    const actualTable = document.querySelector('table');
    if (actualTable) {
        actualTable.remove();
    }

    const table = document.createElement('table');
    const row = document.createElement('tr');
    const columnName = document.createElement('th');
    const columnUsername = document.createElement('th');
    const columnBotao = document.createElement('th');
    columnBotao.innerText = 'botao'
    table.id = 'myTable';

    columnName.innerText = 'Name';
    columnUsername.innerText = 'Username';


    row.appendChild(columnName);
    row.appendChild(columnUsername);
    table.appendChild(row);

    listUser.forEach(function (element) {
        console.log('element:', element);
        const rowTable = getPersonTableRow(
            element.name,
            element.userName)

        table.appendChild(rowTable);
    })

    document.body.appendChild(table);

    inputDeProcuraDeNomes.onkeyup = myFunction;
    function myFunction() {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
      
      
        for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[0];
          if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }
        }
      }
}

function getPersonTableRow(name, userName) {
    const row = document.createElement('tr');
    const columnName = document.createElement('td');
    const columnUsername = document.createElement('td');
    const columnBotao = document.createElement('td');
    let botao = document.createElement('button');
    botao.onclick = clickButton;

    function clickButton() {
        let nomeEscolhido = userName;
        location.href = "./userPages.html?" + nomeEscolhido;
    }

    columnName.innerText = name;
    columnUsername.innerText = userName;
    columnBotao.appendChild(botao);
    botao.innerText = 'See Data';

    row.appendChild(columnName);
    row.appendChild(columnUsername);
    row.appendChild(columnBotao);
    return row;
}
showPersonTable();




let botaoCadastro = document.createElement('button');
botaoCadastro.className = 'cadastroBotao';
document.body.appendChild(botaoCadastro);
botaoCadastro.onclick = clickButtonRegisteryPerson;
botaoCadastro.innerText = "Cadastrar Pessoa";

function clickButtonRegisteryPerson() {
    const modal = createModal();
    const content = getContentRegesteryPersonModal(modal.removeModal);

    modal.insertHeader(content.header);
    modal.insertMain(content.main);
    modal.insertFooter(content.footer);
}

function createModal() {
    let background = document.createElement('div');
    background.id = "background-modal";
    let modal = document.createElement('div');
    modal.id = "modal";
    background.appendChild(modal);
    document.body.appendChild(background);

    let header = document.createElement('div');
    let main = document.createElement('div');
    let footer = document.createElement('div');

    header.id = 'modal-header';
    main.id = 'modal-main';
    footer.id = 'modal-footer';

    modal.appendChild(header);
    modal.appendChild(main);
    modal.appendChild(footer);

    function removeModal() {
        background.remove();
    }

    function insertHeader(html) {
        header.appendChild(html);
    }

    function insertMain(html) {
        main.appendChild(html);
    }

    function insertFooter(html) {
        footer.appendChild(html);
    }

    let retorno = {
        background: background,
        modal: modal,
        removeModal: removeModal,
        insertHeader: insertHeader,
        insertMain: insertMain,
        insertFooter: insertFooter,
    }

    return retorno;
}

function getContentRegesteryPersonModal(removeModal) {
    const header = document.createElement('div');
    header.id = 'person-header';
    const title = document.createElement('h1');
    title.innerText = 'Cadastro Pessoa';
    header.appendChild(title);

    const main = document.createElement('div');
    main.id = 'person-main';

    const inputNome = document.createElement('input');
    inputNome.type = 'text';
    inputNome.placeholder = 'Name';
    main.appendChild(inputNome);

    const inputSobrenome = document.createElement('input');
    inputSobrenome.type = 'text';
    inputSobrenome.placeholder = 'Username';
    main.appendChild(inputSobrenome);

    const footer = document.createElement('div');
    footer.id = 'person-footer';
    const buttonRegistery = document.createElement('button');
    buttonRegistery.className = 'registrarPessoa';
    buttonRegistery.innerText = 'Registrar';
    function registery() {
        const name = inputNome.value;
        const userName = inputSobrenome.value;

        if (!name || name == '') {
            return;
        }
        if (!userName || userName == '') {
            return;
        }
        registeryPerson(name, userName);
        removeModal();
    }
    buttonRegistery.onclick = registery;

    const buttonCancel = document.createElement('button');
    buttonCancel.className = 'cancelar';
    buttonCancel.innerText = 'Cancelar';
    buttonCancel.onclick = removeModal;

    footer.appendChild(buttonRegistery);
    footer.appendChild(buttonCancel);

    return {
        header: header,
        main: main,
        footer: footer,
    }
}

function registeryPerson(name, userName) {
    let person = {
        name: name,
        userName: userName,
    }

    listUser.push(person);
    showPersonTable();
}

var listaAgora = listUser

function showPersonTable2() {
    const actualTable = document.querySelector('table');
    if (actualTable) {
        actualTable.remove();
    }

    const table = document.createElement('table');
    const row = document.createElement('tr');
    const columnName = document.createElement('th');
    const columnUsername = document.createElement('th');
    const columnBotao = document.createElement('td');


    columnName.innerText = 'Name';
    columnUsername.innerText = 'Username';


    row.appendChild(columnName);
    row.appendChild(columnUsername);
    table.appendChild(row);

    listaAgora.forEach(function (element) {
        console.log('element:', element);
        const rowTable = getPersonTableRow(
            element.name,
            element.userName)

        table.appendChild(rowTable);
    })

    document.body.appendChild(table);
}