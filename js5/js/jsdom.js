function domTree() {

    var doc = document.body;

    var parent = document.getElementById('id');
    var elem = document.createElement('p');

    var wrp = document.createElement("div");

    var numbers = document.createElement("p");

    var buttons = document.createElement("div");

    var btn1 = document.createElement("button");
    var btn2 = document.createElement("button");
    var btn3 = document.createElement("button");
    var results = document.createElement("p");

    wrp.setAttribute("class", "wrapper row");

    numbers.setAttribute("class", "numbers text-center h1");

    buttons.setAttribute("class", "text-center");

    btn1.setAttribute("class", "Start btn btn-success");
    btn2.setAttribute("class", "Split btn btn-success");
    btn3.setAttribute("class", "Reset btn btn-success");

    results.setAttribute("class", "results text-center h3");

    var numbersText = document.createTextNode(dom.numbers);

    var btn1Text = document.createTextNode(dom.button1);
    var btn2Text = document.createTextNode(dom.button2);
    var btn3Text = document.createTextNode(dom.button3);
    var resultsText = document.createTextNode(dom.results);

    wrp.appendChild(numbers);
    wrp.appendChild(buttons);
    buttons.appendChild(btn1);
    buttons.appendChild(btn2);
    buttons.appendChild(btn3);
    wrp.appendChild(results);

    numbers.appendChild(numbersText);
    btn1.appendChild(btn1Text);
    btn2.appendChild(btn2Text);
    btn3.appendChild(btn3Text);

    doc.appendChild(wrp);

    // timer

    var btn1 = document.querySelector('.Start');
    var btn2 = document.querySelector('.Split');
    var btn3 = document.querySelector('.Reset');
    var num = document.querySelector('.numbers');

    var results = document.querySelector('.results');

    btn1.addEventListener('click', startTimer);
    btn2.addEventListener('click', split);
    btn3.addEventListener('click', reset);

    var flag = true;

    function startTimer() {
        if (flag === true) {
            // 1-я функция
            flag = false;
            start();
        } else {
            // 2-я функция
            flag = true;
            pause();
        }
    }

    var a;
    var time = num.innerHTML;
    var arr = time.split(":");
    var hours = arr[0];
    var minutes = arr[1];
    var seconds = arr[2];
    miliseconds = 0;

    function start() {

        btn1.innerHTML = 'Stop';

        miliseconds += 5;

        if (miliseconds >= 1000) {
            miliseconds = 0;
            seconds++;
            if (seconds < 10) seconds = "0" + seconds;
            if (seconds >= 60) {
                seconds = 0 + '0';
                minutes++;
                if (minutes < 10) minutes = "0" + minutes;
                if (minutes >= 60) {
                    minutes = 0 + '0';
                    hours++;
                    if (hours < 10) h = "0" + hours;
                }
            }
        }

        num.innerHTML = hours + ":" + minutes + ":" + seconds + ":" + miliseconds;
        a = setTimeout(start, 1);
    }

    function pause() {
        btn1.innerHTML = 'Continue';
        clearTimeout(a);
        results.innerHTML += '\n' + 'Stop ' + num.innerHTML;
    }

    function split() {
        results.innerHTML += '\n' + 'Split ' + num.innerHTML;
    }

    function reset() {
        btn1.innerHTML = 'Start';
        num.innerHTML = "00:00:00";
        seconds = 0 + '0';
        minutes = 0 + '0';
        hours = 0 + '0';
        miliseconds = '';
        clearTimeout(a);
        results.innerHTML = '';
    }



}

domTree();
