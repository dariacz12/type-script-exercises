const printFibonacciNumbers = ({
  startIndex,
  endIndex,
}: {
  startIndex: number;
  endIndex: number;
}): number[] => {
  const output: number[] = [0, 1];
  for (let i = output[0]; i <= endIndex - 3; i++) {
    output.push(output[output.length - 2] + output[output.length - 1]);
  }
  output.splice(0, startIndex);
  return output;
};

console.log(printFibonacciNumbers({ startIndex: 1, endIndex: 3 }));
