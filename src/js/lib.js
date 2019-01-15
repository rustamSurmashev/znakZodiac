export  function calcZodiac(month, day) {

    if (month === '1') {if (day <=19) {return 'Козерог'} return 'Водолей';}
    if (month === '2') {if (day <=18) {return 'Водолей'} return 'Рыбы';}
    if (month === '3') {if (day <=20) {return 'Рыбы'} return 'Овен';}
    if (month === '4') {if (day <=19) {return 'Овен'} return 'Телец';}
    if (month === '5') {if (day <=20) {return 'Телец'} return 'Близнецы';}
    if (month === '6') {if (day <=20) {return 'Близнецы'} return 'Рак';}
    if (month === '7') {if (day <=22) {return 'Рак'} return 'Лев';}
    if (month === '8') {if (day <=22) {return 'Лев'} return 'Дева';}
    if (month === '9') {if (day <=22) {return 'Дева'} return 'Весы';}
    if (month === '10') {if (day <=22) {return 'Весы'} return 'Скорпион';}
    if (month === '11') {if (day <=21) {return 'Скорпион'} return 'Стрелец';}
    if (month === '12') {if (day <=21) {return 'Стрелец'} return 'Козерог';}
}