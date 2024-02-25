let aviableKeywords = [
    "Джон Маккейн",
    "Сти́вен Пол (Стив) Джобс",
    "Владимир Ильич Ленин",
    "Барак Обама",
    "Уинстон Черчилль",
    "Иосиф Сталин",
    "Цицерон",
    "Авраам Линкольн",
    "Мохандас Ганди",
    "Грета Тунберг",
    "Адольф Гитлер",
    "Демосфен",
    "Исократ",
    "Бернард Клерво",
    "Августин Аврелий",
    "Томас Бекет",
    "Микеланджело Буонарроти",
    "Лоренцо Медичи",
    "Мартин Лютер"



];

const resultbox = document.querySelector(".result-box");
const inputBox =document.getElementById('searchRol');

inputBox.onkeyup=function(){
    let result =[];
    let input = inputBox.value;
    if(input.length){
        result =aviableKeywords.filter((keyword)=>{
        return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);

    if(!result.length){
        resultbox.innerHTML = '';
    }
}

function display(result){
    const content = result.map((list) =>{
        return "<li onclick =selectInput(this)>" + list + "</li>";
    });
    resultbox.innerHTML="<ul>" + content.join('') + "</ul>";
}

function selectInput(list){
    inputBox.value = list.innerHTML;
    resultbox.innerHTML = '';
}
