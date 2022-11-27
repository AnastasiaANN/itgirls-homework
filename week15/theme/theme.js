function changeTheme(){
    let theme = document.getElementById("theme").value;
    switch(theme){
        case 'light': document.body.style.background = 'white';
        document.body.style.color = 'grey';
        break;
        case 'blue': document.body.style.background = 'blue';
        document.body.style.color = 'white';
        break;
        case 'red': document.body.style.background = 'red';
        document.body.style.color = 'white';
        break;
        case 'pink': document.body.style.background = 'pink';
        document.body.style.color = 'white';
        break;
        case 'yellow': document.body.style.background = 'yellow';
        document.body.style.color = 'white';
        break;
    }
}