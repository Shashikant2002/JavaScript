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

const sum = <A, B>(a: A, b: B): any => {
  console.log(typeof a);
  console.log(typeof b);
};

sum<number, string>(1, "2");
// sum<string, string>("a", "a");
