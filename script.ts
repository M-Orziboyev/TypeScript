//array ***************
const color = ['red', 'black', 'blue'] as string[];
console.log(color);

const colorsNum: (string | number)[] = ['red', 12, 'blue']
console.log(colorsNum);

//any *****************

let smth: any = 1;
console.log(smth);

smth = 'SM';
console.log(smth);

smth = ['black', 'white']

smth = {
    name: "Victor",
    age: '12'
}
console.log(smth);

// function ***************


//void =  bu functionda hech narsa qaytmaslik
function logger(a:number | string):  void {
    if (typeof a === 'number'){
        console.log(a.toFixed(2));
    }else if (typeof a === 'string'){
        console.log(a.toUpperCase());
    }
}

const numbers: number[] = [1,2,3,4,5];
numbers.map((num: number ) => num.toFixed());

//model - required = majburiy talab qilindi 
//model? - required = no majburiy talab qilinmaydi

const logCar = ((car: { name: string, model?: string, year: number }): string => {
    return `Name of the car ${car.name}, model is ${car.model}, created in ${car.year}`;
})

console.log(logCar({ name: 'BMW', model: 'M5', year: 2019 }));
