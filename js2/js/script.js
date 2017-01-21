var arr = [];

for (var i = 0; i < 5; i++) {
    var name = prompt('Добавте імя до масиву', '');
    var pushName = arr.push(name);
}

console.log(arr);

var nameCompare = prompt('Введіть імя користувача', '');

for (var i = 0; i < arr.length; i++) {
    var result = "Вашого імені немає в масиві";
    if (nameCompare === arr[i]) {
        var result = nameCompare + " ви в списку!";
        break;
    }
}

console.log(result);
