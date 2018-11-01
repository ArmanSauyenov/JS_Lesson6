//Практика:
//1. Создать форму с произвольными элементами input(text), input(checkbox),
//    input(radio), input(hidden), textarea, select.Заполнить их значения произвольно.
//По нажатию кнопки, сделать вывод списка элементов с их типом и значением.

//2. После загрузки документа(DOMContentLoaded), сделать дублирование формы
//созданной выше, дать ей новое имя.Так сделать 3 формы на одной странице с разными именами.
//Событие кнопки, выводящей список элементов, должно выводить список только текущей формы,
//    внутри которой она находится.Обработчик события должен быть один на все три формы.

//3. Создать форму с несколькими полями ввода input(text) и несколькими textarea.
//У каждого поля ввода должно быть уникальное имя.
//Создать div на странице.В див выводить лог операций по
//копированию, вставке и вырезанию текста из input и textarea
//в виде:
//input[inputname], copy: <text>
//    textarea[inputname], paste: <text>

//        Где <text> это текст, который вырезали (скопировали/вставили)


// 1) ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
window.addEventListener('DOMContentLoaded', function () {
    for (var e in document.forms) {
        document.forms[e].elements['buttonw'].addEventListener('click', func);
        console.log(document.forms[e].elements);
    }
})



var func = function (e) {
    e.target.form;
    var newEl = document.querySelector('#DIV');
    for (var i in e.target.form.elements) {
        var newElement = document.createElement('div');
        newElement.innerHTML = e.target.form.elements[i].tagName + e.target.form.elements[i].type + e.target.form.elements[i].value;
        newEl.appendChild(newElement);
    }
    e.preventDefault();
}

// 2) ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var copyForm = document.querySelector('#Form1').cloneNode(true);
copyForm.id = 'Form2';

for (var i in copyForm.elements) {
    copyForm.elements[i].value = copyForm.elements[i].value + '2';
}
document.body.appendChild(copyForm);

var copyForm1 = copyForm.cloneNode(true);
copyForm1.id = 'Form3';


for (var i in copyForm1.elements) {
    copyForm1.elements[i].value = copyForm1.elements[i].value + '3';
}

document.body.appendChild(copyForm1);