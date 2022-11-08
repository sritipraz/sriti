// window.onload = eventhandler;

// function eventhandler() {
    
//     console.log("Expected output of sum([1,2,3,4]) is 10  " + myFunctionTest(10, sum([1,2,3,4])));

//     console.log("Expected output of multiply([1,2,3,4]) is 24  " + myFunctionTest(24, multiply([1,2,3,4])));

//     console.log("Expected output of reverse(\"jag testar\") is 24  " + myFunctionTest("ratset gaj", reverse("jag testar")));

//     console.log("Expected output of filterLongWords([\"cat\",\"note\",\"pencil\",\"gummy\"]) is [\"pencil\",\"gummy\"] " + myFunctionTest(JSON.stringify(["pencil","gummy"]), JSON.stringify(filterLongWords(["cat","note","pencil","gummy"],4))));

// }

// function myFunctionTest(expected, found) {
//     if (expected === found) {
//       return "TEST SUCCEEDED";
//     } else {
//       return "TEST FAILED.  Expected " + expected + " found " + found;
//     }
//   }
function sum(array1) {
    return array1.reduce((sum, i) => sum+i,0);

}

function multiply(array1) {
    return array1.reduce((mul, i) => mul*i,1);

}

function reverse(s){
    let letters=s.split("");
    return letters.reduce((reverseString,x) => x+reverseString,"");
    //s.split("").reverse().join("");
}

function filterLongWords(words,len){
 let longWords=words.filter(word => word.length>len);
 return longWords;
}