//array ***************
var color = ['red', 'black', 'blue'];
console.log(color);
var colorsNum = ['red', 12, 'blue'];
console.log(colorsNum);
//any *****************
var smth = 1;
console.log(smth);
smth = 'SM';
console.log(smth);
smth = ['black', 'white'];
smth = {
    name: "Victor",
    age: '12'
};
console.log(smth);
// function ***************
//void =  bu functionda hech narsa qaytmaslik
function logger(a) {
    if (typeof a === 'number') {
        console.log(a.toFixed(2));
    }
    else if (typeof a === 'string') {
        console.log(a.toUpperCase());
    }
}
var numbers = [1, 2, 3, 4, 5];
numbers.map(function (num) { return num.toFixed(); });
var logCar = (function (car) {
    return "Name of the car ".concat(car.name, ", model is ").concat(car.model, ", created in ").concat(car.year);
});
var logBmw = (function (data) {
    return "Name of the IBmw ".concat(data.name, ", model - ").concat(data.model, ", year ").concat(data.year, ", exrtraballon - ").concat(data.extraBallon);
});
console.log(logCar({ name: 'BMW', model: 'M5', year: 2019 }));
function logPoint(point) {
    var pointD = point;
    console.log(pointD.x);
}
