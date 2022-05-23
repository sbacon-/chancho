const input = document.querySelector(".num-cash-input");
const output = document.querySelector(".num-cash-output");

//Update result whenever input is changed
input.addEventListener('keyup', (e) =>{
    output.textContent = cashToWord(e.target.value);
});

cashToWord = function(number){//function called on input change
    let result="";

    //Fixing the epsilon decimal non-sense
    let dollars = Math.floor(number);
    let cents = (number-dollars).toPrecision(2);
    cents*=100;

    //Base - number of zeros after the first digit
    let base = 0;
    while(10**base<=dollars){
        base++;
    }

    //Felt like it was excessive already.
    if(base>=333) return "Limit: One Decicentillion [10^(333)]";
    
    //This will run until dollars are less than one million [10^(6)]
    while(base>=6){ 
        let exp = base-(base%3);//round exponent to the nearest -illion
        let temp = convertThree(dollars/10**exp);
        if(temp!="")result+=temp+" "+getBase(exp);//Skip ,000,
        
        dollars%=(10**exp);
        base-=3;
    }

    //Thousands down to cents
    if(dollars>=1_000){ 
        result+=convertThree(dollars/1_000);
        result+=" thousand ";
        dollars%=1000;
    }
    if(dollars>=1){
        result+=convertThree(dollars);
        result+=" ";
        dollars%=1;
    }
    result+="dollars";
    if(cents!=0){
        result+=" ";
        console.log(cents);
        result+=convertThree(cents);
        result+=" cents";
    }

    return result;

}

convertThree = function(number){//Converts numbers into groups of hundreds
    //Dictionaries (Included blank entry for ease of use)
    let dict = ["","one","two","three","four","five","six","seven","eight","nine"]
    let dictTeens = ["","eleven","twelve","thir","four","fif","six","seven","eight","nine"]
    let dictTens = ["","ten","twenty","thirty","fourty","fifty","sixty","seventy","eighty","ninety"]

    let result = "";

    //Hundreds Place
    if(number>=100){
        result+=dict[Math.floor(number/100)]+" hundred ";
        number%=100;
    }

    //Teens Contingency
    if(number>10 && number<20){
        result+=(dictTeens[Math.floor(number-10)]);
        if(number>=13) result+="teen";
        return result;
    }

    //Tens
    if(number>=10){
        result+=dictTens[Math.floor(number/10)]+((number/10>1) && Math.floor(number%10)>0?"-":"");
        number%=10;
    }

    //Ones
    if(number>=1){
        result+=dict[Math.floor(number)];
    }

    return result;
}

getBase = function(number){//Takes the base and returns which -illion you're at
    //Dictionaries (Included blank entry for ease of use)
    let dictIllis = ["","dec","vigint","trigint","quadragint","quinquagint","sexagint","seuagint","octogint","nonagint","cent"];
    let dictTens = ["","un","duo","tres","quatr","quin","se","septe","octo","nove"];
    let dictOnes = ["","m","b","tr","quadr","quint","sext","sept","oct","non"];
    
    //This will make one million (6) index 1, billion (9) index 2 and so forth
    number-=3;
    number/=3;
    
    let result = "";
    
    //Teens Contingency
    if(number>=10){
        result+=dictTens[Math.floor(number%10)];
        result+=dictIllis[Math.floor(number/10)];
    }else{//Ones
        result+=dictOnes[Math.floor(number)];
    }
    result+="illion ";

    return result;
}

//I paste these into excel for my work, so it'd be helpful to just click and have it on the clipboard
//Copy & Pasted from stack overflow
clickToCopy = function(){ 
    let selection = window.getSelection();
    let range = document.createRange();
    range.selectNodeContents(output);//output is the html tag with the result

    selection.removeAllRanges();
    selection.addRange(range);

    document.execCommand("copy"); //I'll have to remember this one
    selection.removeAllRanges();
}
