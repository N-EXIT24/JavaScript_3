let num = +prompt("Введите кол-во бананов")

for(let i = 1; i <= num; i++){
    if(i == 1){
        console.log(i + ' banana');
    }
    else{
        console.log(i + ' bananas');
    }
}