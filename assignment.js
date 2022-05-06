//Answer to question 1

function printSum(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum +=(arr[i]);  
    }
return sum;
}

// Answer to question 2

function comparePoints(a,b){
    let alicePoint = 0;
    let bobPoint = 0;
  for (let i = 0; i < a.length; i++) {
      if(a[i] > b[i]){
          alicePoint += 1;
      }else if(b[i] > a[i]){
          bobPoint += 1;
      }
  }
    let result = [];
    result.push(alicePoint, bobPoint);
    return result;
};

// Answer to question 3

function calculateRatio(arr){
    let length = arr.length;
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;

    for (let i = 0; i < length; i++){
      if(arr[i] > 0) {positiveCount++;
    }
      else if(arr[i] < 0) {negativeCount++;
    }
      else if(arr[i] === 0) {zeroCount++;
    }
  }

    let positiveRatio = (positiveCount/length).toFixed(2);
    let negativeRatio = (negativeCount/length).toFixed(2);
    let zeroRatio = (zeroCount/length).toFixed(2);

return ([positiveRatio, negativeRatio, zeroRatio]);
};

// Answer to question 4

function firstFunction(a,b){
    return a + b;
};


console.log("i have finished my assignment");