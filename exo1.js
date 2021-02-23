let number1 = "2";
let number2 = "5";

function retourString(number1, number2){
    let number3 = (parseInt(number1) + parseInt(number2)) ;

    console.log("" + number3 + "");
    return(number3);
}

retourString(number1, number2);