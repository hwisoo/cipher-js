

var sentence = prompt("Enter your sentence.");

console.log(sentence);

var firstChar = sentence.charAt(0).toUpperCase();
var lastChar = sentence.charAt(sentence.length-1).toUpperCase();
var result = lastChar + firstChar;

    var index = Math.floor(sentence.length /2);
    var midChar = sentence.charAt(index).toUpperCase(); 
     console.log(midChar);
    const result2 = midChar + sentence + result;
    
    var reverse = result2.split("").reverse().join(""); 
    

    alert(reverse);


$(function(){
    $("#img1").click(function() {
        alert(sentence);
    })
    $("#img2").click(function() {
        alert(window['reverse']);
    })
    
    });
    

