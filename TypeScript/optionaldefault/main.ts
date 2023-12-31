function sum_(a: number, b: number, c?: number): number {
  console.log("a + b + c");
  console.log(`${a} + ${b} + ${c}`);

  if (c) {
    return a + b + c;
  }

  return a + b;
}

console.log(sum_(1, 5, 5));
