class TextInput{
    constructor(val){
        this.val = val;
    }
    reverse(){
        this.val = this.val.split("").reverse();
        return this.val;
    }
    explode(){
        return this.val.toString().split("").join("    ");
    }
    getVowels(){
        var vowels = ["a", "e", "i", "o", "u"];
        var counter = 0;
        var strVal = this.val.toString();
        for (var i = 0; i < strVal.length; i++){
            if (vowels.includes(strVal.charAt(i))) {
                counter++;
            }
        }
        return counter;
    }
    getFirst(){
        if (!this.val){return ''}
        else{
            var strArr = this.val.toString().split("");
            return strArr[0];
        }
    }
}
window.onload = function(){
   function reverseText() {
        var forward = document.getElementById("tinput").value;
        var text_input = new TextInput(forward);
        document.getElementById("reversed").innerHTML = text_input.reverse();
        document.getElementById("vowels").innerHTML = text_input.getVowels();
        document.getElementById("first_letter").innerHTML = text_input.getFirst();
    
}
    var submitButton = document.getElementById ("sButton");
    if(submitButton.addEventListener) {
        submitButton.addEventListener("click", reverseText);
    } 
}