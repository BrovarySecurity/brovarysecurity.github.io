/*// рекурсія
// Просимо користувача ввести число та степінь
var base = prompt('Введіть число', '');
var degree = prompt('Введіть степінь', '');

// Знайдемо х в степені n, застосовуючи рекурсі/
function func(x, n) {

  if (n != 1) { // пока n != 1, звести розрахунок pow(x,n) до pow(x,n-1)
    return x * func(x, n - 1);
  } else {
    return x;
  }
}

console.log(func(base, degree));*/
var base = prompt('Введіть число', '');
var degree = prompt('Введіть степінь', '');

function pow(a, n) {

    if (n == 0 && a > 0) {
        return 1;
    } else if (n == 0 && a < 0) {
        return -1;
    } else if (n > 0) {
        var b = a;
        for (var i = 1; i < n; i++) {
            b *= a;
        }
        return b;
    } else if (n < 0) {
        var c = a;
        for (var j = 0; j >= n; j--) {
            c *= (10 / a);
            c /= 10;
            console.log(c);
        }
        return c;
    }
}

console.log(pow(base, degree));
