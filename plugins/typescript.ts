export {}


// ____________________________


let name:string = 'John'
let age:number = 40
let isActive:boolean = true

let numbers:number[] = [1,2,3,4,5]
let strings:string[] = ['john','Zack']

let person:[string,number,boolean]=['john',40,true]


// ENUMS 

enum Color { 
    Red, Green, Blue
}

let favColor:Color = Color.Green

// Advance Types

let dynamicsValue:any=true

let unknownValue:unknown=true

function throwError(message:string): never {
    throw new Error();
}

function logMessage(message:string):void {
    console.log(message)
}

interface Person {
    name:string;
    age:number;
    isActive:boolean;
}

let personObj:Person = {
    name:'John',
    age:40,
    isActive:true
}


interface Employee{
    id:number;
    name:string;
    age:number;
    isActive:boolean;
}

type EmployeeType = Person & Employee

let employee:EmployeeType = {
    id:1,
    name:'John',
    age:40,
    isActive:true
}

function identity<T>(arg:T):T{
    return arg
}

let stringValue = identity<string>('John')
let numberValue = identity<number>(40)  // 40

const input = document.querySelector<HTMLInputElement>('.input');

input?.value

type ApiResponse<Data>={
    data:Data;
    status:number;
}
//const userResponse:ApiResponse<{ name:string, age:number}> = {

const userResponse:ApiResponse<Person> = {
    data:{
        name:'John',
        age:40,
        isActive: true
    },
    status:200
}

const versionResponse:ApiResponse<string> = {
    data:'0.1',
    status:200
}

