function numberLit(a, b) {
    if (a > b) {
        return b;
    } else {
        return a;
        
    }
    
}
 let a = 8;
 let b = 4;
 alert(b);

 function numberLit(c, d) {
    if (c > d) {
        return d;
    } else {
        return c;
        
    }
    
}
 let c = 6;
 let d = 6;
 alert(d);
  
 function even() {
    let askNumber = prompt(`Ведите число`);
    if (askNumber % 2 == 0) {
     alert(`Число четное`);  
    } else {
        alert(`Число не четное`)
        
    }
 }
 even();

 let y = Number(prompt("Введите число"));
 
 function calc(a) {
    return y**2

 }

console.log (`Квадрат числа равен ${calc(y)}`);

calc(y);


let x = Number(prompt("Введите число"));
 
 function calc(x) {
    return x**2

 }


calc(x);


let age = prompt("Сколько вам лет?");

let printMessege;

if (age <= 12) {
    printMessege = function () {
        alert("Привет, друг!");
if (age < 0) {
printMessege = function () {
    alert("Вы ввели неправильное значение");
}
}
    }
    
} else {
    age > 13;
    printMessege = function () {
        alert ("Добро пожаловать!");
        
    }
    
}

printMessege ();


 let t=prompt("Введите число");
 let r=prompt ("Введите второй число");
  function mult (t,r) {
    if (!isNaN(t) && !isNaN(r)) {
        console.log (t*r); 
    } else {
      console.log("Одно или оба значения не являются числом");  
    }
   
  }

  mult(t, r);

  

