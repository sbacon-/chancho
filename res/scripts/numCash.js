const input = document.querySelector(".num-cash-input");
const output = document.querySelector(".num-cash-output");

input.addEventListener('keyup', (e) =>{
    output.textContent = cashToWord(e.target.value);
});

cashToWord = function(number){
    let result="";
    if(number>1_000_000){
        result+=convertThree(number/1_000_000);
        result+=" million ";
        number%=1000000;
    }
    if(number>1_000){
        result+=convertThree(number/1_000);
        result+=" thousand ";
        number%=1000;
    }
    if(number>1){
        result+=convertThree(number);
        result+=" ";
        number%=1;
    }
    result+="dollars "
    if(number!=0){
        result+=convertThree(Math.round(number*100));
        result+=" cents"
    }

    return result;

}

convertThree = function(number){
    let result = ""
    let dict = ["","one","two","three","four","five","six","seven","eight","nine"]
    let dict_teens = ["","eleven","twelve","thir","four","fif","six","seven","eight","nine"]
    let dict_tens = ["","ten","twenty","thirty","fourty","fifty","sixty","seventy","eighty","ninety"]

    //Hundreds Place
    if(number>=100){
        result+=dict[Math.floor(number/100)]+" hundred ";
        number%=100;
    }

    //Teens Contingency
    if(number>10 && number<20){
        result+=(dict_teens[Math.floor(number-10)])
        if(number>=13) result+="teen"
        return result;
    }

    //Tens
    if(number>=10){
        result+=dict_tens[Math.floor(number/10)]+(number/10>1?"-":"");
        number%=10;
    }

    //Ones
    if(number>=1){
        result+=dict[Math.floor(number)];
    }

    return result;
}

clickToCopy = function(){
    let selection = window.getSelection();
    let range = document.createRange();
    range.selectNodeContents(output);

    selection.removeAllRanges();
    selection.addRange(range);

    document.execCommand("copy");
}

