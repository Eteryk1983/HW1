alert ('Привет1');
alert ('Привет1');




let a = 0;
do {
console.log(a);
a++;
}
while (a < 6);


let b = 7;
do {
console.log(b);
b++;
}
while (b < 23);

let obj = {
    'Коля': '200',
    'Вася': "300",
    'Петя': "400"
};
for (let salary in obj ) {
console.log(`${salary} - зарплата ${obj[salary]} долларов`);

    }

    let nunber = {
        '3': '1 пятница',
        '10': '2 пятница',
        '17': '3 пятница',
        '24': '4 пятница',
        '31': '5 пятница'

    };
    for (let day in nunber ) {
        console.log(`Сегодня пятница ${day}-е число необходимо подготовить отчет ${nunber[day]}`);
        
            }





    
