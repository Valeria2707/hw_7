//Дано целое число. Выяснить, является ли оно простым (простым называется число, большее 1, не имеющих других делителей кроме 1 и самого себя).

document.write("<br>"+"Task 4: ");

/*let num_4 = prompt("Введіть ціле число для завдання 4");
let k = Math.sqrt(num_4);
if(num_4 > 1){
for(let i = 2; i < k; i++ ){
    if (num_4 % i === 0 ){
        document.write("Число не є простим");
        continue;
    }
}
}
else{
    document.write("Число не підходить");
}*/

for(let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
      continue;
    }
    if (i === 7) {
      break;
    }
    console.log(i);
   }
   



