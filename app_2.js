//Один доллар стоит 27 гривен. Вывести данные с расчетом стоимости 10, 20, 30... 100 долларов

document.write("<br>"+"Task 2: ");

for(let i = 10; i <= 100; i = i+10){
    document.write("<br>" + i + " доларів = " + i*27 + " гривень"); 
}