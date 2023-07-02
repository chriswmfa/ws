function convertToRomanNumber(N: number): string {
    // Define the available Roman numeral symbols and their corresponding values
    const symbols: string[] = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
    const values: number[] = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  
    // Create an empty string to store the Roman numeral representation
    let romanNumeral: string = "";
  
    // Iterate through the symbols and values in descending order
    for (let i = symbols.length - 1; i >= 0; i--) {
      // Check if the current value can be subtracted from the input number
      while (N >= values[i]) {
        // Subtract the value from the input number
        N -= values[i];
        // Add the corresponding symbol to the Roman numeral string
        romanNumeral += symbols[i];
      }
    }
  
    // Return the resulting Roman numeral representation
    return romanNumeral;
  }
  