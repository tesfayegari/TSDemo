var student:string = "Some student Name";
var num = "4444AAV";
var a = <number> <any>num;
console.log(num,a,typeof(a))

interface SquareConfig {
    color?: string;
    width?: number;
   // [propName: string]: any;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    return {color: 'test',area:2};
}

//let mySquare = createSquare({ colour: "red", width: 100 });

let squareOptions = { colour: "red", width: 100 };
let mySquare = createSquare(squareOptions);