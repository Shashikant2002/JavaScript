"use strict";
// // Generics
// // function greet(value: string | number | boolean): string | boolean {
// //   return `hello ${value}`;
// // }
// function greet<T>(value: T): T {
//   return value;
// }
// greet<string>("Shashikant");
// greet<boolean>(true);
// greet<number>(45);
const sum = (a, b) => {
    console.log(typeof a);
    console.log(typeof b);
};
sum(1, "2");
// sum<string, string>("a", "a");
