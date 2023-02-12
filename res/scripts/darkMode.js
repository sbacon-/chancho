function init(){
    if(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)){
        document.documentElement.classList.add('dark');
    }else{
        document.documentElement.classList.remove('dark');
    }
}

init();

function lightMode(){
    localStorage.theme = 'light';
    init();
}
function darkMode(){
    localStorage.theme = 'dark';
    init();
}
function systemMode(){
    localStorage.removeItem('theme');
    init();
}