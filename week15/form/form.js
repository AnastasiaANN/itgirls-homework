function check(){
    let name = document.getElementById("name");
    let surname = document.getElementById('surname');
    let login = document.getElementById('login');
    let password = document.getElementById('password');
    let country = document.getElementById('country');
    let phoneNumber = document.getElementById('phoneNumber');
    let counter = 0;

    document.getElementById('errerMessage').innerHTML = '';

    if(name.value == ''){
    document.getElementById('errerMessage')
    .innerHTML += 'Ваше имя не заполнено<br>';
    counter += 1;
    }

    if(surname.value == ''){
        document.getElementById('errerMessage')
        .innerHTML += "Ваша фамилия не заполнена<br>";
        counter += 1;
        }

    if(login.value == ''){
        document.getElementById('errerMessage')
        .innerHTML += 'Ваш логин не заполнен<br>';
        counter += 1;
        }
        else if(login.value.length >= 8){
            document.getElementById('errerMessage')
            .innerHTML += "Ваш логин слишком короткий<br>";
        }

    if(password.value == ''){
        document.getElementById('errerMessage')
        .innerHTML += 'Ваш пароль не заполнен<br>';
        counter += 1;
        }
        else if(password.value.length >= 6){
            document.getElementById('errerMessage')
            .innerHTML += "Ваш пароль слишком короткий<br>";
        }

    if(country.value == ''){
        document.getElementById('errerMessage')
        .innerHTML += 'Ваша страна не выбрана<br>';
        counter += 1;
        }

    if(phoneNumber.value == ''){
        document.getElementById('errerMessage')
        .innerHTML += 'Ваш номер не заполнен<br>';
        counter += 1;
        }

    if (counter == 0) {
        let name1 = name.value;
        alert(`Привет, ${name1}!`);
    }
}

let btn = document.querySelector(".btn");
btn.addEventListener("click", check);
