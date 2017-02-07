//Варіант1, для виконання потрібно боді присвоїти клас
// function add() {
// 	var element = document.createElement('div');
// 	element.classList.add('wraper');
// 	element.innerHTML = '<div class="container"><div class="row"><div class="col-md-12"><div class="form-box"><form action="#" ><h3>Тест по программированию</h3><section><p>1. Вопрос №1</p><input type="radio" id="answer_1_1" name="answer_1"/><label for="answer_1_1"><span></span>Вариант ответа №1</label><br><input type="radio" id="answer_1_2" name="answer_1"/><label for="answer_1_2"><span></span>Вариант ответа №2</label><br><input type="radio" id="answer_1_3" name="answer_1"/><label for="answer_1_3"><span></span>Вариант ответа №3</label></section><section><p>2. Вопрос №2</p><input type="radio" id="answer_2_1" name="answer_2"/><label for="answer_2_1"><span></span>Вариант ответа №1</label><br><input type="radio" id="answer_2_2" name="answer_2"/><label for="answer_2_2"><span></span>Вариант ответа №2</label><br><input type="radio" id="answer_2_3" name="answer_2"/><label for="answer_2_3"><span></span>Вариант ответа №3</label></section><section><p>3. Вопрос №3</p><input type="radio" id="answer_3_1" name="answer_3"/><label for="answer_3_1"><span></span>Вариант ответа №1</label><br><input type="radio" id="answer_3_2" name="answer_3"/><label for="answer_3_2"><span></span>Вариант ответа №2</label><br><input type="radio" id="answer_3_3" name="answer_3"/><label for="answer_3_3"><span></span>Вариант ответа №3</label></section><div class="btn-wrap"><button>Проверить мои результаты</button></div></form></div></div></div></div>';
// 	var myBody = document.querySelector('.body');
// 	myBody.appendChild(element);
// }
// add();

// Варіант 2:


var element = document.createElement('div');
element.classList.add('wrapper');
var wrapper = document.querySelector('.body');
wrapper.appendChild(element);


var wrapper__p = document.createElement('p');
wrapper__p.classList.add('wrapper__p');
var wrappp = document.querySelector('.wrapper');
wrappp.appendChild(wrapper__p);
wrapper__p.innerHTML = 'Тест по программированию';

var questions = document.createElement('form');
questions.classList.add('questions');
var questions_parent = document.querySelector('.wrapper');
questions_parent.appendChild(questions);
questions.setAttribute("action", "index.html");
questions.setAttribute("method", "POST");







// var testGenerator = {
//
//     i: 1,
//     i_question: 1,
//     limit_question: 4,
//     limit_answer: 4,
//
//     addWrapper: function () {
//         var element = document.createElement('div');
//         element.classList.add('wrapper');
//         document.body.appendChild(element);
//     },
//
//     addTopic: function () {
//         var element = document.createElement('h3');
//         element.classList.add('topic');
//         element.innerHTML = 'Тест по программированию';
//         var parent = document.querySelector('.wrapper');
//         parent.appendChild(element);
//     },
//
//     addForm: function () {
//         var element = document.createElement('form');
//         element.classList.add('q-form');
//         element.setAttribute("action", "");
//         element.setAttribute("method", "POST");
//         var parent = document.querySelector('.wrapper');
//         parent.appendChild(element);
//     },
//
//     addDivQuestion: function () {
//         var element = document.createElement('div');
//         element.classList.add('question' + this.i_question);
//         var parent = document.querySelector('.q-form');
//         parent.appendChild(element);
//     },
//
//     addQuestion: function () {
//         var element = document.createElement('h3');
//         element.classList.add('topic-question' + this.i_question);
//         element.innerHTML = this.i + '.' + ' Вопрос №' + this.i_question;
//         var parent = document.querySelector('.question' + this.i_question);
//         parent.appendChild(element);
//     },
//
//     addUlQuestion: function () {
//         var element = document.createElement('ul');
//         element.classList.add('ul-question' + this.i);
//         var parent = document.querySelector('.question' + this.i_question);
//         parent.appendChild(element);
//     },
//
//     addLiQuestion: function () {
//         for (k = 1; k < this.limit_answer; k++) {
//             var elementLi = document.createElement('li');
//             elementLi.classList.add('li-question' + this.i);
//             elementLi.id = 'li-id-' + this.i + k;
//             var parent = document.querySelector('.ul-question' + this.i_question);
//             parent.appendChild(elementLi);
//
//         }
//     },
//
//     addInputQuestion: function () {
//         for (k = 1; k < this.limit_answer; k++) {
//             var elementIn = document.createElement('input');
//             elementIn.setAttribute("type", "checkbox");
//             elementIn.setAttribute("name", "variant");
//             elementIn.id = 'input-id' + k;
//             elementIn.classList.add('my-checkbox');
//             var parent = document.getElementById('li-id-' + this.i + k);
//             parent.appendChild(elementIn);
//         }
//     },
//     addLabelQuestion: function () {
//         for (k = 1; k < this.limit_answer; k++) {
//             var elementLabel = document.createElement('label');
//             elementLabel.setAttribute('for', 'li-id-' + k);
//             elementLabel.classList.add('css-label');
//             elementLabel.innerHTML = '&nbsp' + 'Вариант ответа №' + k;
//             var parent = document.getElementById('li-id-' + this.i + k);
//             parent.appendChild(elementLabel);
//         }
//     },
//
//     preBuilder: function () {
//         this.addDivQuestion(), this.addQuestion(), this.addUlQuestion();
//     },
//
//     answer: function () {
//         this.addLiQuestion(), this.addInputQuestion(), this.addLabelQuestion();
//     },
//
//     result: function () {
//         var elementLabel = document.createElement('button');
//         elementLabel.classList.add('btn-lg');
//         elementLabel.setAttribute('type', 'submit');
//         elementLabel.innerHTML = 'Проверить мои результаты';
//         var parent = document.querySelector('.q-form');
//         parent.appendChild(elementLabel);
//     },
//
//     builder: function () {
//         this.addWrapper(), this.addTopic(), this.addForm()
//         for (var j = 1; j < this.limit_question; j++) {
//             this.preBuilder();
//             this.answer();
//             this.i++;
//             this.i_question++;
//         }
//         this.result();
//     }
// };
//
// testGenerator.builder();
