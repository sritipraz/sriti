window.onload = eventhandler;
class Computer
{
constructor(cpu,ram,storage)
{
this.cpu=cpu;
this.ram=ram;
this.storage=storage;
}

runProgram(program)
{
console.log(`running ${program}`);
}
}

class Laptop extends Computer{
    constructor(cpu,ram,storage,battery)
    {
        super(cpu,ram,storage);
        this.battery=battery;
    }

carryAround()
{
console.log("carrying laptop: cpu" + this.cpu +" ram: " + this.ram + " storage: " + this.storage + " battery: " + this.battery);
}

}



function eventhandler() {
   
    
let l=new Laptop(8,16,"1TB",1000);
l.runProgram("Notepad");
l.carryAround();
    console.log("Expected output of max(3, 5) is 5  " + myFunctionTest(5, max(3, 5)));

    // let a = [3, 5, 7];
    console.log("Expected output of maxOfThree(3,5,7) is 7  " + myFunctionTest(7, maxOfThree([3, 5, 7])));

    console.log("Expected output of isVowel(\"a\") is true  " + myFunctionTest(true, isVowel("a")));

    console.log("Expected output of sum([1,2,3,4]) is 10  " + myFunctionTest(10, sum([1, 2, 3, 4])));

    console.log("Expected output of multiply([1,2,3,4]) is 24  " + myFunctionTest(24, multiply([1, 2, 3, 4])));

    console.log("Expected output of reverse(\"jag testar\") is 24  " + myFunctionTest("ratset gaj", reverse("jag testar")));

    console.log("Expected output of findLongestWord([\"cat\",\"note\",\"pencil\",\"gummy\"]) is 6 " + myFunctionTest(6, findLongestWord(["cat", "note", "pencil", "gummy"])));
    console.log("Expected output of filterLongWords([\"cat\",\"note\",\"pencil\",\"gummy\"]) is [\"pencil\",\"gummy\"] " + myFunctionTest(JSON.stringify(["pencil", "gummy"]), JSON.stringify(filterLongWords(["cat", "note", "pencil", "gummy"], 4))));

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
    return array1.reduce((sum, i) => sum + i, 0);

}

function multiply(array1) {
    return array1.reduce((mul, i) => mul * i, 1);

}

function reverse(s) {
    return s.split("").reverse().join("");
}

function findLongestWord(words) {
    let lengths = words.map(word => word.length);
    return maxOfThree(lengths);
}

function filterLongWords(words, len) {
    let longWords = words.filter(word => word.length > len);
    return longWords;
}

// x=1;
    // var a=5;
    // var b=10;
    // var c=function(a,b,c){
    //     console.log(x);
    //     console.log(a);
    //     var f=function(a,b,c){
    //         b=a;
    //         console.log(b);
    //         b=c;
    //         var x=5;
    //     }
    //     f(a,b,c);
    //     console.log(b);
    //     var x=10;
    // }
    // c(8,9,10);
    // console.log(b);
    // console.log(x);


    // var x=9;
    // function myFunction(){
    //     return x*x;
    // }
    // console.log(myFunction());
    // x=5;
    // console.log(myFunction());

    // var foo=1;
    // console.log(foo);
    // function bar(){
    //     // console.log(foo);
    //     if(true)
    //     {
    //         console.log(foo);
    //         var foo=10;}
    //     alert(foo);
    // }
    // bar();