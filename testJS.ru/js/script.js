var base = prompt('Vvedit 4islo', '');
var degree = prompt('Vvedit stepin', '');

function func(x, n) {

  if (n != 1) { // пока n != 1, сводить вычисление pow(x,n) к pow(x,n-1)
    return x * func(x, n - 1);
  } else {
    return x;
  }
}

alert( func(base, degree) ); // 8
