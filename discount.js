const targetTotal = 57;
const percentagePrecision = 100;

for (let x = 0; x <= percentagePrecision; x++) {
  for (let y = 0; y <= percentagePrecision; y++) {
    const deduction1 = 38 * (x / percentagePrecision);
    const deduction2 = 39 * (y / percentagePrecision);
    const result = 38 - deduction1 + 39 - deduction2;

    if (result === targetTotal) {
      const percentage1 = x / percentagePrecision;
      const percentage2 = y / percentagePrecision;
      console.log(`Percentage to deduct from 38: ${percentage1}`);
      console.log(`Percentage to deduct from 39: ${percentage2}`);
      return; // Stops the script after finding the first solution
    }
  }
}

console.log("No solution found.");