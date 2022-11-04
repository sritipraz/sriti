window.onload = eventhandler;

function eventhandler() {
    
    console.log("Expected output of max(3, 5) is 5  " + myFunctionTest(5, max(3, 5)));
    
    let a = [3, 5, 7];
    console.log("Expected output of maxOfThree(3,5,7) is 7  " + myFunctionTest(7, maxOfThree(a)));
    
    console.log("Expected output of isVowel(\"a\") is true  " + myFunctionTest(true,isVowel("a")));
    
    console.log("Expected output of sum([1,2,3,4]) is 10  " + myFunctionTest(10, sum([1,2,3,4])));

    console.log("Expected output of multiply([1,2,3,4]) is 24  " + myFunctionTest(24, multiply([1,2,3,4])));

    console.log("Expected output of reverse(\"jag testar\") is 24  " + myFunctionTest("ratset gaj", reverse("jag testar")));

    console.log("Expected output of findLongestWord([\"cat\",\"note\",\"pencil\",\"gummy\"]) is 6 " + myFunctionTest(6, findLongestWord(["cat","note","pencil","gummy"])));
    console.log("Expected output of filterLongWords([\"cat\",\"note\",\"pencil\",\"gummy\"]) is [\"pencil\",\"gummy\"] " + myFunctionTest(JSON.stringify(["pencil","gummy"]), JSON.stringify(filterLongWords(["cat","note","pencil","gummy"],4))));
}
function myFunctionTest(expected, found) {
    if (expected === found) {
      return "TEST SUCCEEDED";
    } else {
      return "TEST FAILED.  Expected " + expected + " found " + found;
    }
  }

function max(x, y) {
    if (x > y) {

        return x;
    }
    else { 

        return y;
    }
}

function maxOfThree(array) {
    return array.reduce((x, y) => {
        if (x > y) { return x; }
        else { return y; }

    });

}

function isVowel(char) {

    if (char === "a" || char === "i" || char === "o" || char === "u")
        return true;
    else
        return false;

}
function sum(array1) {
    return array1.reduce((sum, i) => sum+i,0);

}

function multiply(array1) {
    return array1.reduce((mul, i) => mul*i,1);

}

function reverse(s){
    return s.split("").reverse().join("");
}

function findLongestWord(words){
    let lengths=words.map(word => word.length);
    return maxOfThree(lengths);
}

function filterLongWords(words,len){
 let longWords=words.filter(word => word.length>len);
 return longWords;
}

