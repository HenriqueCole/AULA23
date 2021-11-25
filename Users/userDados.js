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
    divName.innerText = user.login;
    
    let divUser = document.createElement('div');
    divUser.innerText = user.name;

    document.body.appendChild(divName);
    document.body.appendChild(divUser);
}

function getUserReposGithub(userName) {
    fetch('https://fake-github.herokuapp.com/api/search/' + userName + '/repos')
        .then(function (resultado) {
            resultado.json().then(function (data) {
                console.log('Repositories Data:', data);
            });
        }).catch(function (erro) {
            console.log('erro:', erro);
        });
}
getUserReposGithub();