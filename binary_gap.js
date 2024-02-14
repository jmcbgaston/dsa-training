function solution(N) {
  let binaryString = (N >>> 0).toString(2);
  let startCounter = false;
  let maxLength = 0;
  let temp = 0;

  for (let i = 0; i < binaryString.length; i++) {
    // if we find another 1 then close, save, and reset
    if (binaryString[i] === "1" && startCounter) {
      if (temp > maxLength) {
        maxLength = temp;
        temp = 0;
      }
    } else if (binaryString[i] === "1") {
      startCounter = true;
    } else if (binaryString[i] === "0" && startCounter) {
      temp += 1;
    }
  }

  return maxLength;
}

const N = 20;
console.log(solution(N));
