let password = 'пароль';
let password1 = prompt('Ведите пароль');
if (password1 === 'пароль') {
 console.log ('Пароль введен верно');   
} else 
{
    console.log ('Пароль введен неверно');
}
let c = Number(prompt('Ведите число'));
(c >= 0 && c <= 10)?console.log('Верно'): console.log('Неверно');

let d, e =Number(prompt('Ведите переменную'));
if(d > 100 || e > 100) {
    console.log('Верно')
} else{
    console.log('Неверно')
}

let a = 2;
let b = 3;
alert(a + b);

let monthNumber = String(prompt('Ведите число месяца'));
switch (monthNumber) {
    case '1':
        console.log('Зима')
        break;
            case '2':
                console.log('Зима')
                break;
                    case '3':
                        console.log('Весна')
                        break;
                        case '4':
                        console.log('Весна')
                        break;
                        case '5':
                        console.log('Весна')
                        break;
                        case '6':
                        console.log('Лето')
                        break;
                        case '7':
                        console.log('Лето')
                        break;
                        case '8':
                        console.log('Лето')
                        break;
                        case '9':
                        console.log('Осень')
                        break;
                        case '10':
                        console.log('Осень')
                        break;
                        case '11':
                        console.log('Осень')
                        break;
                        case '12':
                        console.log('Зима')
                        break;

    default:
        console.log('Ведено неверное значение')

        break;
}