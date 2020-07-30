function human_choice(human) {
    let comp = pc_choice()
    if ((human === 0 && comp === 1) || (human === 1 && comp === 2) || (human === 2 && comp === 0)) {
        document.getElementById("result-h").src = 'img/choice-' + human + '.png';
        document.getElementById("result-c").src = 'img/choice-' + comp + '.png';
        document.getElementById("result-name").innerHTML = 'ПОБЕДА';
        document.getElementById("result-name").classList.add("result-title-victory");
        document.getElementById("result-name").classList.remove("result-title-draw");
        document.getElementById("result-name").classList.remove("result-title-defeat");


    } else if (comp === human) {
        document.getElementById("result-h").src = 'img/choice-' + human + '.png';
        document.getElementById("result-c").src = 'img/choice-' + comp + '.png';
        document.getElementById("result-name").innerHTML = 'НИЧЬЯ';
        document.getElementById("result-name").classList.add("result-title-draw");
        document.getElementById("result-name").classList.remove("result-title-victory");
        document.getElementById("result-name").classList.remove("result-title-defeat");


    } else {
        document.getElementById("result-h").src = 'img/choice-' + human + '.png';
        document.getElementById("result-c").src = 'img/choice-' + comp + '.png';
        document.getElementById("result-name").innerHTML = 'В ДРУГОЙ РАЗ';
        document.getElementById("result-name").classList.add("result-title-defeat");
        document.getElementById("result-name").classList.remove("result-title-draw");
        document.getElementById("result-name").classList.remove("result-title-victory");

    }
}

function pc_choice() {
    return Math.floor(Math.random() * 3) // [0 - 2]
}

function translate(ch) {
    return ch === 0 ? 'Камень' : (ch === 1 ? 'Ножницы' : 'Бумага')
}