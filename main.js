let date=new Date();
let dayOfWeekNumber=date.getDay();
let nameOfDay;
let quote;

switch(dayOfWeekNumber){
    case 0:
        nameOfDay='Sunday';
        quote ='Time to relax!'
        break
        case 1:
        nameOfDay='Monday';
        quote ='Its a fresh week!'
        break
        case 2:
        nameOfDay='Tuesday';
        quote ='Taco Day!'
        break
        case 3:
        nameOfDay='Wednesday';
        quote ='Two days to the weekend!'
        break
        case 4:
        nameOfDay='Thursday';
        quote ='The weekend is almost here!'
        break
        case 5:
        nameOfDay='Friday';
        quote ='Weekend is here!'
        break
        case 0:
        nameOfDay='Sunday';
        quote ='Time to party!'
        break
}
//display the day of the week

let weekdayDiv=document.getElementById('weekday');
weekdayDiv.innerHTML=`${nameOfDay}`

//display quote
let quoteDiv=document.getElementById('phrase');
quoteDiv.innerHTML=`${quote}`