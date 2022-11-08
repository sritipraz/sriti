describe("The sum function",function(){
    it("sum([1,2,3,4]) is 10",function(){
        assert.equal(sum([1,2,3,4]),10);
    });
});

describe("The multiply function",function(){
    it("multiply([1,2,3,4]) returns 24",function(){
        assert.equal(multiply([1,2,3,4]),24);
    });
});

describe("The reverse function",function(){
    it("reverse(\"jag testar\") returns \"ratset gaj\"",function(){
        assert.equal(reverse("jag testar"),"ratset gaj");
    });
});

describe("The filter long words function",function(){
    it("filterLongWords([\"cat\",\"note\",\"pencil\",\"gummy\"],4) returns [\"pencil\",\"gummy\"]",function(){
        assert.equal(JSON.stringify(filterLongWords(["cat","note","pencil","gummy"],4)),JSON.stringify(["pencil","gummy"]));
    });
});