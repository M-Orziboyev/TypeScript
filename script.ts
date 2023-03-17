// //array ***************
// const color = ['red', 'black', 'blue'] as string[];
// console.log(color);

// const colorsNum: (string | number)[] = ['red', 12, 'blue']
// console.log(colorsNum);

// //any *****************

// let smth: any = 1;
// console.log(smth);

// smth = 'SM';
// console.log(smth);

// smth = ['black', 'white']

// smth = {
//     name: "Victor",
//     age: '12'
// }
// console.log(smth);

// // function ***************


// //void =  bu functionda hech narsa qaytmaslik
// function logger(a: number | string): void {
//     if (typeof a === 'number') {
//         console.log(a.toFixed(2));
//     } else if (typeof a === 'string') {
//         console.log(a.toUpperCase());
//     }
// }

// const numbers: number[] = [1, 2, 3, 4, 5];
// numbers.map((num: number) => num.toFixed());

// //model - required = majburiy talab qilindi 
// //model? - required = no majburiy talab qilinmaydi

// type ICar = {
//     name: string;
//     model: string;
//     year: number;
// }

// type stringOrNumber = string | number; //string yoki numberligini aniqlaydi

// const logCar = ((car: ICar): string => {
//     return `Name of the car ${car.name}, model is ${car.model}, created in ${car.year}`;
// })

// interface IBmw extends ICar {
//     color: string;
//     extraBallon: boolean;
// }
// const logBmw = ((data: IBmw): string => {
//     return `Name of the IBmw ${data.name}, model - ${data.model}, year ${data.year}, exrtraballon - ${data.extraBallon}`
// })

// console.log(logCar({ name: 'BMW', model: 'M5', year: 2019 }));

// interface IPoint {
//     x: number;
//     y: number;
// }
// interface I3DPoint extends IPoint{
//     z: number;
// }

// function logPoint(point: IPoint):void{
//     const pointD: I3DPoint = point as I3DPoint
//     console.log(pointD.x);
// }

//TASK INTERFACE

// interface car {
//     name: string,
//     color: string,
//     isBallon: boolean,
//     speed: ISpeed,
//     price: IPrice
// }

// interface ISpeed {
//     max: number,
//     min: number
// }

// interface IPrice {
//     total: string,
//     credit: string,
//     discount: number
// }


// Literal type

type actionType = 'hide' | 'show';

function logger(action: actionType): 1 | -1 {
    switch (action) {
        case 'hide':
            return 1
        case "show":
            return -1
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

// enum Dictionary {
//     Rus,
//     Uzb,
//     Eng
// }

// const uzbIndex = Dictionary.Uzb;
// const uzb = Dictionary[uzbIndex]
// console.log(uzb);

// enum Numbers {
//     One,
//     Two,
//     Three,
// }

// function getuzbNumber(number: Numbers) {
//     switch (number) {
//         case Numbers.One:
//             return 'Bir'
//         case Numbers.Two:
//             return 'Ikki'
//         case Numbers.Three:
//             return 'Uch'
//         default:
//             const a: never = number
//     }
// }


//Tuples  =  Array

const array: [number, number,string] = [1,3,'asdw'];
