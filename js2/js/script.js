var arr = [];

for (var i = 0; i < 5; i++) {
    var name = prompt('Добавте імя до масиву', '');
    var pushName = arr.push(name);
}

console.log(arr);

var nameCompare = prompt('Введіть імя користувача', '');
var result = "Вашого імені немає в масиві";
var ln = arr.length;

for (var i = 0; i < ln; i++) {
    if (nameCompare === arr[i]) {
        var result = nameCompare + " ви в списку!";
        break;
    }
}

console.log(result);
