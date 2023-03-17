// //array ***************
// const color = ['red', 'black', 'blue'] as string[];
// console.log(color);
function logger(action) {
    switch (action) {
        case 'hide':
            return 1;
        case "show":
            return -1;
    }
}
//ENUM 
// const runEnum = (): number => {
//     return 2 
// }
// enum Decision {
//     Yes = 1,
//     No = runEnum(),
// }
var Dictionary;
(function (Dictionary) {
    Dictionary[Dictionary["Rus"] = 0] = "Rus";
    Dictionary[Dictionary["Uzb"] = 1] = "Uzb";
    Dictionary[Dictionary["Eng"] = 2] = "Eng";
})(Dictionary || (Dictionary = {}));
var uzbIndex = Dictionary.Uzb;
var uzb = Dictionary[uzbIndex];
console.log(uzb);
var Numbers;
(function (Numbers) {
    Numbers[Numbers["One"] = 0] = "One";
    Numbers[Numbers["Two"] = 1] = "Two";
    Numbers[Numbers["Three"] = 2] = "Three";
})(Numbers || (Numbers = {}));
function getuzbNumber(number) {
    switch (number) {
        case Numbers.One:
            return 'Bir';
        case Numbers.Two:
            return 'Ikki';
        case Numbers.Three:
            return 'Uch';
    }
}
