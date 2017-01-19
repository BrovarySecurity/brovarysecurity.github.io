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

console.log(func(base, degree));
