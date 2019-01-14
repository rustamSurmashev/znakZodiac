
export  function calcZodiac(month, day) {

    let result = 0;
    if (month === '1') {if (day <=19) {result = 'Козерог';} else {result = 'Водолей';}}
    else if (month === '2') {if (day <=18) {result = 'Водолей';} else {result = 'Рыбы';}}
    else if (month === '3') {if (day <=20) {result = 'Рыбы';} else {result = 'Овен';}}
    else if (month === '4') {if (day <=19) {result = 'Овен';} else {result = 'Телец';}}
    else if (month === '5') {if (day <=20) {result = 'Телец';} else {result = 'Близнецы';}}
    else if (month === '6') {if (day <=20) {result = 'Близнецы';} else {result = 'Рак';}}
    else if (month === '7') {if (day <=22) {result = 'Рак';} else {result = 'Лев';}}
    else if (month === '8') {if (day <=22) {result = 'Лев';} else {result = 'Дева';}}
    else if (month === '9') {if (day <=22) {result = 'Дева';} else {result = 'Весы';}}
    else if (month === '10') {if (day <=22) {result = 'Весы';} else {result = 'Скорпион';}}
    else if (month === '11') {if (day <=21) {result = 'Скорпион';} else {result = 'Стрелец';}}
    else if (month === '12') {if (day <=21) {result = 'Стрелец';} else {result = 'Козерог';}}
    return result;
}

