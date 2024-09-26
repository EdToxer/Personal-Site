var Doom = document.getElementById("dr_doom")
var Street = document.getElementById("street")
var Shoot = document.getElementById("shooting_range")
var button1 = document.getElementById("go1")
var button2 = document.getElementById("go2")
var button3 = document.getElementById("go3")

function show_doom() {
    if (Doom.style.visibility == "visible") {
        Doom.style.visibility = "hidden"
        button1.innerHTML = "Показать"
    } else if (Doom.style.visibility == "hidden") {
        Doom.style.visibility = "visible"
        button1.innerHTML = "Скрыть"
    }
}
function show_street() {
    if (Street.style.visibility == "visible") {
        Street.style.visibility = "hidden"
        button2.innerHTML = "Показать"
    } else if (Street.style.visibility == "hidden") {
        Street.style.visibility = "visible"
        button2.innerHTML = "Скрыть"
    }
}
function show_shooting_range() {
    if (Shoot.style.visibility == "visible") {
        Shoot.style.visibility = "hidden"
        button3.innerHTML = "Показать"
    } else if (Shoot.style.visibility == "hidden") {
        Shoot.style.visibility = "visible"
        button3.innerHTML = "Скрыть"
    }
}
function count_cat_years() {
    let cat_years = parseInt(document.getElementById("cat_years").value);
    if (cat_years == 1) {
        document.getElementById("result").innerHTML = 15;
    } else if (cat_years == 0) {
        document.getElementById("result").innerHTML = 0;
    } else if (cat_years == 2) {
        document.getElementById("result").innerHTML = 25;
    } else {
        document.getElementById("result").innerHTML = (cat_years - 2) * 4 + 25;
    }

}
// const getColor = async (number) => {
//     try {
//         const response = await fetch(`https://api.color.pizza/v1/${number}`);
//         const data = await response.json();
//         return data.colors[0].hex;
//     } catch (error) {
//         console.error('Ошибка получения цвета:', error);
//         return null;
//     }
// };

// document.getElementById('get-color-button').addEventListener('click', async () => {
//     const number = document.getElementById('number-input').value;
//     const color = await getColor(number);
//     if (color) {
//         document.getElementById('color-display').style.backgroundColor = color;
//     } else {
//         document.getElementById('color-display').innerHTML = 'Ошибка получения цвета';
//     }
// });