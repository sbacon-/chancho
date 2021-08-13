console.log("|--- Hello! ---|")
let memory = 0;
let task = "na"
let newNumber = true;
let display = document.querySelectorAll(".calc-display.calc-row");

function clearContent(){
    display[0].innerHTML="0";
};

function appendContent(number){
    if((number!=='.'&&display[0].innerHTML==0)||newNumber) display[0].innerHTML="";
    display[0].innerHTML+=number;
    newNumber=false;
}

function flushToMemory(request){
    memory = parseFloat(display[0].innerHTML);
    task=request;
    newNumber=true;
}

function calculate(){
    let active = parseFloat(display[0].innerHTML);
    switch(task){
        case `add`:
            display[0].innerHTML= memory+active;
            break;
        case `subtract`:
            display[0].innerHTML= memory-active;
            break;
        case `multiply`:
            display[0].innerHTML= memory*active;
            break;
        case `divide`:
            display[0].innerHTML= memory/active;
            break;
        default:
            display[0].innerHTML="Error: CE";
            task='na';
            break;
    }
    newNumber=true;
}

function backspace(){
    display[0].innerHTML=display[0].innerHTML.substr(0,display[0].innerHTML.length-1);
}