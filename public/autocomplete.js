let aviableKeywords = [
    "Джон Маккейн",
    "Стив Джобс"
];

const resultbox = document.querySelector(".result-box");
const inputBox =document.getElementById('search');

inputBox.onkeyup=function(){
    let result =[];
    let input = inputBox.value;
    if(input.lenght){
        result =aviableKeywords.filter();
    }
}