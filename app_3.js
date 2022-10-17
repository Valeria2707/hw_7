//Дано целое число. Вывести все целые числа от 1 до 100, квадрат которых не превышает числа N

document.write("<br>"+"Task 3: ");

let number = prompt("Введіть ціле число для завдання 3");

for(let i = 1; i<101; i++){
    if( i*i <= number){
        document.write(i + " ");
    }
    continue;
}