document.addEventListener('DOMContentLoaded', function() {
    let name = document.querySelector('#floatingTextarea');
    let login = document.querySelector('#floatingInput');
    let password = document.querySelector('#floatingPassword');
    let submit = document.querySelector('#submit');

    let users = {};

    function User(name, login, password) {
        this.name = name;
        this.login = login;
        this.password = password;
    }

    function createId(users) {
        return Object.keys(users).length;
    }

    submit.addEventListener('click', () => {
        const nameUser = name.value;
        const loginUser = login.value;
        const passUser = password.value;

        const user = new User(nameUser, loginUser, passUser);

        const userId = 'User' + createId(users);
        users[userId] = user;

        console.log(users);

        alert('Регистрация прошла успешно\nПользователь ' + nameUser);

        window.open("index-add.html");
        
    });
});