// function playlist(songs) {
//   let count = 0;
//   let remainderFreq = Array(60).fill(0);

//   debugger;

//   for (let i = 0; i < songs.length; i++) {
//     let remainder = songs[i] % 60;
//     let complement = (60 - remainder) % 60;
//     debugger;

//     count += remainderFreq[complement];
//     remainderFreq[remainder]++;
//     debugger;
//   }

//   debugger;
//   return count;
// }

const songs = [50, 60, 90, 80, 10, 20, 40, 30];
console.log(playlist(songs));

function playlist(songs) {
  // keep track of count
  let count = 0;
  // create array of possible remainders 0 - 59
  // we would never have a remainder of 60 because 60 % 60 is 0
  let remFreq = new Array(60).fill(0);
  debugger;

  for (let i = 0; i < songs.length; i++) {
    // remainder = num % 60
    let remainder = songs[i] % 60;
    // we use the complement as a diff tool
    // ie. if we ever come across a 10 then we know that we've seen a 50
    let complement = 60 - remainder;
    debugger;

    // if the complementary value exists in the frequency table, add the current valu to the count
    count += remFreq[complement];
    // update count of remainders
    remFreq[remainder]++;
    debugger;
  }

  debugger;
  return count;
}
