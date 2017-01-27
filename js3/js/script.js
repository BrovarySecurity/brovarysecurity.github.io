function test() {
        var element = document.createElement('div');
        element.classList.add('wrapper');
        document.body.appendChild(element);
    }

test();



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
