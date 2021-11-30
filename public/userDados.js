let userName = document.location.search;
a = userName = userName.substr(1, userName.length);

function getUserGithub(a) {
    fetch('https://fake-github.herokuapp.com/api/search/' + userName)
        .then(function (resultado) {
            resultado.json().then(function (data) {
                console.log('User Data:', data);
                showUserGithub(data);
            });
        }).catch(function (erro) {
            console.log('erro:', erro);
        });
}

getUserGithub();

function showUserGithub(user) {
    if (!user) return;
    let divName = document.createElement('div');
    divName.innerText = 'Usuário: ' + user.login;

    let divUserAvatar = document.createElement('img')
    divUserAvatar.src = user.avatar_url;

    let divUser = document.createElement('div');
    divUser.innerText = 'Nome: ' + user.name;
    if (user.name == null){
        divUser.innerText = 'Nome: Não informado';
    }

    document.body.appendChild(divName);
    document.body.appendChild(divUser);
    document.body.appendChild(divUserAvatar);
}

function getUserReposGithub(a) {
    fetch('https://fake-github.herokuapp.com/api/search/' + userName + '/repos')
        .then(function (resultado) {
            resultado.json().then(function (dataRepositorio) {
                dataRepositorio.forEach(function (element) {

                    console.log('Repositories Data:', element.name);
                    const linha = document.createElement('div')
                    document.body.appendChild(linha);
                    linha.innerText = element.name + ': ';
                    const link = document.createElement('a')
                    link.href = element.html_url;
                    link.innerText = element.html_url
                    linha.appendChild(link);
                });
            });
        }).catch(function (erro) {
            console.log('erro:', erro);
        });
}
getUserReposGithub();