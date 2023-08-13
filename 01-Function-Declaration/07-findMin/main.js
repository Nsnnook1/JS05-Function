// function max(...args) {
//   if (args.length === 0) {
//     return undefined;
//   }

//   let maxValue = -Infinity;

//   for (let i = 0; i < args.length; i++) {
//     if (typeof args[i] !== "number") {
//       return NaN;
//     }

//     if (args[i] > maxValue) {
//       maxValue = args[i];
//     }
//   }

//   return maxValue;
// }

// console.log(max(2)); 


function max(...args) {
    if (args.some(arg => typeof arg !== 'number')) {
      return NaN;
    }
    return Math.max(...args);
  }
  
  console.log(max());         // undefined
  console.log(max(2));        // 2